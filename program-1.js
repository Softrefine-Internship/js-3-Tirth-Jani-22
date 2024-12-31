// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

const obj2 = { name: "John", age: 23, degree: "CS" };
const obj1 = { age: 23, degree: "CS"};
const comparing = function (obj1, obj2) {
  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) {
    //   consol e.log(false);
      return false;
    }
  }
  return true;
};

console.log(comparing(obj1, obj2)); // false
