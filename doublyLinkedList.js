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

    // pop
    // removing the last node from the list
        // if there is no head return null || undefined
        // store current tail in a variable
        // if length is 1 set head and tail to be null
        // update tail to be the prevous node
        // set new tail next to be null
        // old tail prev to be null
        // decrement length
        // return value of popped node

    pop = () => {
        if(!this.head) return null
        let deltedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = deltedNode.prev
            this.tail.next = null
            deltedNode.prev = null
        }
        this.length --
        return deltedNode.val
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
    // ushift
    // add at the start of the list
        // function accepts a value
        // create a new Node using the value
        // if head is null set both head and tail to be the new node
        // else set previous property of the head to be the new node
            // set next property of the new node to be the head
            // set head to be new node
        // increment the length
        // return the list
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

    // get
    // accessing a node
        // function accepts an index
        // if index is less than 0, greater or equal to length return null
        // if index is less than or equal to half the length of the list
        // create a count variable
        // current variable to hold the head
            // loop through the list starting from the headtowards the middle
            // return once found
        // if index is greater than half of the lis
            // loop through starting from tails towards the middle
            // return once found

    get = (index) => {
        if(index < 0 || index >= this.length) return null
        if(index <= this.length / 2){
            let count = 0
            let current = this.head
            
            while (count !== index){
                current = current.next
                count ++
            }
        } else {
            count = this.length - 1
            current = this.tail

            while(count !== index){
                current = current.prev
                count --
            }
        }
        return current
    }
    // set
    // replace the value of a node
        // function accepts a value and index
        // create a variable which is the result of get method
        // if index is found replace the value
        // return true
        // else return false

     get = (index, val) => {
        let found = this.get(index)
        if (found !== null) {
            found.val = val
            return true
        }
        return false
     }

    //  insert
    // adding a node
        // function accepts value and index
        // if index is less than 0, or greater than the length return false
        // if index is 0 implement unshift
        // if index is equal to length implement push
        // use get method to access index - 1
        // set prev and next to link everything
        // increment length
        // return list

    insert = (index, val) => {
        if(index < 0 || index > this.length) return null
        if( index === 0 ) return !!this.unshift(val)
        if( index === this.length ) return !!this.push(val)

        let newNode = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.prev

        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode

        this.length ++
        return this
    }

    // delete
    // removing a node
        // function accepts an index
        // check if index is less than 0 or greater or equal to length
        // if index is 0 use shift method
        // if index is equal to length - 1 use pop method
        // use get method to retrieve node to be removed
        // update next and prev propertis
        // set next and prev of removed node to be null
        // decrement length
        // return value  of removed node

    delete = (index) => {
        if(index < 0 || index >= this.length) return null
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let found = this.get(index)
        let beforeNode = found.prev
        let afterNode = found.next

        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        found.prev = null
        found.next = null

        this.length --
        return found.val
    }
}


        // BIG 0
            // insertion => 0(1)
            // removal => 0(1)
            // searching => 0(n) 0(n/2)
            // acess => 0(n)