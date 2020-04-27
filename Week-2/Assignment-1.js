function max(numbers) {
    for (i = 0; i <= numbers.length; i++) {
        var base = numbers[0];
        if (numbers[i] > base) {
            var base = numbers[i];
        };
        return base;
    }
}
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

function findPosition(numbers, target) {
    for (i = 0; i <= numbers.length; i++) {
        if (target == numbers[i]) {
            return i;
        }
        //if (target )
    }
}
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0 
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position) 
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1






