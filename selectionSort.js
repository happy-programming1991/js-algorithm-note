function findSmallest(list) {
  let smallest = list[0]
  let smallestIndex = 0

  list.forEach((item, index) => {
    if (item < smallest) {
      smallest = item
      smallestIndex = index
    }
  })

  return smallestIndex
}

function selectionSort(list) {
  const newList = []

  while (list.length) {
    const smallest = findSmallest(list)
    newList.push(list[smallest])
    list.splice(smallest, 1)
  }

  return newList
}

console.log(selectionSort([5, 3, 6, 2, 10]))