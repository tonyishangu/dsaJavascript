console.log('Singly linked list');

// data structure that contains a head, tail and length property
// has a node and a value with each node having a pointer to another node or null

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // push method
        // adding an element at the end of the list
        // function accepts a value
        // create a new node using the value passed to the function
        // if head and tail are null set new node to be both head and tail
        // else set next value of tail to be new node and set tail to be new node
        // increment length

    push = (val) => {
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }

    // pop method
        // removing the last element
        // if there no nodes return undefined/null
        // store cuurent head in a variable
        // create new variable set it to be the above variable
        // loop through the list ubtil you reach the tail
        // set the next property of the 2nd last node to be null
        // set tail to be second last element
        // decrement the length by 1
        //  if length becomes 0 set head and tail to be null
        // return value removed

    pop = () => {
        if(this.length === 0) return null
        let removed = this.head
        let newTail = removed
        while(removed.next){
            newTail = removed
            removed = removed.next
        }
        this.tail = newTail
        this.tail.next = null

        this.length --
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return removed.val
    }

    // shift method
        // removing a node from the beginning
        // if there are no nodes return undefined || null
        // store current head in a variable
        // set head property to be the current head's property
        // decrement length by 1
        // if length becomes 0 then set head and tail to be null
        // return value of node removed

    shift = () => {
        if(this.length === 0) return null
        let deleted = this.head
        this.head = this.head.next
        
        this.length --
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return deleted.val
    }

    // unshift
    // adding a node at the beginning
        // function accept a value
        // create a new node using the value 
        // if there is no head set head and tail to be the new node
        // else set the new node next property to be the current head
        // set head to be the newly created node
        // increment length
        // return list

    unshift = (val) => {
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }

    // get
    // get a node from the list
        // function should accept an index
        // if th index is less than 0 || greater than || equal to the length return null
        // create a counter variable set it to zero
        // create a variablle for current head
        // loop until you reach the index and return the node
            // use counter and index to loop
            // set current to be currnet.next
            // incremnet counter
        
    get = (index) => {
        if(index === 0 || index >= this.length) return null
        let counter = 0
        let current = this.head

        while(counter !== index){
            current = current.next
            counter ++
        }
        return current
    }

    // set
    // changing value of a node based on its position
        // function should accept a value and an index
        // use get function to find the specific node
            // new variable to hold the foundNode set it to the get method
        // if node is not found return false
        // else set value of the node to be the one given and return true
    
    set = (val, index) => {
        let foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    // insert
    // adding a node to the linked list 
        // function accepts index and value
        // index is less than 0 and greater than length return false
        // if index is same as length push new node to end of list
        // if index is 0 unshift a new node to the start of list
        // create new node
        // create a prev variable to hold get method
        // temp variable to hold next property of the prev
        // set prev.next to be the new node
        // set newnode next property to be the temp
        // increment length
        // return true

    insert = (index, val) => {
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp

        this.length ++
        return true
    }

    // remove
    // removing a node from a linked list
        // function accepts index
        // if index is less than 0 or greater or equal length return null
        
}

