import {
  BuildOptions,
  EntryPoint,
} from "https://deno.land/x/dnt@0.34.0/mod.ts";

import { expandGlobSync } from "https://deno.land/std@0.181.0/fs/expand_glob.ts";
import {
  fromFileUrl,
  join,
  parse,
  relative,
} from "https://deno.land/std@0.181.0/path/mod.ts";

interface ModuleInfo {
  readonly name: string;
  readonly path: string;
}

function path2EntryPoint(module: ModuleInfo): EntryPoint {
  const entryPoint: EntryPoint = {
    name: toRelative(module.name),
    path: toRelative(module.path),
  };

  return entryPoint;
}

function module2TypeVersions(modules: readonly ModuleInfo[]) {
  const entries = modules.map(({ name, path }) => {
    return [name, [join("types", toDts(path))]];
  });
  const map = Object.fromEntries(entries);

  return { "*": map };
}

function toRelative(path: string): string {
  return path.startsWith("./") ? path : "./" + path;
}

function toDts(path: string): string {
  return path.replace(/.ts$/, ".d.ts");
}

export const makeOptions = (version: string): BuildOptions => {
  const root = fromFileUrl(import.meta.resolve("../"));
  const entries = expandGlobSync("!(*_test.ts|_*.ts)*.ts", {
    includeDirs: false,
    root,
  });

  const modules = [...entries].map(({ path }) => relative(root, path)).map(
    (path) => {
      const parsed = parse(path);
      const name = join(parsed.dir, parsed.name) + ".js";

      return { name, path };
    },
  );

  const entryPoints = modules.map(path2EntryPoint);
  const typesVersions = module2TypeVersions(modules);

  return {
    test: false,
    shims: {},
    typeCheck: true,
    entryPoints,
    outDir: "./npm",
    package: {
      name: "@miyauci/prelude",
      version,
      description: "The standard module for functional programming",
      license: "MIT",
      sideEffects: false,
      type: "module",
      author: {
        name: "TomokiMiyauci",
        email: "contact@miyauchi.dev",
        url: "https://miyauchi.dev/",
      },
      main: undefined,
      module: undefined,
      types: undefined,

      repository: {
        type: "git",
        url: "https://github.com/TomokiMiyauci/prelude.git",
      },
      bugs: {
        url: "https://github.com/TomokiMiyauci/prelude/issues",
      },
      homepage: "https://github.com/TomokiMiyauci/prelude",
      keywords: [
        "prelude",
        "functional",
        "utility",
        "utilities",
        "function",
      ],
      publishConfig: { access: "public" },

      typesVersions,
    },
    packageManager: "pnpm",
    mappings: {
      "https://deno.land/x/isx@1.1.1/is_string.ts": {
        name: "@miyauci/isx",
        version: "1.1.1",
        subPath: "is_string",
      },
    },
  };
};
