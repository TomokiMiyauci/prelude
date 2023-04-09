// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "https://deno.land/x/isx@1.1.1/is_string.ts";

/** Whether the input is index accessable or not. */
export function isIndexable<T>(input: unknown): input is string | T[] {
  return isString(input) || Array.isArray(input);
}
