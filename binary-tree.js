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
        let current = new Node(arr[0])

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
        console.log(this.data, this.right.data, this.left.data)

    }
}

const myTree = new Node(4)

const case1 = [4, 2, 7, 1, 3, 6, 9]

// myTree.insertArray(case1)

const tree2 = Node.fromArray(case1)
console.log(tree2)

// myTree.insert(4)
// myTree.insert(2)
// myTree.insert(8)

// myTree.contains(9)

// tree2.printInOrder()
// myTree.printPreOrder()