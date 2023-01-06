/**
 * Generate FizzBuzz using Simple for loop
 * TimeComplexity: O(n)
 * SpaceComplexity: O(n)
 * @param n array length
 * @returns FizzBuzz array
 */
export const generateFizzBuzz = (n: number) => {
    const array = [];
    for (let i = 1; i <= n; i++) {
        let result = i.toString();
        if (i % 15 == 0) {
            result = "FizzBuzz";
        } else if (i % 3 == 0) {
            result = "Fizz";
        } else if (i % 5 == 0) {
            result = "Buzz";
        }
        array.push(result);
    }
    return array;
}


/**
 * Generate FizzBuzz using Simple for loop
 * TimeComplexity: O(n)
 * SpaceComplexity: O(n)
 * @param n array length
 * @returns FizzBuzz array
 */
export const generateFizzBuzzWithMap = (n: number) => {
    return Array.from({length: n}).map((_, index) => {
        const value = index + 1;
        if (value % 15 == 0) {
            return "FizzBuzz";
        }
        if (value % 3 == 0) {
            return "Fizz";
        }
        if (value % 5 == 0) {
            return "Buzz";
        }
        return value.toString();
    });
}