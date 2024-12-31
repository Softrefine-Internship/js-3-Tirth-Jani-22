// Write a JavaScript program to get the longest string in an array.

// Input:
arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];

// Output: "JavaScript"

const longest = (arr) => {
  max = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element.length > max) {
      max = element.length;
      big = element;
    }
  }
  return big
};

console.log(longest(arr));
