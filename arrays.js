console.log('working');

// Creating Arrays

const arr = []
console.log(arr.length)

const arr2 = new Array(2,2,3,4)
console.log(arr2);
console.log(arr2.length);
//to check if is array
console.log(Array.isArray(arr2))

const arr3 = new Array(10)
console.log(arr3.length);

//accessing and writting array elements
        //   loop to assign values of 1 through 100 to an array
const nums = []
for (let i = 0 ; i < 100 ; i++){
    nums[i] = i + 1
}
console.log(nums);

        //accesing array elements using [] operator
const num = [1,2,3,4,5]
console.log(num[0]);

        //creating array from a string........using split()

const sentence = "the quick brown fox jumped over the lazy dog"
const words = sentence.split(" ")
console.log (Array.isArray(words))
console.log(words);

        //aggregating array operation
     //asigning one array to another

const numbers = []
for (let i = 0; i < 100; i++){
        numbers[i] = i + 1
}
const newNumbers = numbers
console.log('new array', newNumbers);

                //searching an array

const names = ['Tony', 'Ishangu', 'Saigelo', 'Canales']
const jina = 'Tony'
const pos = names.indexOf(jina)
if (pos >= 0 ){
        console.log(`Found ${jina} at position ${pos}`);
} else {
        console.log(`${jina} not found in the array`);
}
console.log(names.includes(jina));

        // string rep of array using join() and toString()

const members = ['Tony', 'Michelle', 'Lola', 'Seif']
const repMember = members.join()
console.log('using join:', repMember);

const repMembers = members.toString()
console.log('using tostring:', repMembers);

        //creating a new array from an existing one using concat() and splice()
        
        // concat combines two or more arrays together to form a new array

const softwareDept = ['Mike', 'Clayton', 'Terill']
const hardwareDept = ['Raymond', 'Cynthia', 'Brian']
const itDept = softwareDept.concat(hardwareDept)
console.log('concat the two arrays to form a new array', itDept);

        // splice method forms a new array by taking a subset from an existing array

const hwDept = itDept.splice(3,3)
console.log('new array created using splice', hwDept);

        //adding elements to an array using unshift() and push() methods
        //push() adds elements at the end of the array

const schools = ['Moringa', 'Ufanisi']
schools.push('TUK')
console.log(schools);

        //unshift() adds element at the begining of the array
schools.unshift('JKUAT')
console.log(schools);

        //removing elements from an array using pop() and shift() methods
        //pop() removes the last element
schools.pop()
console.log('pop method', schools);

        //shift() removes the first element
schools.shift()
console.log('shift method', schools);

        // adding and removing elements from the middle of ana array using splice
        // we pass 3 arguements
                // 1 => where you want to start from
                // 2 => how many you want to remove (0 where you are adding)
                // 3 => element you want to add to the array
schools.splice(1,0, 'NIBS')
console.log('splice to add nibs', schools);

schools.splice(2,1)
console.log('splice to remove ufanisi', schools);

        //forEach method => allows one to pass a function as an argument then applies the called function to all the elements in the array
const square = (no) => {
        console.log(no, no * no);
}
const no = [1,2,3,4,5]
no.forEach(square)

        //every() method applies boolean function to an array and returns true if all elements can return true from the function
const isEven = (elNums) => {
        return elNums % 2 === 0
}
const elNums = [2,4,6,8,10,12]
const even = elNums.every(isEven)
if (even) {
        console.log('all are even numbers');
} else {
        console.log('not all are even numbers');
}

const evenNums = elNums.some(isEven)
if (evenNums) {
        console.log('some are even');
} else {
        console.log('none is even at all');
}
