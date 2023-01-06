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