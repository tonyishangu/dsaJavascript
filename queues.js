// Queues => FIFO data structure
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    // enqueue
    // adding to a queue
        // fuction accepts value
        // create a new node
        // if there are no nodes set first and last to be new node
        // else set the next property of the current last to be of new node 
        // set last property to be new node
        // increment size 
        // return queue

    enqueue = (val) => {
        const newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size ++
        return this
    }
}