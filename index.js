// Write your code in this file!
const curentUser = 'Grace Hopper';
//const welcomeMessage = 'Welcome to Flatbook, ';
//const welcomeMessage = curentUser;
//trying to include currentUser and welcomeMessage into a single string.
//const welcomeMessage = 'Welcome to Flatbook, currentUser' ;
//You can use the typeof operator to find the data type of a JavaScript variable.
typeof "const currentUser = 'Grace Hopper';"
//=> "string"
"const currentUser = 'Grace Hopper';".length;
//=> 35
//Concatenate Strings with the + Operator
"High " + "five!";
//=> "High five!"
"We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`;
//=> "We can concatenate as many strings as our heart desires."
const currentUser = 'Grace Hopper';
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
//const welcomeMessage = `Welcome to Flatbook, ${currentUser}`!;
console.log(welcomeMessage);//my output 'Welcome to Flatbook, Grace Hopper'
//const myString = 'template literal';

//const myNumber = 10;

//const myBoolean = false;
//=>`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!
//=> Beware that new lines inside of a template literal will be preserved as new lines in the resulting string!"
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
console.log(shortGreeting) //my output 'Welcome, G!' ​​​​​ ​


  

