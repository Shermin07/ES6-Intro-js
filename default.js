function add (num1, num2){
    return (num1 + num2);
}

//const result = add(5,7); =>   12
//const result = add(5); => NaN coz num2 undefined so addditon hobe na
//const result = add();  => NaN
//console.log(result);

// default value set kore deya jabe jodi parameter er value na dite chai::

function multiply(n1, n2= 2){
    return (n1 * n2);
}
const result2 = multiply(5);
//console.log(result2);


// default value string::

function fullName(first, second = "ma "){

    const full = first  + second;
    return full;
}
 const name = fullName("ri");
 console.log(name);

 // default value array::

 function friends(numbers = [20]){
    const division = numbers/2;
    return division;
 }
const output = friends();
console.log(output);
 // default value object::

 function friends(humans = {}){
   
 }
const output1 = friends();
console.log(output1);


