// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:

  
// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]


const arr = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];
const map = new Map();
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (map.has(element.employeeName)) {
    map.set(element.employeeName, map.get(element.employeeName) + 1);
  } else {
    map.set(element.employeeName, 1);
  }
}

const solution = [];
map.forEach(function (val, key) {
    solution.push({
      employeeName: key,
      occurrences:val,
    });
});