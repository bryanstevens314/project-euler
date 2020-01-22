// Find the sum of all the multiples of 3 or 5 below 1000.
function threesAndFives(max = 1000){
    const arr = []
    for(let i = 0; i < max; i++){
        if(i % 3 === 0 || i % 5 === 0) arr.push(i)
    }
    return arr.reduce((total, num)=> total + num)
}
console.log('threesAndFives: ', threesAndFives(1000));


// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.
function evenFibonacciNumbers(items){
    const recursive = (items = 10, arr = [], base = 1) => {
        if(arr.length !== 0) 
            arr.push(arr[arr.length - 2] + arr[arr.length - 1])
        else 
            arr.push(base, base += 1)
        items -= 1
        if(items !== 0) recursive(items, arr)
        return arr.flat()
    }
    return recursive(items).filter(item => {if (item % 2 === 0) return item}).reduce((total, num) => total + num)
}
console.log('evenFibonacciNumbers', evenFibonacciNumbers(31));


// What is the largest prime factor 
// I did not solve this and have zero clue why this works.
function largestPrimeFactor(num){
    //initialize the variable that will represent the divider
    let i = 2;
    //initialize the variable that will represent the quotient
    let numQuot = num;
    //array that will keep all the dividers
    let primeFactors = [];
    //execute until the quotient is equal to 1
    while(numQuot != 1) {
        /*check if the division between the number and the divider has no reminder, if yes then do the division keeping the quotient in numQuot, the divider in primeFactors and proceed to restart the divider to 2, if not then increment i by one an check again the condition.*/
        if(numQuot % i == 0){
            numQuot /= i;
            primeFactors.push(i);
            i = 2;
        } else {
            i++;
        }
    }
    /*initialize the variable that will represent the biggest prime factor. biggest is equal to the last position of the array, that is the biggest prime factor (we have to subtract 1 of .length in order to obtain the index of the last item)*/
    return primeFactors[primeFactors.length - 1];
}
console.log('largestPrimeFactor: ', largestPrimeFactor(600851475143));


// Find the largest palindrome made from the product of two 3-digit numbers.
function largestPalindromeProduct(base1 = 999, base2 = 999){
    const res = []
    while(base2 > 900){
        while(base1 >= 900){
            const product = base1 * base2
            if(product.toString() === product.toString().split('').reverse().join('')) 
                res.push(product)
            base1--
        }
        base2--
        base1 = 999
    }
    return res.sort()[res.length -1]
}
console.log('largestPalindromeProduct: ', largestPalindromeProduct());


// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function smallestMultiple(num){
    const divisible = (res, num) => {
        var req = false
        while(num >= 1){
            if(res % num === 0) 
                req = true
            else{
                req = false
                break
            } 
            num--
        }
        return req
    }
    var res = 1
    while(!false){
        if(divisible(res, num)) break
        res++
    }
    return res
}
console.log('smallestMultiple: ', smallestMultiple(20));


