export class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

    stringify() {
        let dataString = "[" + this.data.toString() + "]"

        return dataString
    }

    stringifyTwo() {
        let dataString = "[" + this.data.toString() + "]"
        if (this.next !== null) {
            dataString = dataString + "->" + this.next.stringifyTwo()
            return dataString
        }
        else {
            return dataString
        }

    }
}

export class LinkedList {
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
        for (let item of arr) {
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
  
        let current = this.head

        while (current.next !== null) {
            
            if (current.data <= data && current.next.data >= data) {
                let oldNext = current.next
                current.next = new Node(data)
                current.next.next = oldNext
                return
            }
            
            current = current.next
            
        }
        if(current.next === null && current.data !== null) {
            if(data >= current.data) {
                console.log(data, current.data)
                current.next = new Node(data)
                return
            }
        }
        if (this.head.data <= data) {
            this.head.next = new Node(data)
            return
        } else {
            let oldHead = this.head
            let newHead = new Node(data)
            newHead.next = oldHead
            this.head = newHead
            return
        }
    }

    mergeOrderedList(list) {
        if(list.head === null) {
            return
        }

        let current = list.head
        while (current.next != null) {
            this.insertInOrder(current.data)
            current = current.next
        }
        this.insertInOrder(current.data)
        // return
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

// {
//     const list = new LinkedList()
//     const array = [34, 68, 24, 89, 5, 77]

//     // list.append(5)
//     // list.append(7)
//     // list.append(87)
//     // list.append(33)

//     // list.appendArray(array)

//     // list.stringifyTwo()

//     // console.log(list.head)

//     // console.log(LinkedList.fromArray(array).stringify())
// }

// Tests for insertInOrder

// {
//     const list = new LinkedList()
//     list.appendArray([1, 2, 3, 5])

//     list.insertInOrder(4)

//     list.stringify()

// }

// {
//     const list = new LinkedList()
//     list.appendArray([7])

//     list.insertInOrder(4)

//     list.stringify()

// }

// {
//     const list = new LinkedList()
//     list.appendArray([2])

//     list.insertInOrder(4)

//     list.stringify()

// }

// {
//     const list = new LinkedList()
//     list.appendArray([1,3])
//     list.insertInOrder(2)
//     list.stringify()
// }

// {
//     const otherList = new LinkedList()
//     otherList.appendArray([1, 3, 4])

//     const list = new LinkedList()
//     list.appendArray([1, 2, 4])
//     list.mergeOrderedList(otherList)
//     list.stringify()
// }

// {
//     const otherList = new LinkedList()
//     otherList.appendArray([5,7])

//     const list = new LinkedList()
//     list.appendArray([-9, 3])
//     list.mergeOrderedList(otherList)
//     list.stringify()
// }