import { Node, LinkedList } from "./godly-linked-list.js"

export class Queue extends LinkedList {
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
            this.head = null
            this.tail = null
            // console.log(this.head)
            return this.head
        }
        let oldHead = this.head
        let newHead = this.head.next
        this.head = newHead
        return oldHead
    }
}

