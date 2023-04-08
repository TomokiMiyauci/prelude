// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "./deps.ts";

/** Returns the first element of the given template literal.
 * @param input Any template literal.
 *
 * @example
 * ```ts
 * import { head } from "https://deno.land/x/prelude_js@$VERSION/head.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(head(""), "");
 * assertEquals(head("abc"), "a");
 * ```
 */
export function head<T extends string>(input: `${T}${string}`): T;

/** Returns the first element of the given string.
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { head } from "https://deno.land/x/prelude_js@$VERSION/head.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(head("" as string), "");
 * ```
 */
export function head(input: string): string;

/** Returns the first element of the given tuple.
 * @param input Any tuple.
 *
 * @example
 * ```ts
 * import { head } from "https://deno.land/x/prelude_js@$VERSION/head.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(head([]), undefined);
 * assertEquals(head([1, 2, 3]), 1);
 * ```
 */
export function head<const T>(input: readonly [T, ...unknown[]]): T;

/** Returns the first element of the given iterable.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { head } from "https://deno.land/x/prelude_js@$VERSION/head.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(head(new Set(["x", "y", "z"])), "x");
 * ```
 */
export function head<T>(input: Iterable<T>): T | undefined;

export function head<T>(input: Iterable<T>): T | undefined {
  for (const el of input) {
    return el;
  }

  return isString(input) ? "" as T : undefined;
}
