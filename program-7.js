//  Write a JavaScript program to filter an array of objects based on a given property value

// Input:

// property = "department";
// value = "IT";

// Output:
// [
//     { id: 2, name: 'Alice', department: 'IT' },
//     { id: 4, name: 'Hank', department: 'IT' }
// ]

const sortify = (arr,propertyName, propertyData) => {
  const sol = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element[propertyName] && element[propertyName] === propertyData) {
      sol.push(element);
    }
  }
  console.log(sol);
  return sol
};

const arr = [
  {
    id: 1,
    name: "John",
    department: "HR",
  },
  {
    id: 2,
    name: "Alice",
    department: "IT",
  },
  {
    id: 3,
    name: "Bob",
    department: "Finance",
  },
  {
    id: 4,
    name: "Hank",
    department: "IT",
  },
];

sortify(arr,"department", "IT");
