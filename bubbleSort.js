function bubbleSort(list) {
  const len = list.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        const tmp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = tmp
      }
    }
  }
  return list
}

console.log(bubbleSort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53]))
