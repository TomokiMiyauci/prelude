/** Take property from record.
 *
 * ```ts
 * import { prop } from "https://deno.land/x/prelude_js@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 *
 * assertEquals(prop("value")({ value: 123 }), 123);
 * ```
 */
export function prop<T extends PropertyKey>(
  key: T,
): <U extends { [k in T]: unknown }>(value: U) => U[T] {
  return (value) => value[key];
}
