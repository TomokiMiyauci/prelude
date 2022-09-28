/** Returns the length. */
export function length<T extends Readonly<{ length: unknown }>>(
  value: T,
): T["length"] {
  return value.length;
}

/** Returns the `description`. */
export function description<T extends Readonly<{ description: unknown }>>(
  value: T,
): T["description"] {
  return value.description;
}

/** Returns the `constructor`. */
export function constructor<T extends Readonly<{ constructor: unknown }>>(
  value: T,
): T["constructor"] {
  return value.constructor;
}
