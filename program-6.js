// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:
arr = [
  {
    employee_id: 1,
    employee_name: "Aman",
  },
  {
    employee_id: 2,
    employee_name: "Bhargava",
  },
  {
    employee_id: 3,
    employee_name: "Chaitanya",
  },
];

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ]

const modification = (arr, empID, changedName) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element.employee_id == empID) {
      element.employee_name = changedName;
      return;
    }
  }
};

modification(arr, 2, "Monjolika");
console.log(arr);
