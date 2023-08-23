const first = "shermin";
const second = "sultana";
const third = "rima";
const result = "My name is" + " " + first + " " + second + " " + " " + third;
console.log(result);


const a = 10;
const b = 20;
const add = "the sum of " + a + " and " + b + " is " + (a+b);
console.log(add);

// dynamic string::

const addition = `THE SUM OF ${a} AND ${b} IS EQUAL TO ${a+b}   `
console.log(addition);


const numbers = [1, 2, 4, 5, 6];
const student = {
    name : "r",
    age : 10
}

const resullt = `The sum of ${numbers[2]} and ${student.age} is ${numbers[2]+student.age}`
console.log(resullt);


// new line::

const email = "the email is \n"
+ "shermin@gamil.com";
console.log(email);

// using backtick::

const address = `My home address is
Bangladesh, Tangail.`
console.log(address);