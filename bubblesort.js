function bubbleSort(array) {
  let count = 0
  while (count < array.length) {
    for (let i = 0; i < array.length; i++) {
        swap(i,array)
    }
    count += 1
  }

  return array
}

function swap(i,array){
  if (array[i] > array[i + 1]) {
    let swap = array[i]
    array[i] = array[i + 1]
    array[i + 1] = swap
  }
}