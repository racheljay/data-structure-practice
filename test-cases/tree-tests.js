import { TreeNode } from "../js-examples/binary-tree.js"

// const myTree = new TreeNode(4)

const case1 = [4, 2, 7, 1, 3, 6, 9]
const case2 = [6, 2, 8, 0, 4, 7, 9, 3, 5]
const case3 = [2]
const case4 = [1,2,2,3,3,4,4]
const case5 = [1,2,2,3,null,null,3,4,null,null,4]

// myTree.insertArray(case1)

// const testTree = TreeNode.fromArray(case2)

const singleTree = TreeNode.fromArray(case5)
console.log(singleTree)

singleTree.isBalanced()

// testTree.printPath(5)
//console.log(testTree)
// testTree.lowestCommonAncestor(2, 8)

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

