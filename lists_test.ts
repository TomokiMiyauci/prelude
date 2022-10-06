import { head } from "./lists.ts";
import { assertEquals, Fn } from "./dev_deps.ts";

Deno.test("head should pass", () => {
  const table: Fn<typeof head>[] = [
    [[], undefined],
    ["", undefined],
    [new Set(), undefined],
    [new Map(), undefined],
    ["a", "a"],
    ["abc", "a"],
    [["a", 1, null], "a"],
    [new Set([1]), 1],
    [new Set([1, "2", undefined]), 1],
    [new Map([[0, 1]]), [0, 1]],
    [new Map([[0, 1], [1, 2]]), [0, 1]],
  ];

  table.forEach(([value, expected]) => {
    assertEquals(head(value), expected);
  });
});
