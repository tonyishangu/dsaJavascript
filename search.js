// linear search
// start at the beginning of the data set each
// item of data is examined until a match is found
// once found the search ends
// includes()  indexOf()    find()

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return false;
};

// console.log(linearSearch([1, 2, 3, 4, 5]));

// Binary search

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : false;
};
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

// Naive string search

const naiveSearch = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i + j]) break;
      if (j === str2.length - 1) count++;
    }
  }
  return count;
};

// console.log("naive search", naiveSearch("abcdcbdacb", "cb"));

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (nums[start] !== target || start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (target < nums[middle]) {
      end = middle - 1;
      // console.log('end',end);
    } else {
      start = middle + 1;
      console.log('start', start);
    }
    middle = Math.floor((start + end) / 2);
    // if(target === nums[0]) return  0
    // return nums[middle] === target ? middle : (target <= nums[start] ? start : end + 1);
    if (nums[middle] === target){
      return middle
    } else if(target <= nums[start]) {
      return start 
    } else if(target > nums[end]) {
      return end + 1
    }
  }
};

console.log(searchInsert([1,3,5], 3))

