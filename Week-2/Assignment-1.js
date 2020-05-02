// find max
function max(numbers) {
    var base = numbers[0];
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] > base) {
            base = numbers[i];
        }
    }
    return base;
};


console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

// findPosition
function findPosition(numbers, target) {
    for (i = 0; i < numbers.length; i++) {
        if (target == numbers[i]) {
            return i;
        } else if (target !== numbers[i] && i == numbers.length) {
            return -1;
        }
    }
}
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position) 
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1






