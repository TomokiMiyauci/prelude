/**
 * Returns a string representing a number in fixed-point notation.
 * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
export function toFixed(value: number, fractionDigits?: number): string {
  return value.toFixed(fractionDigits);
}

/**
 * Returns a string containing a number represented in exponential notation.
 * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
export function toExponential(value: number, fractionDigits?: number): string {
  return value.toExponential(fractionDigits);
}

/**
 * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
 * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
 */
export function toPrecision(value: number, precision?: number): string {
  return value.toPrecision(precision);
}

/** Returns the primitive value of the specified object. */
export function valueOf(value: number): number {
  return value.valueOf();
}
