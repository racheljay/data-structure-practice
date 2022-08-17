import { Node, LinkedList } from "./godly-linked-list.js"

class Queue extends LinkedList {
    constructor() {
        super()
        this.tail = null
    }

    // add a new tail node
    push() {

    }

    // removes the current head node
    pop() {
        if(this.head === null) {
            return
        }
        let newHead = this.head.next
        this.head = newHead
    }
}

let queue = new Queue()

queue.append(4)
queue.append(7)
queue.stringify()