// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

const str = "This is a demo String find the largest word from it";
arr = str.split(" ");
max = 0;
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (element.length > max) {
    max = element.length;
    big = element;
  }
}
console.log(big);
