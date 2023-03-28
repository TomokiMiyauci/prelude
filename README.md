# prelude-js

A standard module for functional programming in JavaScript.

## What

A minimalist collection of functions to support functional programming.

For example, it includes the following:

- Method of object as function.

  If you wanted to apply `trim` to all elements of a `string[]`, you would do
  something like this:

  ```ts
  const runtime = [" deno ", " node.js"].map((v) => v.trim());
  ```

  Use `string#trim`.

  ```ts
  import { trim } from "https://deno.land/x/prelude_js@$VERSION/mod.ts";
  const runtime = [" deno ", " node.js"].map(trim);
  ```

## trim

Removes the leading and trailing white space and line terminator characters from
a string.

```ts
import { trim } from "https://deno.land/x/prelude_js@$VERSION/trim.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(trim(" deno "), "deno");
```

## License

Copyright © 2022-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
