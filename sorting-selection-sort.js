const stdin = process.openStdin();
const numbers = [];

stdin.addListener("data", function (d) {
  // note:  d is an object, and when converted to a string it will
  // end with a linefeed.  so we (rather crudely) account for that
  // with toString() and then trim()
  if (isNumber(d)) {
    console.log("asasd");
    numbers.push(+d.toString().trim());
    selectionSort(numbers, numbers.length);
  } else {
    console.log("Not a valid number");
  }
});

const isNumber = (value) => {
  return !isNaN(value);
};

const selectionSort = (array, arrayLength) => {
  for (let i = 0; i < arrayLength - 1; i++) {
    let smallValueIndex = i;
    for (let j = i + 1; j < arrayLength; j++) {
      if (array[j] < array[smallValueIndex]) {
        smallValueIndex = j;
      }
    }
    if (smallValueIndex !== i) {
      swap(array, i, smallValueIndex);
    }
  }
  console.log("Sorted array:", array);
};

const swap = (array, firstIndex, secondIndex) => {
  array[firstIndex] = array[firstIndex] + array[secondIndex];
  array[secondIndex] = array[firstIndex] - array[secondIndex];
  array[firstIndex] = array[firstIndex] - array[secondIndex];
};
