// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Converts all the alphabetic characters in a string to lowercase.
 *
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { toLowerCase } from "https://deno.land/x/prelude_js@$VERSION/to_lower_case.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(toLowerCase("Deno"), "deno");
 * ```
 */
export function toLowerCase<T extends string>(input: T): Lowercase<T> {
  return input.toLowerCase() as Lowercase<T>;
}
