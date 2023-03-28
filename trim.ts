// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Removes the leading and trailing white space and line terminator characters from a string.
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { trim } from "https://deno.land/x/prelude_js@$VERSION/trim.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(trim(" deno "), "deno");
 * ```
 */
export function trim(input: string): string {
  return input.trim();
}
