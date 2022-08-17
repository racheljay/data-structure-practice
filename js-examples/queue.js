import { Node, LinkedList } from "./godly-linked-list.js"

class Queue extends LinkedList {
    constructor() {
        super()
        this.tail = null
    }

    // add a new tail node
    push(data) {
        if (this.head === null) {
            this.head = new Node(data)
            this.tail = this.head
            return
        }
        let oldTail = this.tail
        let newTail = new Node(data)
        oldTail.next = newTail
        this.tail = newTail
    }

    // removes the current head node
    pop() {
        if (this.head === null) {
            return
        }
        let newHead = this.head.next
        this.head = newHead
    }
}

let queue = new Queue()

queue.push(2)
queue.push(5)
queue.push(12)
queue.push(13)

// queue.append(4)
// queue.append(7)
// queue.append(9)
// queue.pop()

console.log("head:", queue.head.data, "tail:", queue.tail.data)
// console.log(queue.head)

queue.stringify()