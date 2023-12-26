// Using built-in methods
const reverseString = (str: string): string => str.split("").reverse().join("");


// Not using built-in methods
const reverseOlString = (str: string): string => {
  let revString = [];

  for (let i = str.length - 1; i >= 0; i--) {
    revString.push(str[i]);
  }

  return revString.join("");
}
console.log(reverseString("hello"));
console.log(reverseString("hello world!"));
console.log(reverseOlString("hello"));
console.log(reverseOlString("hello world!"));

export {}