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
}