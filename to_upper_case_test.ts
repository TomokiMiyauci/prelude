import {
  assertEquals,
  assertSpyCallArgs,
  assertSpyCalls,
  describe,
  it,
  spy,
  stub,
} from "./_dev_deps.ts";
import { toUpperCase } from "./to_upper_case.ts";

describe("toUpperCase", () => {
  it("should call String#toUpperCase", () => {
    const fn = spy(() => "");
    const string = new String();
    const Stub = stub(string, "toUpperCase", fn);

    toUpperCase(string as string);
    assertSpyCalls(fn, 1);
    assertSpyCallArgs(fn, 0, []);
    Stub.restore();
  });

  it("should return upper cased string", () => {
    assertEquals(toUpperCase("abc"), "ABC");
  });
});
