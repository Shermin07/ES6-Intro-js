// object:: function
const getAge = (person) => person.age;
const student = {
    name : "rima",
    age : 29
}
const result = getAge(student);
console.log(result);

// array:: function

const getThird = (numbers) => numbers[2];
const array = [20, 10, 12, 15];
const output = getThird(array);
console.log(output);

// no parameter::: function

const getPI = () => Math.PI;
console.log(getPI());

