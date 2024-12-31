// Write a JavaScript program to find intersection of two sets.

// Input:
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

checkSets = (set1, set2) => {
  let ans = [];
  set1.forEach((e) => {
    if (set2.has(e)) {
      ans.push(e);
    }
  });
  return ans;
};

console.log(checkSets(set1, set2));
