import { reverseStringUsingFor, reverseStringUsingRecursion, reverseStringUsingTwoPointer } from "../../src/reversestring/reversestring";

describe("Reverse string", () => {
    it("should reverse using for", () => {
        expect(reverseStringUsingFor("madaM")).toBe("Madam");
        expect(reverseStringUsingFor("a")).toBe("a")
        expect(reverseStringUsingFor("face")).toBe("ecaf");    });

    it("should reverse using recursion", () => {
        expect(reverseStringUsingRecursion("madaM")).toBe("Madam");
        expect(reverseStringUsingRecursion("a")).toBe("a")
        expect(reverseStringUsingRecursion("face")).toBe("ecaf");    })
   
    it("should reverse using recursion", () => {
        expect(reverseStringUsingTwoPointer("madaM")).toBe("Madam");
        expect(reverseStringUsingTwoPointer("a")).toBe("a")
        expect(reverseStringUsingTwoPointer("face")).toBe("ecaf");
    })
});