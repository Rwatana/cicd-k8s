const fizzbuzz =  require("../src/index");

describe("fizzbuzz", () => {
    it("returns FIzzBuzz when value is divisible by 15", () => {
        expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
    });

    it("returns FIzzBuzz when value is divisible by 3", () => {
        expect(fizzbuzz(9)).toStrictEqual("Fizz");
    });

    it("returns FIzzBuzz when value is divisible by 5", () => {
        expect(fizzbuzz(10)).toStrictEqual("Buzz");
    });

    it("returns FIzzBuzz when value is divisible by 3 or 5", () => {
        expect(fizzbuzz(7)).toStrictEqual("7");
    });
});