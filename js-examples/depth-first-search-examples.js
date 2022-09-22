class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const find_sum_of_path_numbers = function (root) {
    // TODO: Write your code here

    // const sum = 0
    const buildNum = []
    const bigArray = []
    return recurse(root, buildNum, bigArray)
}

const recurse = (root, currentNum, bigArray) => {


    if (root === null) {
        return
    }
    // let total = 0

    currentNum.push(root.value)

    if (root.val !== null && root.left === null && root.right === null) {
        let sum = parseInt(currentNum.join(""))
        console.log(sum)
        bigArray.push(sum)
    } else {
        recurse(root.left, currentNum, bigArray)
        recurse(root.right, currentNum, bigArray)
    }

    currentNum.pop()
    // console.log({sum})
    console.log("big array", bigArray)
    return bigArray
}






var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)




/* given an array of numbers, find if their sequence is in the binary tree */



const find_path = function (root, sequence) {
    // TODO: Write your code here

    const recurse = (currentNode, index) => {
        // currentNode !== null && console.log({index}, currentNode.value)
        if (currentNode === null) {
            return
        }

        if (currentNode.value !== sequence[index]) {
            return false
        }

        if (currentNode.value === sequence[index] && currentNode.left === null && currentNode.right === null) {
            return true
        }

        return recurse(currentNode.left, index + 1) || recurse(currentNode.right, index + 1)

    }

    return recurse(root, 0)
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)

/*
 counth paths for a sum.

 Given a binary tree and a number ‘S’, 
 find all paths in the tree such that the
  sum of all the node values of each path equals ‘S’.
   Please note that the paths can start or end at any node 
   but all paths must follow direction from parent to child (top to bottom).

 */

const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function count_paths(root, S) {
    return count_paths_recursive(root, S, new Deque());
}

function count_paths_recursive(currentNode, S, currentPath) {
    if (currentNode === null) {
        return 0;
    }

    // add the current node to the path
    currentPath.push(currentNode.val);
    let pathCount = 0,
        pathSum = 0;
    // find the sums of all sub-paths in the current path list
    for (i = currentPath.length - 1; i >= 0; i--) {
        pathSum += currentPath[i];
        // if the sum of any sub-path is equal to 'S' we increment our path count.
        if (pathSum === S) {
            pathCount += 1;
        }
    }
    // traverse the left sub-tree
    pathCount += count_paths_recursive(currentNode.left, S, currentPath);
    // traverse the right sub-tree
    pathCount += count_paths_recursive(currentNode.right, S, currentPath);

    // remove the current node from the path to backtrack
    // we need to remove the current node while we are going up the recursive call stack
    currentPath.pop();
    return pathCount;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);


/**
 * A better solution for the above ^^
 */

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function count_paths(root, targetSum) {
    // A map that stores the number of times a prefix sum has occurred so far.
    const map = new Map();
  
    return count_paths_prefix_sum(root, targetSum, map, 0);
  }
  
  function count_paths_prefix_sum(node, targetSum, map, currentPathSum) {
    if (!node) return 0;
  
    // The number of paths that have the required sum.
    let pathCount = 0;
  
    // 'currentPathSum' is the prefix sum, i.e., sum of all node values from root to current node.
    currentPathSum += node.val;
  
    // This is the base case. If the current sum is equal to the target sum, we have found a path from root to
    // the current node having the required sum. Hence, we increment the path count by 1.
    if (targetSum === currentPathSum) pathCount++;
  
    //'currentPathSum' is the path sum from root to the current node. If within this path, there is a
    // valid solution, then there must be an 'oldPathSum' such that:
    // => currentPathSum - oldPathSum = targetSum
    // => currentPathSum - targetSum = oldPathSum
    // Hence, we can search such an 'oldPathSum' in the map from the key 'currentPathSum - targetSum'.
    if (map.has(currentPathSum - targetSum))
      pathCount += map.get(currentPathSum - targetSum);
  
    // This is the key step in the algorithm. We are storing the number of times the prefix sum
    // `currentPathSum` has occurred so far.
    map.set(currentPathSum, map.get(currentPathSum) + 1 || 1);
  
    // Counting the number of paths from the left and right subtrees.
    pathCount += count_paths_prefix_sum(node.left,targetSum, map, currentPathSum);
    pathCount += count_paths_prefix_sum(node.right, targetSum, map, currentPathSum);
  
    // Removing the current path sum from the map for backtracking.
    // 'currentPathSum' is the prefix sum up to the current node. When we go back (i.e., backtrack), then
    // the current node is no more a part of the path, hence, we should remove its prefix sum from the map.
    map.set(currentPathSum, map.get(currentPathSum) - 1);
  
    return pathCount;
  }
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Tree has paths: ${count_paths(root, 11)}`);
  