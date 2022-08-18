// Tree => Data structure that consists of nodes in parent-child relationship
// non-linear

// Root => top node of a tree
// child => node directly connected to another node moving away from the root
// parent => the converse notion of a child
// siblings => group of nodes with same parent
// edge => connection between one node and another
// leaf => node with no children

class Node {
    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }
}

class BinaryTreeSearch {
    constructor(){
        this.root = null
    }

    // insert
    // inserting in a bts
        // function accepts a value
        // create a new node
        // Starting at the root
            // check if there is a root, if not, new node becomes the root
            // else check if the value of the new node is greater or less than the value of the root
            // if its greater
                // check to see if there is a node to the right
                    // if there is move to that node and repeat the process
                    // else add that node as the right property
            // if its less
                // check to see if there is a node to the left
                    // if there is, move to that node and repeat the process
                    // else add that node as the left property
    // return tree

    insert = (val) => {
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode
            return this
        }
        let current = this.root
        while(true){
            if(val === current.val) return undefined
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if(current.right === null){
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }

    }

    // find
    // searching
        // function accepts a value
        // Starting at the root
        // check if there is a root, if  not, we are done searching
        // store root in a variable
        // store found in a boolean variable
        // else if the value of the node is the value we are looking for 
        // if found we are done
        // else check if value is greater or less than
        // if its greater
            // check to see if there is a node to the right
            // if there is, move to that node and repeat the process
            // else, we are done searching
        // if its less
            // check to see if there is a node to the left
            // if there is, move to that node and repeat the process
            // else, we are done searching

    find = (val) => {
        if(!this.root) return false
        let current = this.root
        let found = false

        while(current && !found){
            if(val < current.val){
                current = current.left 
            } else if (val > current.val){
                current = current.right
            } else {
                found = true
            }
        }
        if(!found) return false
        return current
    }
}

    // Big O notation
        // insertion => 0(log n)
        // searching => 0(log n)