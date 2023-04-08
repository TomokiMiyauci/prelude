import { last, type LastString } from "./last.ts";
import {
  assertEquals,
  assertType,
  describe,
  IsExact,
  it,
} from "./_dev_deps.ts";

describe("last", () => {
  it("should return empty string if the input is empty string", () => {
    assertEquals(last(""), "");
  });

  it("should return last element of string if the input is string", () => {
    const table: [string, string][] = [
      [" ", " "],
      ["a", "a"],
      ["abc", "c"],
      ["abcdefghijklmn", "n"],
    ];

    table.forEach(([input, expected]) => {
      assertEquals(last(input), expected);
    });
  });

  it("should return last element of iterable if the input is iterable", () => {
    const table: [Iterable<unknown>, unknown][] = [
      [[], undefined],
      [[""], ""],
      [["a"], "a"],
      [["a", "b", "c"], "c"],
      [new Set(), undefined],
      [new Set([1]), 1],
      [new Map(), undefined],
      [new Map([[1, 2]]), [1, 2]],
    ];

    table.forEach(([input, expected]) => {
      assertEquals(last(input), expected);
    });
  });

  it("should infer last string if the value is literal string", () => {
    const result = last("abc");
    assertType<IsExact<typeof result, "c">>(true);
  });

  it("should infer string if the value is empty string", () => {
    const result = last("");
    assertType<IsExact<typeof result, string>>(true);
  });

  it("should infer string if the value is string", () => {
    const result = last("" as string);
    assertType<IsExact<typeof result, string>>(true);
  });

  it("should infer undefined if the value is empty array", () => {
    const result = last([]);
    assertType<IsExact<typeof result, undefined>>(true);
  });

  it("should infer last element of array if the value is tuple", () => {
    const result = last([1]);
    assertType<IsExact<typeof result, 1>>(true);

    const result1 = last([1, "", false]);
    assertType<IsExact<typeof result1, false>>(true);
  });

  it("should infer last element of array or undefined if the value is array", () => {
    const result = last([] as string[]);
    assertType<IsExact<typeof result, string | undefined>>(true);
  });

  it("should infer element or undefined if the value is iterable", () => {
    const result = last(new Set<string>());
    assertType<IsExact<typeof result, string | undefined>>(true);
  });
});

describe("LastString", () => {
  it("should infer string if the input is empty string", () => {
    assertType<IsExact<LastString<"">, string>>(true);
  });

  it("should infer last element if the input is template literal", () => {
    assertType<IsExact<LastString<"abc">, "c">>(true);
  });

  it("should infer string if the input is string", () => {
    assertType<IsExact<LastString<string>, string>>(true);
  });
});
