describe("@esm-bundle/lodash", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
});
