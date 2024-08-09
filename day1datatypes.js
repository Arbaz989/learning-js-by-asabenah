


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

let ages = "foreen"
console.log(ages.toUpperCase())


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

 /*
 match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.
  Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
*/

let stringe = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// repeat(): it takes a number as argument and it returns the repeated version of the string.

let stringx = 'love'
console.log(stringx.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

//  checking datatypes


// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let ager = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object



/*
Changing Data Type (Casting)
Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
String to Int
We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

parseInt()
Number()
Plus sign(+)


*/






let numm = '10'

let nummInt = parseInt(numm)
console.log(nummInt)

let nc = '34'
let mm = Number(nc)
console.log(mm)

let n = '45'

let nFloat  = parseFloat(n)
console.log(n)

let ss = '10'
let sn=+ss
console.log(sn)

/*


String to Float
We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

parseFloat()
Number()
Plus sign(+)
*/

/*
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
let num = '9.81'
let numFloat = +num

console.log(numFloat) // 9.81

*/


// Float to Int
let nuum = 9.81
let numInt = parseInt(nuum)

console.log(numInt) // 9

  // ********************************LEVEL 1*****************************************************//

//1:  Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'. 
let challenge = '30 Days of JavaScript'
// 2:Print the string on the browser console using console.log()
console.log(challenge)
// 3:Print the length of the string on the browser console using console.log()
console.log(challenge.length)
// 4:Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toLocaleUpperCase())
// 5:Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,1))
// 6:Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let cut = '30 Days Of JavaScript'
console.log(cut.indexOf('D'))
console.log(cut.lastIndexOf('t'))

let count = cut.slice(0,2)
console.log(count)
// 7:Check if the string contains a word Script using includes() method

let stringse = 'script of java '
console.log(strings.includes('script'))
// 8:Split the string into an array using split() method

console.log(strings.split())


// 9:Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '))
//10: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))

// 11:Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

let change = challenge.replace('JavaScript','Python')
console.log(change)
//12: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))
// 13:What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))
// 14: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript



// *****************************************DAY 4************************************//

/* 15:Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.lastIndexOf('because'))

// 16: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challenges = ' 30 Days Of JavaScript '
console.log(challenges.trim())

// 17:Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let methods = '30 Days Of JavaScript'
console.log(methods.startsWith('30'))
// 18: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(methods.endsWith('JavaScript'))
// 19:Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(methods.match(/a/g))
// 20:Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let halfString = '30 Days of';
let otherHalf ='JavaScript'
let fullWord =halfString+=otherHalf
console.log(fullWord)
let othersHalf = halfString.concat('')
console.log(othersHalf)

// 21:Use repeat() method to print 30 Days Of JavaScript 2 times
let repetetion = 'abey ja na '
console.log(repetetion.repeat(2))



                          //  Exercise: Level 2


  //  1: Using console.log() print out the following statement:
   console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\'by John Holmes teaches us to help one another.") 

// 2:Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let stringsss = '10'
console.log(typeof(stringsss))
let newString = Number(stringsss)
console.log(typeof(newString))

// 3:Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatNyber = 9.8
let ff = parseFloat(floatNyber)
if (ff!==10) {
  ff = Math.ceil(ff)
} 

console.log(typeof(ff))


// 4:Check if 'on' is found in both python and jargon

let py = 'python'
let jar = 'jargonn'


if(py.match('on') && jar.match('on')){
  console.log('yes both contains on')
}else{
  console.log('one or other dosnot contain on')
}


// another way to do it using string method
let containsInBoth = py.includes('on') && jar.includes('on')

console.log(containsInBoth)


// 5:I hope this course is not full of jargon. Check if jargon is in the sentence.

let course = 'I hope this course is not full of jargon'
console.log(course.includes('jargon'))

// 6:Generate a random number between 0 and 100 inclusively.
let randomNumbers = Math.random()
let between = randomNumber*100
let bases = Math.ceil(between) // make it ceil or floor base on the need
console.log(bases)

// 7:Generate a random number between 50 and 100 inclusively.


let numFirst =Math.floor(Math.random()*51)+50
console.log(numFirst)


// 8:Generate a random number between 0 and 255 inclusively.
let randonNumber = Math.random()
let bRandom = randonNumber*255
let brr = Math.floor(bRandom)
console.log(brr)







// ****************************DAY 5*****************************************



// 9: Access the 'JavaScript' string characters using a random number.


// 'JavaScript'.charAt(Math.floor(Math.random()*'Javascript'.length-1)) 
let str = 'JavaScript'

// generates a random number within the range of the string length
let ran = Math.round(Math.random() * str.length) 
// Acess the string 
let newRan = str[ran];
console.log(`the random number is ${ran} and character is ${newRan}` )


// 10:Use console.log() and escape characters to print the following pattern.


console.log('1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125')




/* 11 Use substr to slice out the phrase because because because from the following sentence:
'You cannot end a sentence with because because because is a conjunction'
*/
// Define the sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';

// Find the start index of the phrase "because because because"
let startIndex = sentence.indexOf('because because because');

// Define the length of the phrase
let length = 'because because because'.length;

// Use substr to slice out the phrase
let slicedPhrase = sentence.substr(startIndex, length);

// Output the result
console.log(slicedPhrase); // Output: 'because because because'




let sentences = 'You cannot end a sentence with because because because is a conjunction';
        
sentence.substring(sentences.indexOf('because'), sentences.match(/because/gi).length)

  // level 3




// 1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love'

console.log(love.match(/love/gi).length)





// 2:Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
 let counter = 'You cannot end a sentence with because because because is a conjunction'
 console.log(counter.match(/because/gi).length)



// 3:Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentencess = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'




                     

   let sentenceFromLevel3 = sentencess.replace(/[^\w\s]/gi, '')
console.log(sentenceFromLevel3)

let wordCounter = sentenceFromLevel3.match(/\d+/g) 

console.log(wordCounter)




//Calculate the total annual income of the person by extracting the numbers from the following text.
//  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let = forrSalary =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary= forrSalary.match(/\d+/g) 















































































