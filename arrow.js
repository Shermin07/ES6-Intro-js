// function declaration::

function add(a, b){
    return (a + b);
}
const result = add(2, 3);
console.log(result);

// function expression::

function multiply(a, b){
    return (a * b);
}

//  arrow function:::

const arrow = (a, b) => (a+b);
const output = arrow(10, 10);
console.log(output);


const name = (first, second) => `${first} ${second}`
const fullName = name("shermin", "sultana");
console.log(fullName);