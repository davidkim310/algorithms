let inputArray = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6];
let bubbleSort = function(inputArray) {
  for(let i = 0; i < inputArray.length; i++) {
    while(inputArray[i+1] > inputArray[i]) {
      let temp = inputArray[i];
      inputArray[i] = inputArray[i+1];
      inputArray[i+1] = temp;
      bubbleSort(inputArray)
    }
  }
  return inputArray
}
bubbleSort(inputArray);