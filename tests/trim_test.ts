import {
  assertEquals,
  assertSpyCallArgs,
  assertSpyCalls,
  spy,
  stub,
} from "../_dev_deps.ts";
import { trim } from "../trim.ts";

Deno.test("should call trim", () => {
  const expected = "";
  const fn = spy(() => expected);
  const string = new String();
  const Stub = stub(string, "trim", fn);

  assertEquals(trim(string as string), expected);
  assertSpyCalls(fn, 1);
  assertSpyCallArgs(fn, 0, []);
  Stub.restore();
});
