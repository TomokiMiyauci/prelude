/** Take head(first) element of list. */
export function head<T extends readonly [unknown, ...readonly unknown[]]>(
  value: T,
): T[0];
export function head<T>(value: Iterable<T>): T | undefined;
export function head(value: Iterable<unknown>): unknown {
  const [first] = value;

  return first;
}
