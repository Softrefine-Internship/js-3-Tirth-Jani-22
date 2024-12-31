// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

const frequency = (str) => {
  const map = new Map();
  for (let index = 0; index < str.length; index++) {
    const element = str.charAt(index);
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  const ans = {};
  map.forEach((v, k) => {
      ans[k] = v
    });
    console.log(ans);
  return ans
};

frequency("hello");
