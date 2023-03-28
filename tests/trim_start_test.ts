import {
  assertEquals,
  assertSpyCallArgs,
  assertSpyCalls,
  describe,
  it,
  spy,
  stub,
} from "../_dev_deps.ts";
import { trimStart } from "../trim_start.ts";

describe("trimStart", () => {
  it("should call String#trimStart", () => {
    const fn = spy(() => "");
    const string = new String();
    const Stub = stub(string, "trimStart", fn);

    trimStart(string as string);
    assertSpyCalls(fn, 1);
    assertSpyCallArgs(fn, 0, []);
    Stub.restore();
  });

  it("should return trimmed string", () => {
    assertEquals(trimStart("   abc   "), "abc   ");
  });
});
