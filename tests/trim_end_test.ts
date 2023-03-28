import {
  assertEquals,
  assertSpyCallArgs,
  assertSpyCalls,
  describe,
  it,
  spy,
  stub,
} from "../_dev_deps.ts";
import { trimEnd } from "../trim_end.ts";

describe("trimEnd", () => {
  it("should call String#trimEnd", () => {
    const fn = spy(() => "");
    const string = new String();
    const Stub = stub(string, "trimEnd", fn);

    trimEnd(string as string);
    assertSpyCalls(fn, 1);
    assertSpyCallArgs(fn, 0, []);
    Stub.restore();
  });

  it("should return trimmed string", () => {
    assertEquals(trimEnd("   abc   "), "   abc");
  });
});
