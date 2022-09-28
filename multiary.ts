import { AnyFn } from "./deps.ts";

/** Apply `trim`. */
export function trim<T extends Readonly<{ trim: AnyFn }>>(
  value: T,
  ...args: Parameters<T["trim"]>
): ReturnType<T["trim"]> {
  return value.trim(args);
}

/** Apply `trimStart` */
export function trimStart<T extends Readonly<{ trimStart: AnyFn }>>(
  value: T,
  ...args: Parameters<T["trimStart"]>
): ReturnType<T["trimStart"]> {
  return value.trimStart(args);
}

/** Apply `trimEnd` */
export function trimEnd<T extends Readonly<{ trimEnd: AnyFn }>>(
  value: T,
  ...args: Parameters<T["trimEnd"]>
): ReturnType<T["trimEnd"]> {
  return value.trimEnd(args);
}

/** Apply `valueOf` */
export function valueOf<T extends Readonly<{ valueOf: AnyFn }>>(
  value: T,
  ...args: Parameters<T["valueOf"]>
): ReturnType<T["valueOf"]> {
  return value.valueOf(args);
}

/** Apply `toUpperCase`. */
export function toUpperCase<T extends Readonly<{ toUpperCase: AnyFn }>>(
  value: T,
  ...args: Parameters<T["toUpperCase"]>
): ReturnType<T["toUpperCase"]> {
  return value.toUpperCase(args);
}

/** Apply `toLowerCase`. */
export function toLowerCase<T extends Readonly<{ toLowerCase: AnyFn }>>(
  value: T,
  ...args: Parameters<T["toLowerCase"]>
): ReturnType<T["toLowerCase"]> {
  return value.toLowerCase(args);
}

/** Apply `toString`. */
export function toString<
  T extends Readonly<{ toString: AnyFn }>,
>(
  value: T,
  ...args: Parameters<T["toString"]>
): ReturnType<T["toString"]> {
  return value.toString(args);
}

/** Apply `toLocaleString`. */
export function toLocaleString<
  T extends Readonly<{ toLocaleString: AnyFn }>,
>(
  value: T,
  ...args: Parameters<T["toLocaleString"]>
): ReturnType<T["toLocaleString"]> {
  return value.toLocaleString(args);
}

/** Apply `toFixed`. */
export function toFixed<
  T extends Readonly<{ toFixed: AnyFn }>,
>(
  value: T,
  ...args: Parameters<T["toFixed"]>
): ReturnType<T["toFixed"]> {
  return value.toFixed(args);
}

/** Apply `toExponential`. */
export function toExponential<
  T extends Readonly<{ toExponential: AnyFn }>,
>(
  value: T,
  ...args: Parameters<T["toExponential"]>
): ReturnType<T["toExponential"]> {
  return value.toExponential(args);
}

/** Apply `toPrecision`. */
export function toPrecision<
  T extends Readonly<{ toPrecision: AnyFn }>,
>(
  value: T,
  ...args: Parameters<T["toPrecision"]>
): ReturnType<T["toPrecision"]> {
  return value.toPrecision(args);
}

/** Apply `at`. */
export function at<T extends Readonly<{ at: AnyFn }>>(
  value: T,
  ...args: Parameters<T["at"]>
): ReturnType<T["at"]> {
  return value.at(args);
}

/** Apply `charCodeAt`. */
export function charCodeAt<T extends Readonly<{ charCodeAt: AnyFn }>>(
  value: T,
  ...args: Parameters<T["charCodeAt"]>
): ReturnType<T["charCodeAt"]> {
  return value.charCodeAt(args);
}

/** Apply `codePointAt`. */
export function codePointAt<T extends Readonly<{ codePointAt: AnyFn }>>(
  value: T,
  ...args: Parameters<T["codePointAt"]>
): ReturnType<T["codePointAt"]> {
  return value.codePointAt(args);
}

/** Apply `concat`. */
export function concat<T extends Readonly<{ concat: AnyFn }>>(
  value: T,
  ...args: Parameters<T["concat"]>
): ReturnType<T["concat"]> {
  return value.concat(args);
}

/** Apply `indexOf`. */
export function indexOf<T extends Readonly<{ indexOf: AnyFn }>>(
  value: T,
  ...args: Parameters<T["indexOf"]>
): ReturnType<T["indexOf"]> {
  return value.indexOf(args);
}

/** Apply `lastIndexOf`. */
export function lastIndexOf<T extends Readonly<{ lastIndexOf: AnyFn }>>(
  value: T,
  ...args: Parameters<T["lastIndexOf"]>
): ReturnType<T["lastIndexOf"]> {
  return value.lastIndexOf(args);
}

/** Apply `localeCompare`. */
export function localeCompare<T extends Readonly<{ localeCompare: AnyFn }>>(
  value: T,
  ...args: Parameters<T["localeCompare"]>
): ReturnType<T["localeCompare"]> {
  return value.localeCompare(args);
}

/** Apply `match`. */
export function match<T extends Readonly<{ match: AnyFn }>>(
  value: T,
  ...args: Parameters<T["match"]>
): ReturnType<T["match"]> {
  return value.match(args);
}

/** Apply `search`. */
export function search<T extends Readonly<{ search: AnyFn }>>(
  value: T,
  ...args: Parameters<T["search"]>
): ReturnType<T["search"]> {
  return value.search(args);
}

/** Apply `slice`. */
export function slice<T extends Readonly<{ slice: AnyFn }>>(
  value: T,
  ...args: Parameters<T["slice"]>
): ReturnType<T["slice"]> {
  return value.slice(args);
}

/** Apply `substring`. */
export function substring<T extends Readonly<{ substring: AnyFn }>>(
  value: T,
  ...args: Parameters<T["substring"]>
): ReturnType<T["substring"]> {
  return value.substring(args);
}

/** Apply `toLocaleLowerCase`. */
export function toLocaleLowerCase<
  T extends Readonly<{ toLocaleLowerCase: AnyFn }>,
>(
  value: T,
  ...args: Parameters<T["toLocaleLowerCase"]>
): ReturnType<T["toLocaleLowerCase"]> {
  return value.toLocaleLowerCase(args);
}

/** Apply `toLocaleUpperCase`. */
export function toLocaleUpperCase<
  T extends Readonly<{ toLocaleUpperCase: AnyFn }>,
>(
  value: T,
  ...args: Parameters<T["toLocaleUpperCase"]>
): ReturnType<T["toLocaleUpperCase"]> {
  return value.toLocaleUpperCase(args);
}
