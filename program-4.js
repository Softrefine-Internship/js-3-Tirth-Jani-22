// Write a JavaScript program to get the index of an object by it's property.

// Input:
arrayObj = [
  {
    prop_1: "val_1",
    prop_2: "val_2",
    prop_3: "val_3",
  },
  {
    prop_1: "val_4",
    prop_2: "val_5",
    prop_3: "val_6",
  },
];

// Output: 1 (index of an object for prop_1: 'val_4')

const findIndex = (arrayObj, propertyName, value) => {
  for (let index = 0; index < arrayObj.length; index++) {
    const element = arrayObj[index];
    for (const key in element) {
      if (key === propertyName && element[key] === value) {
        return index;
      }
    }
  }
  return -1;
};
console.log(findIndex(arrayObj, "prop_1", "val_3"));
