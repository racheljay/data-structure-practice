import { TreeNode } from "../js-examples/binary-tree.js"

// const myTree = new TreeNode(4)

const case1 = [4, 2, 7, 1, 3, 6, 9]
const case2 = [6, 2, 8, 0, 4, 7, 9, 3, 5]

// myTree.insertArray(case1)

const testTree = TreeNode.fromArray(case2)
//console.log(testTree)
testTree.lowestCommonAncestor(5, 8)

// const startTree = TreeNode.fromArray(case1)
// startTree.insert(8)
// console.log(startTree)

// startTree.invertInPlace()
// console.log(startTree)
// startTree.printPreOrder()
// console.log(tree2.right.right.data)
// console.log(tree2)


// tree2.contains(9)

// tree2.printInOrder()
// startTree.printPreOrder()

// const invertedTree = TreeNode.fromArrayInverted(case1)
// invertedTree.printPreOrder()

// invertedTree.printPreOrder()

// const invertedTree = new TreeNode(4)

// invertedTree.insertInvert(4)
// invertedTree.insertInvert(2)
// invertedTree.insertInvert(7)
// invertedTree.insertInvert(1)
// invertedTree.insertInvert(3)
// invertedTree.insertInvert(6)
// invertedTree.insertInvert(9)

// console.log(invertedTree)

