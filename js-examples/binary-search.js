function binarySearchRecursive(arr, target, left, right) {
    if (left < right) {
        return false;
    }

    mid = (left + right) / 2
    if (arr[mid] === x) {
        return true;
    } else if (x < arr[mid]) {
        return binarySearchRecursive(arr, target, left, mid - 1)
    } else {
        return binarySearchRecursive(arr, target, mid + 1, right)
    }
}

function binarySearchIterative(arr, target) {
    left = 0
    right = arr.length - 1
    while (left <= right) {
        mid = (right + left) / 2
        if (arr[mid] === target) {
            return true
        } else if (x < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
}