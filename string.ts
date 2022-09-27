/**
 * Returns a new String consisting of the single UTF-16 code unit located at the specified index.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export function at(value: string, index: number): string | undefined {
  return value.at(index);
}

/**
 * Returns the character at the specified index.
 *
 * @param pos The zero-based index of the desired character.
 */
export function charAt(value: string, pos: number): string {
  return value.charAt(pos);
}

/**
 * Returns the Unicode value of the character at the specified location.
 * @param index The zero-based index of the desired character.
 * If there is no character at the specified index, NaN is returned.
 */
export function charCodeAt(value: string, index: number): number {
  return value.charCodeAt(index);
}

/**
 * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String.
 * If there is no element at that position, the result is undefined.
 * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
 */
export function codePointAt(value: string, pos: number): number | undefined {
  return value.codePointAt(pos);
}

/**
 * Returns a string that contains the concatenation of two or more strings.
 * @param strings The strings to append to the end of the string.
 */
export function concat(value: string, ...strings: string[]): string {
  return value.concat(...strings);
}

/**
 * Returns the position of the first occurrence of a substring.
 * @param searchString The substring to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export function indexOf(
  value: string,
  searchString: string,
  position?: number,
): number {
  return value.indexOf(searchString, position);
}

/**
 * Returns the last occurrence of a substring in the string.
 * @param searchString The substring to search for.
 * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
 */
export function lastIndexOf(
  value: string,
  searchString: string,
  position?: number,
): number {
  return value.lastIndexOf(searchString, position);
}

/**
 * Determines whether two strings are equivalent in the current locale.
 * @param that String to compare to target string
 */
export function localeCompare(value: string, that: string): number {
  return value.localeCompare(that);
}

/**
 * Matches a string with a regular expression, and returns an array containing the results of that search.
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
export function match(
  value: string,
  regexp: string | RegExp,
): RegExpMatchArray | null {
  return value.match(regexp);
}

/**
 * Finds the first substring match in a regular expression search.
 * @param regexp The regular expression pattern and applicable flags.
 */
export function search(
  value: string,
  regexp: string | RegExp,
): number {
  return value.search(regexp);
}

/**
 * Returns a section of a string.
 * @param start The index to the beginning of the specified portion of stringObj.
 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
 * If this value is not specified, the substring continues to the end of stringObj.
 */
export function slice(value: string, start?: number, end?: number): string {
  return value.slice(start, end);
}

/**
 * Split a string into substrings using the specified separator and return them as an array.
 * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
 * @param limit A value used to limit the number of elements returned in the array.
 */
export function split(
  value: string,
  separator: string | RegExp,
  limit?: number,
): string[] {
  return value.split(separator, limit);
}

/**
 * Returns the substring at the specified location within a String object.
 * @param start The zero-based index number indicating the beginning of the substring.
 * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
 * If end is omitted, the characters from start through the end of the original string are returned.
 */
export function substring(value: string, start: number, end?: number): string {
  return value.substring(start, end);
}

/** Converts all the alphabetic characters in a string to lowercase. */
export function toLowerCase(value: string): string {
  return value.toLowerCase();
}

/** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
export function toLocaleLowerCase(
  value: string,
  locales?: string | string[],
): string {
  return value.toLocaleLowerCase(locales);
}

/** Converts all the alphabetic characters in a string to uppercase. */
export function toUpperCase(value: string): string {
  return value.toUpperCase();
}

/** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
export function toLocaleUpperCase(
  value: string,
  locales?: string | string[],
): string {
  return value.toLocaleUpperCase(locales);
}

/** Removes the leading and trailing white space and line terminator characters from a string. */
export function trim(value: string): string {
  return value.trim();
}

/** Returns the primitive value of the specified object. */
export function valueOf(value: string): string {
  return value.valueOf();
}

/**
 * Removes the leading white space and line terminator characters from a string. */
export function trimStart(value: string): string {
  return value.trimStart();
}

/**
 * Removes the trailing white space and line terminator characters from a string. */
export function trimEnd(value: string): string {
  return value.trimEnd();
}

/** Returns the length of a String object. */
export function length(value: string): number {
  return value.length;
}
