/*
console.log('hello ES6');

// difference between var and let

// var is hoisted - let is not

// console.log(num)
// var num = 23

// var can be redeclared - let cannot
// var user = 'foo';
// var user = 'bar';
// console.log(user)

// scoping
var message = 'hello from the global scope';

// var is function scoped
function helloFromLocalScope() {
	var greeting = 'hello from local'
	return greeting
}
console.log(helloFromLocalScope())

// var is not scoped to this block
if (true) {
	var city = 'Berlin'
}
console.log(city)

function l() {
	let msg = 'hello'
}

if (true) {
	let msgIf = 'hello from if'
}

// let is block scoped
// console.log(msgIf)

// ternary operator

const password = '12fjdkl'
let user;
// if (password === '123') {
// 	user = 'authenticated'
// } else {
// 	user = 'unauthenticated'
// }
console.log(user)
// using ternary <condition> ? <doThisiftrue> : <doThisifFalse>
user = password === '123' ? 'authenticated' : 'unauthenticated'
console.log(user)

// object shorthand
// name of the variable is used as the key and it's value is 
// used for the value
console.log({ user })
console.clear()

// Destructuring
// Objects
const person = {
	userName: 'Foo',
	email: 'foo@gmail.com',
	age: 35,
	address: {
		street: 'Friedrichstr',
		place: 'Berlin'
	}
}

// we want 3 variables
// const uName = person.userName
// const email = person.email
// const age = person.age
// object destructuring
// const { email, userName, age } = person
// you can alias variables using the colon
// const { email, userName: uName, age } = person
// console.log(uName, email, age)

// destructure address - move one level down using the :
const { address: { street, place } } = person
console.log(street, place)

const root = {
	first: 'foo',
	middle: 'bar',
	last: 'baz'
}

// you can destructure directly in the parameter list
function display({ first, middle, last }) {
	// use destructuring to return a string with all the names
	// const { first, middle, last } = user
	return `${first} ${middle} ${last}`
}

const names = display(root) // -> 'foo bar baz'
console.log(names)
console.clear()

// Array destructuring

const numbers = [1, 2, 3, 5];

// you can skip elements
const [, x] = numbers
console.log(x)
// if you destructure from a non existing index you get 'undefined'
// const [, , , y] = numbers
// console.log(y)

// we can set a default value 
const [, , , y = 4] = numbers
console.log(y)
console.log(numbers)
console.clear();

const [a, b = 2, c, d = 1] = [3, 4]
console.log(a, b, c, d) // -> (3, 4, undefined, 1) 

// you could also destructure from a string
const [one, two, three] = 'hello'
console.log(one, two, three)

// spread operator

const nums = [23, 45, 7]
// Math.max does not accept arrays -> we have to spread out the content 
// of 'nums'
const maxNum = Math.max(...nums)
console.log(maxNum)

const copy = [...nums]
console.log(copy)
const newNum = 42
// create an array with all the content of nums and newNum
const newArray = [newNum, ...nums]
console.log(newArray)

console.clear()

// using ... as 'rest parameter'
function sum(...numbers) {
	// numbers - is now an array containing all the arguments of sum()
	return numbers.reduce(function (sum, val) {
		return sum + val
	})
}
const res = sum(3, 5, 8, 34, 67)
console.log(res)

*/

// Objects

const car = {
	make: 'Volvo',
	year: 1995,
	engine: {
		fuel: 'petrol',
		hp: 80
	}
}


// extract the make and year from the car in one line
const { make, year } = car
console.log(make, year)

// extract the fuel and hp from the car in one line

const { engine: { fuel, hp } } = car
console.log(fuel, hp);


// Arrays

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Extract the first two values
const [zero, one] = numbers
console.log(zero, one); // 0 1

// Extract all the values but the first one from the array
const [, ...greaterThan0] = numbers
console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// Strings

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed
const reversedUppercase = [...str.toUpperCase()].reverse()
console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]

// Arrow functions



const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const evens = nums.filter(num => num % 2 === 0)

// const greet = function {
// 	return 'hello'
// }

const greet = () => 'hello'

console.log(greet())

// Promises - a JS Object that represents the eventual completion
// or failure of an async operation

// a promise can have 3 states - 1. resolved - executed correctly 
// 2. rejected - we have a failure 3. pending - not clear yet

function createRandomNumber(min, max) {
	return new Promise(function (resolve, reject) {
		// if the arguments passed are not exactly 2
		if (min !== 2) {
			reject(new Error('invalid number of args'))
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 3000)
	})
}
// range for the random number
// console.log(createRandomNumber(2, 4, 5))

// using .then() - .catch()
createRandomNumber(2, 7)
	.then(function (result) {
		console.log(result)
	})
	.catch(function (error) {
		console.log(error)
	})
	// .finally(function () {
	// 	// that would be executed no matter if the promise is resolved 
	// 	// or rejected
	// 	console.log('finally')
	// })


	// async await
	// IIFE - Immediately invoked function expression
	(async function getNumber() {
		// try catch
		try {
			// in case we have an error here we can catch it
			const randomNumber = await createRandomNumber(3, 10)
			console.log(randomNumber)
		} catch (err) {
			console.log(err.message)
		} finally {
			console.log('this executes always')
		}
	})()
// getNumber()

