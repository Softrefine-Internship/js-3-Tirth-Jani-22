// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:
arr = [
  {
    product: "Laptop",
    price: 1000,
    quantity: 2,
    val:1
  },
  {
    product: "Phone",
    price: 600,
    quantity: 3,
  },
  {
    product: "Monitor",
    price: 250,
    quantity: 1,
  },
];

// Output:
// total value for "price": 1850
// total value for "quantity": 6

const findTotal = (arr, propertyName) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(typeof(element[propertyName]));

    if (element[propertyName] && typeof element[propertyName] === "number") {
      sum = sum + element[propertyName];
    }
  }
  console.log(`total value for "${propertyName}": ${sum}`);

  return sum;
};

findTotal(arr, "val");
