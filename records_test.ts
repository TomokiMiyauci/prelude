import { prop } from "./records.ts";
import { assertEquals, assertInstanceOf } from "./dev_deps.ts";

Deno.test("prop should pass", () => {
  assertEquals(prop("")({ "": 1 }), 1);
  assertInstanceOf(prop(""), Function);
});
