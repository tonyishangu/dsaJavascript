console.log('big O notation');
//  suppose we want to write a function that
//  calculates the sum of all numbers from 1 
//  up to (and including) some nummber n

        // solution 1
const addUpTo = (n) => {
    let total = 0
    for (let i = 0; i <= n ; i++){
        total += i
    }
    return total;
}

console.log(addUpTo(100))

        //solution 2

const addUpToo = (n) => {
    return n * (n + 1) /2
}

console.log(addUpToo(100));



// function to calculate characters in a string 
const calcChar = (str) => {
    let results = {}
    for (let i = 0 ; i < str.length ; i++){
        let char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (results[char] > 0 ) {
                results[char]++
            } else {
                results[char] = 1
            }
        }
    }
    return results
}

console.log(calcChar('hello 1234'));

const charCount = (stg) => {
    let obj = {}
    for (let char of stg) {
        char = char.toLowerCase()
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}
console.log(charCount('why is the rum gone'));
