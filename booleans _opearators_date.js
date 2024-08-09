// *************************Day 5 Continues *************************** / /




/*
iMPORTANT TO NOTE
 Truthy values
1:All numbers(positive and negative) are truthy except zero
2:All strings are truthy except an empty string ('')
3:The boolean true
    Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string


*/




/*
            Undefined
If we declare a variable and if we do not assign a value, the value will be undefined. 
In addition to this, if a function is not returning the value, it will be undefined.
*/

let emptyVariable 
console.log(emptyVariable) // undefined 
//          NUll

let emptyValue = null
console.log(emptyValue) //Null means no value 




//  ARITMETic operator


let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64






const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)





// comparison opearotors 
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false



/*

Logical Operators
The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. 
The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.
*/




// && ampersand operator example

const checkt = 4 > 3 && 10 > 5         // true && true -> true
const checkf = 4 > 3 && 10 < 5         // true && false -> false
const checkff = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const checktt = 4 > 3 || 10 > 5         // true  || true -> true
const checksss = 4 > 3 || 10 < 5         // true  || false -> true
const checkrt = 4 < 3 || 10 < 5         // false || false -> false

// Negation examples (!)

let checkss= 4 > 3                     // true
let checks = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true






// post and pre increment

/*
To use pre and post increment operators in JavaScript, you can follow these guidelines:

Pre-increment: The pre-increment operator (++) increases the value of a variable by 1 before using its value. Here's an example:


*/


let pre = 34

console.log(++pre) // 35
console.log(pre)


// it will upgerade its value after using the variable 
let post = 34
console.log(post++) // 34
console.log(post) //35


// pre decremetn 

let predec = 0
console.log(--predec) //-1
console.log(pre) //-1

// post decrement 
let postdec = 0
console.log(postdec--) // 0
console.log(postdec) //-1

//  ternary operator 

let israining = true
israining
? console.log('Yes you need a rain cosst')
: console.log( 'No need for a rain cost')
let issraining = false 
issraining
?console.log('Yes you need a rain cosst')
:console.log('No need for a rain cost')


let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)



//   WINDOWS METHOS
/*
The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. 
The prompt() method takes two arguments. The second argument is optional.
*/
// prompt('required text', 'optional text')
// let inp = prompt('number goes here' ,'and here')
// console.log(inp)



//  WINDOW CONFIRM METHOS
// const agree = confirm('Are you sure you like to delete? ')
//console.log(agree) // result will be true or false based on what you click on the dialog box


//  Date object 

let now = new Date()
console.log(now)

console.log(now.getFullYear())  //2024
console.log(now.getMonth())  // it starts from 0 11 thats why its 7 
console.log(now.getDate())
//  getting day 
console.log(now.getDay()) // because its friday 


console.log(now.getHours()) // because its 20 

console.log(now.getMinutes())
console.log(now.getSeconds())



/*

This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

Using getTime()
*/

console.log(now.getTime())






let allSeconds = Date.now() // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(allSeconds)

let timeInSecond =new Date().getTime()
console.log(allSeconds==timeInSecond)




//  human readeable code 
const nows = new Date()
const year = nows.getFullYear()
const month = nows.getMonth()+1
const date = nows.getDate()
const hour = nows.getHours()
const minutes = nows.getMinutes()



console.log(`${date}/${month}/${year}/${hour}/${minutes}`)

// *********Exercises: Level 1***********//

// 1:Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.


let firstNames = 'arbaz'
let lastNames = 'awan'
let countrys = 'pakistan'
let citys = 'karachi'
let agess = 21
let isMarriedd = false
let years =new Date().getFullYear()

// To print multiple values, separate them with commas   
console.log(` ${typeof(firstNames)},  ${typeof(lastNames)}, ${typeof(countrys)}, ${typeof(citys)}, ${typeof(agess)}, ${typeof(isMarriedd)}, ${typeof(years)}`);   




// 2:Check if type of '10' is equal to 10

let va = 10 
console.log(typeof(10)=='10') // FALSE 

// 3:Check if parseInt('9.8') is equal to 10


console.log(parseInt('9.8')==10)
/*

4:Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value
*/



// truthy values 
console.log(10 === 10)
console.log('str' === 'str')
console.log(true === true)

// falsy values

console.log(0 == true)
console.log(NaN == true)
console.log(false == true)






/*
5:Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3       true
4 >= 3      true
4 < 3       false
4 <= 3      false
4 == 4      true
4 === 4     true
4 != 4      false
4 !== 4     false
4 != '4'     false
4 == '4'      true
4 === '4'     false
Find the length of python and jargon and make a falsy comparison statement.
*/


console.log('hello worls')

console.log(4 > 3)
  console.log(4 >= 3)
  console.log(4 < 3)
  console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')



console.log('jargon'.length ,'python'.length )
console.log('jargon'==='python')



/*
6:Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12   t
4 > 3 && 10 > 12  f
4 > 3 || 10 < 12    t
4 > 3 || 10 > 12    t
!(4 > 3)            f
!(4 < 3)              t

!(false)                t
!(4 > 3 && 10 < 12)     f
!(4 > 3 && 10 > 12)      t
!(4 === '4')      t
There is no 'on' in both dragon and python


*/



let dr = 'dragon'
let br = 'python'


console.log(!dr.search('on') , !br.search('on') )  // FALSE


/*
7:Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.

*/


let nowww = new Date()
// to check year
console.log(nowww.getFullYear())
// TO CHECK MONTH AS A NUMBER
console.log(nowww.getMonth()+1)
// to check date today 
console.log(nowww.getDate())
// to check hours now
console.log(nowww.getHours())
// to check minutes now
console.log(nowww.getMinutes())

console.log(nowww.getTime())



































