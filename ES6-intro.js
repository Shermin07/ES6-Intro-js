// const array cant reassign, but can modify::
const money = 12;
//money = 17; // not allowed

const given = [1, 2, 3, 4, 5];
 given[2] = 7;
 console.log(given); // allowed

// const object cant reassign but also modify::::

const person = {
    name : "shermin",
    age : 30,
    address : "finland"
}

person["name"] = "rima";
console.log(person);


// let can reassign and modify;;