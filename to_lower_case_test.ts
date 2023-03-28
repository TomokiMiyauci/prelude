import {
  assertEquals,
  assertSpyCallArgs,
  assertSpyCalls,
  describe,
  it,
  spy,
  stub,
} from "./_dev_deps.ts";
import { toLowerCase } from "./to_lower_case.ts";

describe("toLowerCase", () => {
  it("should call String#toLowerCase", () => {
    const fn = spy(() => "");
    const string = new String();
    const Stub = stub(string, "toLowerCase", fn);

    toLowerCase(string as string);
    assertSpyCalls(fn, 1);
    assertSpyCallArgs(fn, 0, []);
    Stub.restore();
  });

  it("should return lower cased string", () => {
    assertEquals(toLowerCase("ABC"), "abc");
  });
});
