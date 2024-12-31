// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

const checkAnagram = (str1, str2) => {
  const map = new Map();
  for (let index = 0; index < str1.length; index++) {
    const element = str1.charAt(index);
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  //   console.log(map);
  for (let index = 0; index < str2.length; index++) {
    const element = str2.charAt(index);
    if (map.has(element) && map.get(element) > 0) {
      map.set(element, map.get(element) - 1);
    } else {
      return false;
    }
  }
  let a = true;
map.forEach((e, k) => {
    if (e != 0) {
      console.log(e);
      a =  false;
    }
  });

  return (true && a);
};

console.log(checkAnagram("eleven plus two", "twelve plus one"));
