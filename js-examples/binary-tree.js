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

    // print tree node vaues top to bottom, left to right
    printPreOrder() {
        if (this.data === undefined) {
            console.log("no roots")
            return
        }
        const displayArr = []

        let treeNodeQueue = new Queue()

        treeNodeQueue.push(this)

        while (treeNodeQueue.head !== null) {
            let current = treeNodeQueue.head

            displayArr.push(current.data.data)
            if (current.data.left !== null) {
                treeNodeQueue.push(current.data.left)
            }
            if (current.data.right !== null) {
                treeNodeQueue.push(current.data.right)
            }

            treeNodeQueue.pop()
        }
        console.log(displayArr)
    }
}

