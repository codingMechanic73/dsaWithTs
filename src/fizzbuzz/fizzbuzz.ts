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
export const generateFizzBuzzWithReduce = (n: number) => {
    return Array.from({length: n}).map((_, index) => {
        if (index % 15 == 0) {
            return "FizzBuzz";
        }
        if (index % 3 == 0) {
            return "Fizz";
        }
        if (index % 5 == 0) {
            return "Buzz";
        }
        return index.toString();
    });
}