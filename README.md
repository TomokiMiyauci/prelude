# prelude

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/prelude_js)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/TomokiMiyauci/prelude)](https://github.com/TomokiMiyauci/prelude/releases)
[![codecov](https://codecov.io/github/TomokiMiyauci/prelude/branch/main/graph/badge.svg)](https://codecov.io/gh/TomokiMiyauci/prelude)
[![GitHub](https://img.shields.io/github/license/TomokiMiyauci/prelude)](https://github.com/TomokiMiyauci/prelude/blob/main/LICENSE)

[![test](https://github.com/TomokiMiyauci/prelude/actions/workflows/test.yaml/badge.svg)](https://github.com/TomokiMiyauci/prelude/actions/workflows/test.yaml)
[![NPM](https://nodei.co/npm/@miyauci/prelude.png?mini=true)](https://nodei.co/npm/@miyauci/prelude/)

The standard module for functional programming.

## What

A minimalist collection of functions to support functional programming.

For example, it includes the following:

- Method as function

### Method as function

If you wanted to apply `trim` to all elements of a `string[]`, you would do
something like this:

```ts
const runtime = [" deno ", " node.js"].map((v) => v.trim());
```

Use `string#trim`.

```ts
import { trim } from "https://deno.land/x/prelude_js@$VERSION/trim.ts";
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

## trimStart

Removes the leading white space and line terminator characters from a string.

```ts
import { trimStart } from "https://deno.land/x/prelude_js@$VERSION/trim_start.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(trimStart(" deno "), "deno ");
```

## trimEnd

Removes the trailing white space and line terminator characters from a string.

```ts
import { trimEnd } from "https://deno.land/x/prelude_js@$VERSION/trim_end.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(trimEnd(" deno "), " deno");
```

## toUpperCase

Converts all the alphabetic characters in a string to uppercase.

```ts
import { toUpperCase } from "https://deno.land/x/prelude_js@$VERSION/to_upper_case.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(toUpperCase("deno"), "DENO");
```

## toLowerCase

Converts all the alphabetic characters in a string to lowercase.

```ts
import { toLowerCase } from "https://deno.land/x/prelude_js@$VERSION/to_lower_case.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(toLowerCase("Deno"), "deno");
```

## Where is mod?

There is no single entry point such as `mod`.

This prevents the inclusion of many unnecessary modules.

## License

Copyright © 2023-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
