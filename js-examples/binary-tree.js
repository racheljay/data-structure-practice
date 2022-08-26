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

    insertInvert(value) {
        if (value <= this.data) {
            if (this.right === null) {
                this.right = new TreeNode(value)
            } else {
                this.right.insertInvert(value)
            }
        } else {
            if (this.left === null) {
                this.left = new TreeNode(value)
            } else {
                this.left.insertInvert(value)
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

    static fromArrayInverted(arr) {
        if (arr === []) {
            return null
        }
        let current = new TreeNode(arr[0])

        for (let i = 1; i < arr.length; i++) {
            let val = arr[i]
            current.insertInvert(val)
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

    // print tree node values top to bottom, left to right
    // also returns the node values in an array
    printPreOrder() {
        if (this.data === undefined) {
            console.log("no roots")
            return
        }
        const displayArr = []

        let treeNodeQueue = new Queue()

        treeNodeQueue.push(this)

        while (!treeNodeQueue.isEmpty()) {
            let current = treeNodeQueue.peek()

            displayArr.push(current.data)
            if (current.left !== null) {
                treeNodeQueue.push(current.left)
            }
            if (current.right !== null) {
                treeNodeQueue.push(current.right)
            }

            treeNodeQueue.pop()
        }
        console.log(displayArr.join(" "))
        return displayArr
    }

    invertInPlace() {
        if (this.left === null && this.right === null) return
        let oldLeft = this.left
        this.left = this.right
        this.right = oldLeft
        this.right && this.right.invertInPlace()
        this.left && this.left.invertInPlace()

    }

    printPath(finalNode) {
        console.log(this.data)
        if (this.data === finalNode) {
            return
        } else if (finalNode < this.data) {
            if (this.left === null) {
                console.log("data not found")
                return
            } else {
                return this.left.printPath(finalNode)
            }
        } else {
            if (this.right === null) {
                console.log("data still not found")
                return
            } else {
                return this.right.printPath(finalNode)
            }
        }
    }

    lowestCommonAncestor(p, q) {

        const savePath = data => {
            const pathSet = new Set()

            let current = this
            while (current !== null) {
                pathSet.add(current.data)
                if (data === current.data) {
                    return pathSet
                } else if (data < current.data) {
                    if (current.left === null) {
                        console.log("no dice")
                        return
                    } else {
                        current = current.left
                    }
                } else {
                    if (current.right === null) {
                        console.long("still no dice")
                        return
                    } else {
                        current = current.right
                    }
                }
            }
            return pathSet
        }

        const pSet = savePath(p)
        const qSet = savePath(q)
        console.log(pSet, qSet)

        const commonAncestors = new Set();

        for (const num of qSet) {
            if (pSet.has(num)) {
                commonAncestors.add(num);
            }
        }
        console.log(commonAncestors)

        let highest = Number.MAX_SAFE_INTEGER
        commonAncestors.forEach((num) => {
            if(num < highest) {
                highest = num
            }
            
        })
        console.log(highest)
        return highest
    }
}

