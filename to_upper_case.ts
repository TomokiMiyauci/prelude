/** Converts all the alphabetic characters in a string to uppercase.
 *
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { toUpperCase } from "https://deno.land/x/prelude_js@$VERSION/to_upper_case.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(toUpperCase("deno"), "DENO");
 * ```
 */
export function toUpperCase<T extends string>(input: T): Uppercase<T> {
  return input.toUpperCase() as Uppercase<T>;
}
