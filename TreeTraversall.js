// Two ways of traversing a tree
    // Breadth first => visiting every node in the same level
    // Depth first => visisting every node downwards

// Breadth First
    // create a queue, and a variable to store value of nodes visited
    // place root node in the queue
    // loop as long as there is anything in the queue
        // dequeue a node from the queue and push the value of the node into the variable that stores the node 
        // if the is a left property on the node, dequeue and add it to the queue
        // if there is a right property on the node, dequeue and add it to the queue
    // return variable that stores the values
    
    