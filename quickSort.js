function quickSork(list) {
  if (list.length < 2) {
    return list
  }else {
    const pivot = list[Math.floor((list.length - 1)/2)]
    const less = []
    const greater = []
    
    for (let index = 0; index < list.length; index++) {
      const element = list[index]
      
      if (element < pivot) {
        less.push(element)
      }

      if (element > pivot) {
        greater.push(element)
      }
    }

    return quickSork(less).concat(pivot, quickSork(greater))
  }
}

console.log(quickSork([10, 8, 5, 2, 4, 3]))