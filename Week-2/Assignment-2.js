/*function subtract(args) {
    return args.n1 - args.n2;
}
var args.n1 = 33;
var args.n2 = 45;
console.log(subtract());
*/
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

console.log()
