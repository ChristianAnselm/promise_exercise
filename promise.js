//- Write a function `testNum` that takes a number as an
//argument and returns a Promise that tests if the
//value is less than or greater than the value 10.

function testNum(num) {
  return new Promise((resolve, reject) => {
    resolve(num > 10);
  });
}

//- Write a function `whisperShout` that accepts a lowercase string.
//It should log
// that lowercased string to the console, wait three seconds,
//and then return the string in all capital letters.
function whisperShout(str) {
  console.log(str);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.toUpperCase);
    });
  });
}

//- Write a function `waitFact` that accepts an array of integers.
//For each integer, wait three seconds and console log that integer's
//factorial (e.g. the integer 4 would console log 4!, or 24).
//Your function should take a little while to run!

function waitFact(arr) {
  let ind = 0;

  let interval = setInterval(() => {
    if (ind < arr.length) {
      new Promise((resolve, reject) => {
        console.log(arr[ind]);
        ind++;
        resolve();
      });
    } else {
      clearInterval(interval);
    }
  }, 3000);
}

//- Write a function `barnyard` that accepts no arguments but
//defines an empty object. It should populate that object with five
//key-value pairs representing animals and the sounds they make
//(e.g. {pig: "oink"}). Then, (hint: `.then`) it should use
//`setInterval` console log each value of the object in order,
//creating a cacophony of animal noises in your console. When you
//get to the end of your array of values, you should return to the
//beginning.
