// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Removes the leading white space and line terminator characters from a string.
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { trimStart } from "https://deno.land/x/prelude_js@$VERSION/trim_start.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(trimStart(" deno "), "deno ");
 * ```
 */
export function trimStart(input: string): string {
  return input.trimStart();
}
