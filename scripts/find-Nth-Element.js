function findNthElement(arr, N) { 
    return arr[N - 1];
    // findNthElement helps me find a specific element in a list of numbers, N is position and N-1 would be element //
}

// Example usage:
var array = [10, 20, 30, 40, 50]; 
var N = 3; 
// 30 is the 3rd element but it is position 2 because we start counting from 0 in programming //

var nthElement = findNthElement(array, N);
// nthElement is where we store the result of the function //

console.log('Nth Element:', nthElement);
// shows that the third element of the array used above is 30. This is also in position 2. //