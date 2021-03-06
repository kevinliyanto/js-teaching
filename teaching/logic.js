// Number comparison
// Bigger than (>)
const a = 5 > 4;
// a = true

// Less than (<)
const b = 5 < 4;
// b = false

// Equal to (==) without type check
// Do not use this
const c = 5 == "4";

// Equal to with type check (===)
const d = 5 === 4;

// Not equal with type check (!==)
const e = 5 !== 4;

// Bigger than or equal to (>=)
const f = 5 >= 4;

// Less than or equal to (<=)
const g = 5 <= 4;

// Logical
// And operator
const h = true && false;

// Or operator
const i = true || false;

// Not operator
const j = !true;

// Grouping `()` has the highest priority, same as math grouping
const k = !(!true && false) || (false && !true);

if (k) {
  console.log("k is true");
} else {
  console.log("k is false");
}

// n evaluates a first. Produce `a` if `a` is false
// This is called "operator precedence"
// Read further: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const m = a && b;

// `n` evaluates a first. Produce `a` if `a` is true
const n = a || b;

// Ternary operator
// const v = (something that is either true or false)
//            ? (value that gets assigned to 'v' if true)
//            : (value that gets assigned to 'v' if false)
const j = a ? "a is true" : "a is false";
console.log(j);

// Ternary operator that executes console.log
k ? console.log("k is true") : console.log("k is false");
