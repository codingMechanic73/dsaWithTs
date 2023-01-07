export const reverseStringUsingFor = (input: string): string => {
    const outputArray = [];
    for (let i = 0; i < input.length; i++) {
        outputArray[i] = input.charAt(input.length-i-1);
    }    
    return outputArray.join("");
}

export const reverseStringUsingRecursion = (input: string): string => {
    if (input.length <= 1) {
        return input;
    }
    return input.charAt(input.length - 1) 
    + reverseStringUsingRecursion(input.substring(1, input.length-1)) 
    + input.charAt(0);
}

export const reverseStringUsingTwoPointer = (input: string) => {
    const inputArray = [...input];
    for (let left = 0, right = input.length-1; left < right; left++, right--) {
        let temp = inputArray[left];
        inputArray[left] = inputArray[right];
        inputArray[right] = temp;
    }
    return inputArray.join("");
}