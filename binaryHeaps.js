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
}