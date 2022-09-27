/**
 * Returns a string representation of an object.
 * @param radix Specifies a radix for converting numeric values to strings.
 */
export function toString(value: bigint, radix?: number): string {
  return value.toString(radix);
}

/** Returns a string representation appropriate to the host environment's current locale. */
export function toLocaleString(
  value: bigint,
  locales?: Intl.LocalesArgument,
  options?: BigIntToLocaleStringOptions,
): string {
  return value.toLocaleString(locales, options);
}

/** Returns the primitive value of the specified object. */
export function valueOf(value: bigint): bigint {
  return value.valueOf();
}
