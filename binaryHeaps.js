// binary Heaps
// left side is filled first
    // maxBinaryHeap => parent node always larger than children
    // minBinaryHeap => parent nodes are smaller than child node

// Storing Heaps 
    // for any index of an array n....
        // the left side is stored at 2n+1
        // the right side is stored at 2n+2

    // for any child at index n..
        // its parent is at index(n-1)/2 floored

// heap insert
    // ass to the end
    // bubble up => switch to the correct position
    // pseudocode
    // push the value into the values property on the heap
    // bubble heap
        // create a variable called index whic is the length of values property - 1
        // creat a variable called parentindex which is the floor of (index-1)/2
        // keep looping as long as the values element of the prent index is less than that of child index
        // swap the values elementat the parent index with the value of the property at the child index
        // set index to be the parent index and start over



// heap removing
    // remove root
    // replace with the most recently added
    // adjust (sink down) || bubble down

    // pseucode
    // swap first and last values
    // pop from the values property
    // have the root sink down to its correct position
        // parent index starts at 0 (the root)
        // find the index at the left child(2n+1)
        // find the index at the right child(2n+2)
        // if right or left is greater swap with the larger
        // if both are greater swap with the largest
        // child index swapped now becomes the new parent index
        // keep looping and swapping until neither child is larger than the element
        // return the old root


class maxBinaryHeap {
    constructor(){
        this.val = []
    }

    insert = (ele) => {
        this.val.push(ele)
        this.bubbleUp()
    }
    bubbleUp = () => {
        let idx = this.val.length - 1
        const element = this.val[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.val[parentIdx]

            if(element <= parent) break
            this.val[parentIdx] = element
            this.val[idx] = parent
            idx = parentIdx
        }
    }

    extractMax = () => {
        let max = this.val[0]
        let end = this.val.pop()

        if(this.val.length > 0){
            this.val[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown = () => {
        let idx = 0
        let length = this.val.length
        let element = this.val[0]
        while(true){
            let leftChildIdx = 2 * (idx + 1)
            let rightChildIdx = 2 * (idx + 2)
            let leftChild, rightChild

            let swap = null

            if (leftChildIdx < length ){
                leftChild = this.val[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx < length){
                rightChild = this.val[rightChildIdx]
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx
                }
            }
            if(swap === null) break
            this.val[idx] = this.val[swap]
            this.val[swap] = element
            idx = swap
        }
    }
}