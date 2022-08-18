import { Node, LinkedList } from "./godly-linked-list.js"
import { Queue } from "./queue.js"

export class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    insert(value) {
        if (value <= this.data) {
            if (this.left === null) {
                this.left = new TreeNode(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if (this.right === null) {
                this.right = new TreeNode(value)
            } else {
                this.right.insert(value)
            }
        }
    }

    insertArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i])
        }
    }

    /*
        Returns a tree representation of the array
    */
    static fromArray(arr) {
        if (arr === []) {
            return null
        }
        let current = new TreeNode(arr[0])

        for (let i = 1; i < arr.length; i++) {
            let val = arr[i]
            current.insert(val)

        }

        return current

    }

    contains(value) {
        if (value === this.data) {
            console.log(`here is your [${value}], please enjoy`)
            return true
        } else if (value < this.data) {
            if (this.left === null) {
                console.log("no dice")
                return false
            } else {
                return this.left.contains(value)
            }
        } else {
            if (this.right === null) {
                console.log("nada")
                return false
            } else {
                return this.right.contains(value)
            }
        }
    }

    // in order traversal
    printInOrder() {
        if (this.left !== null) {
            this.left.printInOrder()
        }
        console.log(this.data)
        if (this.right !== null) {
            this.right.printInOrder()
        }
    }

    printPreOrder() {
        if (this.data === undefined) {
            console.log("nah sis, aint got no roots")
            return
        }
        const displayArr = []

        let treeNodeQueue = new Queue()

        // record the first tree node
        displayArr.push(this.data)
        
        // check for the first left and right and get the queue started
        if(this.left !== null && this.right !== null) {
            treeNodeQueue.push(this.left)
            treeNodeQueue.push(this.right)
        }

        let current = treeNodeQueue.head

        // let testQueue = new Queue()
        // console.log(testQueue.head)

        // console.log("~~~~test queue:", testQueue.pop())

        // console.log("THIS ONE", treeNodeQueue.pop().data.data)
        let popped = treeNodeQueue.pop()
        console.log("popped:", popped)
        let count = 0
        
        while(popped !== null) {
            if(popped.next === null) {
                displayArr.push(popped.data.data)
            }
            console.log("POPPED:",popped.data)
            if(popped !== null) {
                displayArr.push(popped.data.data)
            }
            if(popped.data.left !== null && popped.data.right !== null) {
                treeNodeQueue.push(popped.data.left)
                treeNodeQueue.push(popped.data.right)
            }
            popped = treeNodeQueue.pop()
        // displayArr.push(popped.data.data)
        count++
        }
        console.log(treeNodeQueue)
        console.log({displayArr})
        

        // treeNodeQueue.push(this.left)
        // treeNodeQueue.push(this.right)
        // console.log(treeNodeQueue.head.data.data)

        // treeNode5Queue.pop()
        // treeNodeQueue.stringify()



    }
}

