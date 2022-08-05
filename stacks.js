// LIFO Data structure

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    // push
    // adding element at the end
        // function accepts value
        // create new node
        // if size is 0 set first and last to be the new node
        // if there is atleast 1 node
            // create a variable to hold current first property
            // reset first property to be newly created node 
            // set next property on the node to be the old first
        // increment size

        push = (val) => {
            let newNode = new Node(val)
            if(this.size === 0) {
                this.first = newNode
                this.last = newNode
            } else {
                let current = this.first
                this.first = newNode
                this.first.next = current
            }
            this.size ++
            return this
        }

        // pop
        // removing at the end
            // if the is no node return null
            // if there is only one node set first and tail to be null
            // else set first property to be next one on the current
            // decrement size
            // return value remove

        pop = () => {
            if(this.size === 0) return null
            if(this.size === 1) {
                this.first = null
                this.last = null
            } else {
                let current = this.first
                this.first = current.next
            }
            this.size --
            return current.val
        }
}

        // BIG 0
            // insertion => 0(1)
            // removal => 0(1)
            // searching => 0(n)
            // access => 0(n)