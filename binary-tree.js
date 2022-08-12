class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    insert(value) {
        if (value <= this.data) {
            if (this.left === null) {
                this.left = new Node(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if (this.right === null) {
                this.right = new Node(value)
            } else {
                this.right.insert(value)
            }
        }
    }

    contains(value) {
        if (value === this.data) {
            console.log(`here is your [${value}], please enjoy`)
            return true
        } else if (value > this.data) {
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
}

const myTree = new Node()

myTree.insert(4)
myTree.insert(2)
myTree.insert(8)

myTree.contains(2)

myTree.printInOrder()