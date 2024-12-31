// Write a JavaScript program to group elements by their properties.

// Input:
const array = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

const ans = {};
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (ans[element.name]) {
    ans[element.name].push(element.id)
  } else {
    ans[element.name] = [element.id];
  }
}
console.log(ans);
