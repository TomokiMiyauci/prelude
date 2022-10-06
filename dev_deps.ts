export * from "https://deno.land/std@0.158.0/testing/bdd.ts";
export * from "https://deno.land/std@0.158.0/testing/asserts.ts";

// deno-lint-ignore no-explicit-any
export type Fn<F extends (...args: any) => any> = [
  ...Parameters<F>,
  ReturnType<F>,
];
