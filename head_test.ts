import {
  assertEquals,
  assertType,
  describe,
  IsExact,
  it,
} from "./_dev_deps.ts";
import { head } from "./head.ts";

describe("head", () => {
  it("should return empty string if the input is empty string", () => {
    assertEquals(head(""), "");
  });

  it("should return head element of string if the input is string", () => {
    const table: [string, string][] = [
      [" ", " "],
      ["a", "a"],
      ["abc", "a"],
      ["abcdefghijklmn", "a"],
    ];

    table.forEach(([input, expected]) => {
      assertEquals(head(input), expected);
    });
  });

  it("should return head element of iterable if the input is iterable", () => {
    const table: [Iterable<unknown>, unknown][] = [
      [[], undefined],
      [[""], ""],
      [["a"], "a"],
      [["a", "b", "c"], "a"],
      [new Set(), undefined],
      [new Set([1]), 1],
      [new Map(), undefined],
      [new Map([[1, 2]]), [1, 2]],
    ];

    table.forEach(([input, expected]) => {
      assertEquals(head(input), expected);
    });
  });

  it("should infer head string if the value is literal string", () => {
    const result = head("abc");
    assertType<IsExact<typeof result, "a">>(true);
  });

  it("should infer string if the value is string", () => {
    const result = head("");
    assertType<IsExact<typeof result, string>>(true);

    const result1 = head("abc" as string);
    assertType<IsExact<typeof result1, string>>(true);
  });

  it("should infer undefined if the input is empty array", () => {
    const result = head([]);
    assertType<IsExact<typeof result, undefined>>(true);
  });

  it("should infer head element of list if the input is tuple", () => {
    const result = head([""]);
    assertType<IsExact<typeof result, string>>(true);
  });

  it("should infer head element or undefined it the input is array", () => {
    const result = head([""] as string[]);
    assertType<IsExact<typeof result, string | undefined>>(true);
  });

  it("should infer head element or undefined it the input is iterable", () => {
    const result = head(new Set<string>());
    assertType<IsExact<typeof result, string | undefined>>(true);
  });
});
