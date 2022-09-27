// deno-lint-ignore-file ban-types
/** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
export function constructor(value: Object): Function {
  return value.constructor;
}

/** Returns a string representation of an object. */
export function toString(value: Object): string {
  return value.toString();
}

/** Returns a date converted to a string using the current locale. */
export function toLocaleString(value: Object): string {
  return value.toLocaleString();
}

/** Returns the primitive value of the specified object. */
export function valueOf(value: Object): Object {
  return value.valueOf();
}
