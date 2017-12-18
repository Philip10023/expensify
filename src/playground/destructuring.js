// Object Destructuring

const person = {
  name: 'Phil',
  age: 21,
  location: {
    city: 'Manchester',
    temp: 30
  }
}

const {name = 'Anonymous', age} = person;
console.log(`${person.name} is ${person.age}}`)
// same thing as
// const name = person.name
// const age = person.age

const {name, age} = person;
console.log(`${name} is ${age}.`)

const {city, temp} = person.location;
if (city && temp) {
  console.log(`It's ${temp} in ${city}.`)
}

//
// Array Destructuring

// Wrong
const address = ['1299 S Juniper Street', 'Philapdelphia', 'Pennsylvania', '19147']
console.log(`You are in ${address[1]} ${address[2]}`)

// Right
// if values are unneeded dont use
// but keep comma
// can set default
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`)
