
const { calcWeightedGrade } = require("./calcWeightedGrade.js");
const { percentile } = require("./percentile.js");

describe("calcWeightedGrade", () => {
  test("calcula promedio ponderado correcto", () => {
    expect(
      calcWeightedGrade([
        { score: 80, weight: 0.4 },
        { score: 90, weight: 0.6 }
      ])
    ).toBe(86.00);
  });

  test("lanza error si weight no suma 1", () => {
    expect(() =>
      calcWeightedGrade([{ score: 80, weight: 0.5 }])
    ).toThrow(RangeError);
  });
});

describe("percentile", () => {
  test("p = 0 devuelve mínimo", () => {
    expect(percentile(0, [1, 2, 3])).toBe(1.00);
  });

  test("p = 100 devuelve máximo", () => {
    expect(percentile(100, [1, 2, 3])).toBe(3.00);
  });

  test("percentil 50 de [1,2,3,4] = 2", () => {
    expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
  });
});