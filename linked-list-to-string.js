class Node {
    constructor(data) {
        this.data = data
        this.next = null
        // this.dataString = "[" + this.data.toString() + "]"
        this.string = ""
    }

    stringify() {
        let dataString = "[" + this.data.toString() + "]"
        // if(this.next === null) {
        //     return dataString 
        // } else {
        //     return dataString + "->"
        // }
        return dataString
    }

    stringifyTwo() {
        let dataString = "[" + this.data.toString() + "]"
        if (this.next !== null) {
            // this.string = dataString + "->" + this.next.stringifyTwo()
            dataString = dataString + "->" + this.next.stringifyTwo()
            return dataString
            // return this.string  
        }
        else {
            // this.string = this.string + dataString
            // return this.string
            return dataString
        }
        
    }
}

class LinkedList {
    constructor() {
        // this.head is of type Node
        this.head = null
    }

    append(data) {
        if (this.head === null) {
            this.head = new Node(data)
            return
        }
        let current = this.head

        while (current.next != null) {
            current = current.next
        }
        current.next = new Node(data)
    }

    prepend(data) {
        let newHead = new Node(data)
        newHead.next = head
        head = newHead
    }

    deleteWithValue(data) {
        if (this.head === null) return
        if (head.data === data) {
            this.head = this.head.next
            return
        }
        let current = this.head

        while (current.next != null) {
            if (current.next.data == data) {
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }

    stringify() {
        let string = ""
        if (this.head === null) {
            return "this shit empty"
        }
        let current = this.head

        while (current.next !== null) {
            string = string + current.stringify() + "->"
            current = current.next
        }
        string = string + current.stringify()
        console.log(string)
    }

    stringifyTwo() {
        if (this.head === null) {
            console.log("this shit empty")
            return 
        }
        console.log(this.head.stringifyTwo())
        return this.head.stringifyTwo()
    }
}

const list = new LinkedList()

list.append(5)
list.append(7)
list.append(87)
// list.append(33)
list.stringifyTwo()

// console.log(list.head)

