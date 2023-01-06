import { generateFizzBuzz } from "../../src/fizzbuzz/fizzbuzz";

describe("Test fizzbuzz", () => {
    it("should generate fizzbuzz array", () => {
        expect(generateFizzBuzz(5)).toStrictEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });
})