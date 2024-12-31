// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

const fun = (str) => {
  const ans = [];
  for (let index = 0; index < str.length; index++) {
    let element = str.charAt(index);
    ans.push(element);
    for (let j = index + 1; j < str.length; j++) {
      element += str.charAt(j);
      ans.push(element);
    }
  }
  console.log(ans);
};


fun("doga");

