function bubbleSort(array) {
  let count = 0
  while (count < array.length) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let swap = array[i]
        array[i] = array[i + 1]
        array[i + 1] = swap
      }
    }
    count += 1
  }

  return array
}
