const support = require('./support')
const {
    threesAndFives,
    evenFibonacciNumbers,
    largestPrimeFactor,
    largestPalindromeProduct,
    smallestMultiple,
    sumSquareDifference,
    tenThousandAndFirstPrime,
    largestProductInASeries,
    specialPythagoreanTriplet,
} = require('./index.js')

test('Find the sum of all the multiples of 3 or 5 below 1000.', () => {
    expect(threesAndFives(1000)).toBe(233168);
});
test('By considering the terms in the Fibonacci sequence whose values do not exceed four million,\nfind the sum of the even-valued terms.', () => {
    expect(evenFibonacciNumbers(31)).toBe(4613732);
});
test('What is the largest prime factor?', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
});
test('Find the largest palindrome made from the product of two 3-digit numbers.', () => {
    expect(largestPalindromeProduct()).toBe(906609);
});
test('What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?', () => {
    expect(smallestMultiple(20)).toBe(232792560);
});
test('Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.', () => {
    expect(sumSquareDifference(100)).toBe(25164150);
});
// test('What is the 10,001st prime number?', () => {
//     expect(tenThousandAndFirstPrime(10001)).toBe();
// });
test('Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?', () => {
    expect(largestProductInASeries(support.largestProduct)).toBe(23514624000);
});