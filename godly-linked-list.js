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

    appendArray(arr) {
        for(let item of arr) {
            this.append(item)
        }
        return
    }

    /*
        Inserts a value into the LinkedList as a new node
        in the position it belongs.

        This method assumes the LinkedList is already
        sorted in ascending order.
    */
    insertInOrder(data) {
        if (this.head === null) {
            this.head = new Node(data)
            return
        }
        if(this.head.next === null) {
            if(this.head.data <= data) {
                this.head.next = new Node(data)
                return
            } else if(this.head.data > data){
                let oldHead = this.head
                let newHead = new Node(data)
                newHead.next = oldHead
                this.head = newHead
                return
            }
        }
        let current = this.head
        
        while(current.next.next !== null) {
            let oldNext = current.next.next
            if (data <= current.next.next.data) {
                current.next.next = new Node(data)
                current.next.next.next = oldNext
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

    static fromArray(arr) {
        const linkedList = new LinkedList()

        // implementation

        return linkedList
    }
}

{
    const list = new LinkedList()
    const array = [34, 68, 24, 89, 5, 77]
    
    // list.append(5)
    // list.append(7)
    // list.append(87)
    // list.append(33)
    
    // list.appendArray(array)
    
    // list.stringifyTwo()
    
    // console.log(list.head)
    
    // console.log(LinkedList.fromArray(array).stringify())
}

// Tests for insertInOrder

{
    const list = new LinkedList()
    list.appendArray([1, 2, 3, 5])

    list.insertInOrder(4)

    list.stringify()

}

{
    const list = new LinkedList()
    list.appendArray([7])

    list.insertInOrder(4)

    list.stringify()

}