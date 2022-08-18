import { TreeNode } from "../js-examples/binary-tree.js"

// const myTree = new TreeNode(4)

const case1 = [4, 2, 7, 1, 3, 6, 9]

// myTree.insertArray(case1)

const tree2 = TreeNode.fromArray(case1)
// console.log(tree2.right.right.data)
// console.log(tree2)

// tree2.insert(4)
// tree2.insert(2)
// tree2.insert(8)

// tree2.contains(9)

// tree2.printInOrder()
tree2.printPreOrder()