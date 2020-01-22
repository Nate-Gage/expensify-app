//ARRAY DESTRUCTURING
const address = ['1234 N Street St.', 'Denver', 'Colorado', '80126'];

//variable names in the destructured array are 1:1 with the index in the original array
//empty spaces can be left in the destructured array to skip indices.
//Like objects, destructured arrays can have default values
const [, , state = 'Nevada' ] = address;
console.log(`You are in ${state}.`)

const item = ['coffee (hot)', '$2.50', '$2.75', '$3.00'];

const [ product, , midPrice ] = item;

console.log(`A medium ${product} costs ${midPrice}`);

//OBJECT DESTRUCTURING
// const person = {
//     name: 'Nate',
//     age: 30,
//     location: {
//         city: 'littleton',
//         temp: 55
//     }
// };

// // const name = person.name;
// // const city = person.location.city;

// //below is the destructured syntax for the above properties
// //the left hand is the variable type, and the right is the object the props come from.
// //you can rename a variable in the destructured object (eg. temp > temperature)
// //the destructured name prop is set to default 'Anonymous' if the name prop was not in the object
// const { name = 'Anonymous' } = person; 
// const { temp: temperature, city } = person.location;

// console.log(`${name} is 29. He is from ${city}`);
// console.log(`It is ${temperature} degrees in ${city}.`);
