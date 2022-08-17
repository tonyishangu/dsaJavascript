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
}