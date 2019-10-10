function insertionSort(inputArray) {
    for(let i = 1; i < inputArray.length; i++) {
      for (let j = 0; j < i; j++) {
        if(inputArray[i] < inputArray[j]) {
          let temp = inputArray.splice(i, 1);
          console.log('temp', temp)
          inputArray.splice(j, 0, temp[0])
        }
      }
    }
      return inputArray
  }
  // test case
  insertionSort([2,3,5,4,1])