import lodash from "../esm/index.js";
describe("@esm-bundle/lodash", () => {
  describe("esm", () => {
    it("can load the ESM bundle", () => {
      return import("/base/esm/index.js");
    });

    it("findIndex works", () => {
      const test = [
        { name: "Anakin Skywalker" },
        { name: "Obi-wan Kenobi" },
        { name: "Yoda" },
      ];
      const foundIndex = lodash.findIndex(
        test,
        (person) => person.name === "Yoda"
      );
      expect(foundIndex).toEqual(2);
    });

    it("filter works", () => {
      const test = [
        { name: "Anakin Skywalker", rank: "Jedi Knight" },
        { name: "Obi-wan Kenobi", rank: "Jedi Master" },
        { name: "Yoda", rank: "Jedi Master" },
      ];
      const masters = lodash.filter(
        test,
        (jedi) => jedi.rank === "Jedi Master"
      );
      expect(masters.length).toEqual(2);
    });
  });

  describe("systemjs", () => {
    it("can load the System.register bundle", () => {
      return System.import("/base/system/index.js");
    });

    it("findIndex works", async () => {
      const test = [
        { name: "Anakin Skywalker" },
        { name: "Obi-wan Kenobi" },
        { name: "Yoda" },
      ];
      const lodash = await System.import("/base/system/index.js");
      const foundIndex = lodash.default.findIndex(
        test,
        (person) => person.name === "Yoda"
      );
      expect(foundIndex).toEqual(2);
    });

    it("filter works as a named export", async () => {
      const test = [
        { name: "Anakin Skywalker", rank: "Jedi Knight" },
        { name: "Obi-wan Kenobi", rank: "Jedi Master" },
        { name: "Yoda", rank: "Jedi Master" },
      ];
      const lodash = await System.import("/base/system/index.js");
      const masters = lodash.filter(
        test,
        (jedi) => jedi.rank === "Jedi Master"
      );
      expect(masters.length).toEqual(2);
    });
  });
});
