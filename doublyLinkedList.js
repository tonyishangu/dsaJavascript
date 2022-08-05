class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // push
    // adding a node at the end
        // function that accepts a value 
        // create a new node 
        // if head property is null set head and tail to be the new node
        // else set next property of tail to be new node
            // set prev property of the newnode to be the tail
            // set tail to new node 
        // increment the length
        // return list 
    push(val) {
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    // shift
    // remove first node from the list
        // if length is 0 return null || underfined
        // place head into a variable
        // if length is 1 set head and tail to be null
        // else set head to be the next of the previous head
            // set previous property of the new head to be null
            // set next property of the old head to be null
        // decrement length
        // return value of old head
    shift() {
        if(this.length === 0) return undefined
        var oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead.val
    }
    unshift(val) {
        var newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}