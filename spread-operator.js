// Math.max ::::  normally

const getMax = (2, 23, 12, 34);
const max = Math.max(getMax);
console.log(max); 

// for array:::: spread operator

const numbers = [10, 12, 21, 32, 33, 50, 2,4];
console.log(numbers);
// [10, 12, 21, 32, 33, 50,  2,  4]
  
console.log(...numbers);
// 10 12 21 32 33 50 2 4

const maximum = Math.max(numbers);
//console.log(maximum);
// NaN

const maximum1 = Math.max(...numbers);
console.log(maximum1);
// 50


// use spread operator for copy:::

const friends = [3, 5, 8];
const bondu = friends;
//bondu.push(100);
//console.log(bondu);
//console.log(friends); // dui line ai 100 push hoye jabe, ai prblm arate:::

const dosto = [...friends];
dosto.push(200);
console.log(dosto);
console.log(friends); // sudhu dosto te 200 push hobe


// extra add korar niyom::

const sonkha = [...friends, 1000];
console.log(sonkha);
console.log(friends);

// avabe samne , pichone je kono jaygay add kora jabe;;

const num = [128, 300, ...friends, 20, 1234];
console.log(num);








