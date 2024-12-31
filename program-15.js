// Write a JavaScript program to check subset.

// Example 1:
// Input:
let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

checkSets = (set1, set2) => {
  let a = true;
  set1.forEach((e) => {
    if (!set2.has(e)) {
      a = false;
      return false;
    }
  });
  return a;
};

console.log(checkSets(set1,set2));
