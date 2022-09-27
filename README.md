# prelude-js

A standard module for functional programming in JavaScript.

## What

A minimalist collection of functions to support functional programming.

For example, it includes the following:

- Methods of built-in data types as functions.

  If you wanted to apply `trim` to all elements of a `string[]`, you would do
  something like this:

  ```ts
  const runtime = [" deno ", " node.js"].map((v) => v.trim());
  ```

  Use `string#trim`.

  ```ts
  import { trim } from "https://deno.land/x/prelude_js@$VERSION/string.ts";
  const runtime = [" deno ", " node.js"].map(trim);
  ```

## Method as function

Methods are provided as functions from built-in data types.

The independence of methods as functions is convenient for functional
programming.

### endpoint

Endpoints are provided with the following rules.

```ts
import * as methods from "https://deno.land/x/prelude_js@$VERSION/<data_type>.ts";
```

where `<data_type>` denotes the data type.

For example:

- string
- number
- object

You can import any module you like via `namespace import` or `named import`.

```ts
import * as String from "https://deno.land/x/prelude_js@$VERSION/string.ts";
import { trim } from "https://deno.land/x/prelude_js@$VERSION/string.ts";
String.trim(" hello ");
trim(" world ");
```

### string

```ts
import * as String from "https://deno.land/x/prelude_js@$VERSION/string.ts";
```

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
- length

### number

```ts
import * as Number from "https://deno.land/x/prelude_js@$VERSION/number.ts";
```

- toFixed
- toExponential
- toPrecision
- valueOf

### bigint

```ts
import * as Bigint from "https://deno.land/x/prelude_js@$VERSION/bigint.ts";
```

- toString
- toLocaleString
- valueOf

### object

```ts
import * as Object from "https://deno.land/x/prelude_js@$VERSION/object.ts";
```

- constructor
- toString
- toLocaleString
- valueOf

## License

Copyright © 2022-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
