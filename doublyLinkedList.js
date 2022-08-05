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
        return oldHead 
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