import {
  assertEquals,
  assertSpyCallArgs,
  assertSpyCalls,
  describe,
  it,
  spy,
  stub,
} from "./_dev_deps.ts";
import { trim } from "./trim.ts";

describe("trim", () => {
  it("should call String#trim", () => {
    const fn = spy(() => "");
    const string = new String();
    const Stub = stub(string, "trim", fn);

    trim(string as string);
    assertSpyCalls(fn, 1);
    assertSpyCallArgs(fn, 0, []);
    Stub.restore();
  });

  it("should return trimmed string", () => {
    assertEquals(trim("   abc   "), "abc");
  });
});
