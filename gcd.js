/*
Find the greatest common denominator of two numbers
using Euclid's algorithm
*/ 
function gcd(num1, num2) {
  let a = Math.max(num1, num2)
  let b = Math.min(num1, num2)

  while(b != 0) {
    const t = a
    a = b
    b = t % b
  }

  return a
}

console.log(gcd(60, 96)) // 12
console.log(gcd(20, 8)) // 4
