const countDown = (num) => {
    if(num <= 0){
        console.log('all done');
        return
    }
    console.log(num);
    num--
    countDown(num)
}

countDown(20)

const sumRange = (num) => {
    if(num === 1) return num
    return num + sumRange(num -1)
}

console.log(sumRange(5))

const factorial = (num) => {
    if (num === 1) return num
    return num * factorial(num - 1)
}

console.log('factorial', factorial(10));

//pure recursion
const collectOddNums = (arr) => {
    let newArr = []
    if(arr.length === 0){
     return newArr
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddNums(arr.slice(1)))
    return (newArr);
}
collectOddNums([1,2,3,4,5,7,9])
