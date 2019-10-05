function mergeSort(list) {
  const len = list.length
  
  if (len < 2) {
    return list
  }

  const mid = Math.floor(len / 2),
    left = list.slice(0, mid),
    right = list.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length)
    result.push(left.shift())

  while (right.length)
    result.push(right.shift())

  return result
}

console.log(mergeSort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53]))
