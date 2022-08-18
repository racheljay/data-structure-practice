import { Node, LinkedList } from "./godly-linked-list.js"

export class Queue extends LinkedList {
    constructor() {
        super()
        this.tail = null
        this.length = 0
    }

    // add a new tail node
    push(data) {
        if (this.head === null) {
            this.head = new Node(data)
            this.tail = this.head
            this.length++
            return
        }
        let oldTail = this.tail
        let newTail = new Node(data)
        oldTail.next = newTail
        this.tail = newTail
        this.length++
    }

    // removes the current head node
    pop() {
        if (this.head === null) {
            return
        }
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            this.length = 0
            return
        }
        let oldHead = this.head
        let newHead = this.head.next
        this.head = newHead
        this.length--
        return oldHead
    }

    isEmpty() {
        return this.length === 0
    }

    peek() {
        return this.head.data
    }
}

