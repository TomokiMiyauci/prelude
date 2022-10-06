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

## Method as function

Methods are provided as functions from any objects.

The independence of methods as functions is convenient for functional
programming.

### unary

Property is provided as unary.

- constructor
- description
- length

## multiary

Method is provided as a multiary.

- at
- charAt
- charCodeAt
- codePointAt
- concat
- indexOf
- lastIndexOf
- localeCompare
- match
- search
- slice
- split
- substring
- toLowerCase
- toLocaleLowerCase
- toUpperCase
- toLocaleUpperCase
- trim
- valueOf
- trimStart
- trimEnd
- toFixed
- toExponential
- toPrecision
- toString
- toLocaleString

## List

A list in this project refers to an `Iterable` object.

### Head

Take head(first) element from list.

```ts
import { head } from "https://deno.land/x/prelude_js@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";

assertEquals(head(""), undefined);
assertEquals(head("abcd"), "a");
assertEquals(head([]), undefined);
assertEquals(head([1, 2, 3]), 1);
```

## License

Copyright © 2022-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
