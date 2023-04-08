// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "./deps.ts";

/** Returns the last element of the given string.
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { last } from "https://deno.land/x/prelude_js@$VERSION/last.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(last(""), "");
 * assertEquals(last("abc"), "c");
 * ```
 */
export function last<T extends string>(input: T): LastString<T>;

/** Returns the last element of the given tuple.
 * @param input Any tuple.
 *
 * @example
 * ```ts
 * import { last } from "https://deno.land/x/prelude_js@$VERSION/last.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(last([]), undefined);
 * assertEquals(last([1, 2, 3]), 3);
 * ```
 */
export function last<const T>(input: readonly [...unknown[], T]): T;

/** Returns the last element of the given iterable.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { last } from "https://deno.land/x/prelude_js@$VERSION/last.ts";
 * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertEquals(last(new Set(["x", "y", "z"])), "z");
 * ```
 */
export function last<T>(input: Iterable<T>): T | undefined;
export function last<T>(input: Iterable<T>): T | undefined {
  const result = [...input].pop();

  return isString(input) ? result ?? "" as T : result;
}

/** Infer the last element of string. */
export type LastString<T extends string> = T extends `${infer L}${infer R}`
  ? R extends "" ? L : LastString<R>
  : string;
