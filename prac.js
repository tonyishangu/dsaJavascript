// Write a push method that pushes an element to the top of the stack,
//  a pop method that removes and returns the element on the top of the
//   stack, a peek method that looks at the top element in the stack,
//    an isEmpty method that checks if the stack is empty, and a clear method
//     that removes all elements from the stack. Normally stacks don't have this,
//  but we've added a print helper method that console logs the collection.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stacks {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push = (val) => {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.first;
      this.first = newNode;
      newNode.next = current;
    }
    return ++this.size;
  };

  pop = () => {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.val;
  };

  peek = () => {
    if (this.size === 0) {
      return null;
    } else {
      return this.first.val;
    }
  };
  isEmpty = () => {
    if(this.size === 0) return true
    return false
  }
}
