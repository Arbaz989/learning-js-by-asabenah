// alert("hello world");
// to check the data types 
let numberr = 23;
console.log(typeof(numberr));
// day 1 challenge questions

/*Write a multiline comment which says,
 comments can make code readable, easy to reuse and informative
*/

/*
Now, let us see what exactly primitive and non-primitive data types mean.
Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.
*/


// let word = "javascript";
// word = [0]='y';
// console.log(word[0]);

// primitive datatype are cmomparable by its value


let number1 = 5
let number2 = 5

console.log(number1 == number2)

let arbaz = true
let anus = false

console.log(arbaz == anus)
let ak = true
let ar = true

console.log(ak == ar)

/*
console.log(nums)  // [10, 2, 3]
As you can see, an array, which is a non-primitive data type is mutable. Non-primitive data types cannot be compared by value.
Even if two non-primitive data types have the same properties and values, they are not strictly equal.
*/
let numberss =[10,3,4]
numberss[0] = 4
console.log(numberss)


let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false
/*
Rule of thumb, we do not compare non-primitive data types.
Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value.
Two objects are only strictly equal if they refer to the same underlying object.
*/

let numss = [3,34,4]
let num =numss

console.log(num == num);

let user1={
    name : "Arbaz",
    age :  21,
    profession : "programmer"
}
user1 = userTwo
console.log(user1==userTwo);


/*

const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const numsss = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(numsss)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
*/


//  random number generotoer


let randomNumber = Math.random();

let domNumbertoele = randomNumber * 11;

console.log(domNumbertoele );




let randomRoundToFloor = Math.floor(domNumbertoele);
console.log(randomNumber);

/*
ong Literal Strings
A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. 
We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Example:
*/

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)




// Escape Sequences in Strings


console.log("hleoo my name is \narbaz")
console.log("daay 1\t2\t3") //means 8 spaces
console.log("in every programiing language starts with\'hello worls'")


/*
Template Literals (Template Strings)
To create a template strings, we use two back-ticks.
 We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.
*/



let docler = 2
let df = 4


console.log(`the docker number is ${docler} and df id ${df}`)



// String methods
//  ***************************DAY 2***************************************************************************
//  it will give you the  lenght of the arrays 
let nm = "aff"
console.log(nm.length);

// it  will remove the spaces 
let arr = "  adf faf afa  "
console.log(arr.trim())
console.log(arr.trimEnd())

let age = "foreen"
console.log(age.toUpperCase())


// you can access gives you different strings at different length 


let above = "fuck off"
let firstCharacter = above [0]

console.log(firstCharacter)

// accessing the last character

let character = "afsss"
let lastCharacter = character.length-1
let lastLetter = character[4]
console.log(lastCharacter)
console.log(lastCharacter)





// it will cut the value from 0 to 4 including the last index
let strings = 'javascript'

// console.log(strings.substr(0,4))

// it will not give you the last index

let string = "fivkd"
console.log(string.substring(0,2))


// it will split the string in the form of an array it will also take argument
let af = "arbaz afefva ara ,ar"
// console.log(af.split( ))
// split in case of space
// console.log(af.split(''))
// separates based on comma 
 console.log(af.split(','))





// IT WILL GIVE YOU THE ANSWER IN BOOLEAN 

let future = "billionere"


console.log(future.includes('bill'))


let strr = '30 days of python'
console.log(strr.replace('python','javascript' ))





// IT WILL GIVE YOU THE VALUE OF THE GIVEN LOCATION

let also = 'arfv'

console.log(also.charAt(0))

// it will give you unicode 
console.log(also.charCodeAt(0))


// it will indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

let faf = 'fffg'
console.log(faf.indexOf('f'))



// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns
let different = 'fff ffs said'

console.log(different.lastIndexOf('said'))

// concat(): it takes many substrings and joins them.


let falsee= 'fafaf'
console.log(falsee.concat('30','fuck'))



//startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

/*
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false
*/


// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)




// ************************DAY 3****************************************************************



/*
search: it takes a substring as an argument and it returns the index of the first match. 
The search value can be a string or a regular expression pattern.
*/

let anum = 'punctual hai apne time par ati hai'

console.log(anum.search('hai'))
console.log(anum.search(/ati/gi))























