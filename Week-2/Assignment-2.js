// 2 Ways of Creating an Object
// the first way
var argAll = [
    { op: "+", n1: 33, n2: 42 },
    { op: "-", n1: 50, n2: 20 }
]
arg1 = argAll[0];
arg2 = argAll[1];


// the second way
class Args {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}
const arg1 = new Args('+', 33, 42);
const arg2 = new Args('-', 50, 20);


function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    }
    else {
        result = "Not supported";
    } return result;
}
console.log(calculate(arg1));

