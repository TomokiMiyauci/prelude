/** Take head(first) element from list.
 *
 * ```ts
 * import { head } from "https://deno.land/x/prelude_js@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 *
 * assertEquals(head(""), undefined);
 * assertEquals(head("abcd"), "a");
 * assertEquals(head([]), undefined);
 * assertEquals(head([1, 2, 3]), 1);
 * ```
 */
export function head<T extends readonly [unknown, ...readonly unknown[]]>(
  value: T,
): T[0];
export function head<T>(value: Iterable<T>): T | undefined;
export function head(value: Iterable<unknown>): unknown {
  const [first] = value;

  return first;
}
