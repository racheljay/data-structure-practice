/*
    Following notes are from a FreeCodeCamp article:
    https://www.freecodecamp.org/news/data-structures-101-linked-lists-254c82cf5883/
*/

// The building block of a linked list is a NODE

const Node = function (value) {
    this.value = value
    this.next = null
}

/* ^^
    This node has two properties:
    VALUE => holds our data
    NEXT => a reference which we have currently set to null
    we will use this to point to the next NODE
*/

/* IMPLEMENTATION */
const LinkedList = function (headValue) {
    // !! forces a value to become a boolean
    if (!!headValue) {
        return "Please provide initial value for first node"
    } else {
        this._head = new Node(headValue)
        this._tail = this.head
        // the underscore means this is "private"
        // mind you it doesn't actually do anything, but you shouldn't use it outside
    }
}

/* ^^
    In our second constructor we are testing to see if there is a value in the first node
    If there is, we will create a new NODE with the value passed in
    Also the tail becomes the head

*/

/* INSERTION */
LinkedList.prototype.insertAfter = function(node, value) {
    let newNode = new Node(value)
    let oldNext = node.next
    newNode.next = oldNext
    node.next = newNode

    if (this._tail === node) {
        this._tail = newNode
    }
    return newNode
}

/*
    This method creates a new NODE and adjusts the other references
    the former NEXT reference of the original NODE is now pointed at newNode
    the newNode's NEXT reference is pointed to what the previous NODE's next was referring to
    Finally we check and reset the tail
 */

LinkedList.prototype.insertHead = function(value) {
    let newHead = new Node(value)
    let oldHead = this._head
    newHead.next = oldHead
    this._head = newHead

    return this._head
}

LinkedList.prototype.appendToTail = function(value) {
    let newTail = new Node(value)
    this._tail.next = newTail
    this._tail = newTail

    return this._tail
}
/*
    Inserting in the beginning or end is fast and uses constant time
    To do this we make a new NODE with a value and rearrange our references
    We reset the NODE which is now the head with insertHead or the tail with appendToTail

    These operations represent:
    - fast insertions for collections
    - push for stacks
    - enqueue for queues

    *NOTE none of these are like unshift() because unshift moves everything over
    by one index. that makes it linear, not constant
 */

/* DELETION */

LinkedList.prototype.removeAfter = function(node) {
    let removedNode = node.next
    
    if (!!removedNode) return "Nothing to remove"
    else {
        let newNext = removedNode.next
        node.next = newNext
        removedNode.next = null // dereferencing to null frees up memory

        if (this._tail === removedNode) {
            this._tail = node
        }
    }
    return removedNode
}

/*
    This method starts by testing if there is a node to remove
    Then we proceed to adjust references
    Deference the removedNode and setting to null is important
    It will free up memory and avoid having multiple references to the same object
*/

LinkedList.prototype.removeHead = function() {
    let oldHead = this._head
    let newHead = this._head.next
    this._head = newHead
    oldHead.next = null

    return this._head
}

/*
    Deletion of a head and of a specified node in, removeAfter, are constant time
    removals. In addition, if the value of the tail is known, then tail removal can be done
    in O(1). Else we have to move linearly to the end to remove it O(n)
*/

/* LOOPING AND FOREACH */

/*
    We use the following to iterate through a linked list
    or to operate on each node value
 */

console.log()
console.log(LinkedList(87))