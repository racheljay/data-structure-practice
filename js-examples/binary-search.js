function binarySearchRecursive(arr, target, left, right) {
    if (left > right) {
        return false;
    }
    let mid = Math.round((left + right) / 2)
    if (arr[mid] === target) {
        return true;
    } else if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, left, mid - 1)
    } else {
        return binarySearchRecursive(arr, target, mid + 1, right)
    }
}

function binarySearchIterative(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (arr[mid] === target) {
            console.log(mid)
            return true
        } else if (target < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false
}

const array = [2, 5]

console.log(binarySearchIterative(array, 5))

// console.log(binarySearchRecursive(array, 5, 0, array.length - 1 ))