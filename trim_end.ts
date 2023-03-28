// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Removes the trailing white space and line terminator characters from a string.
 *
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { trimEnd } from "https://deno.land/x/prelude_js@$VERSION/trim_end.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(trimEnd(" deno "), " deno");
 * ```
 */
export function trimEnd(input: string): string {
  return input.trimEnd();
}
