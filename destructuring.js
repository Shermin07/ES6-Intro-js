// object destructuring::: normal

const myObject = {
    name : "rima",
    age : 29
}
// way-one
// console.log(myObject.age);
// console.log(myObject.age);

// another waay to write:: way-two
const info = myObject.age;
console.log(info);
console.log(info);
console.log(info);

// another waay to write:: way-three:: short way::

const {name, age} = myObject;
console.log(name);
console.log(name,age);

// change object name::

const { name:nam, age : boyosh} = myObject;
console.log(nam, boyosh);

// anpther way::


// array destructuring::::
const numbers = [10, 12];
const [ first, second] = numbers;

console.log(first, second);

// sorasori kora jay::

const [num1, num2] = [11, 22];
console.log(num1);
console.log(num2);




// function destructurng::::

function doubleThem(a, b){
    return [a*2, b*2];
}
const [three, four] = doubleThem(3,4);
console.log(three, four);



 