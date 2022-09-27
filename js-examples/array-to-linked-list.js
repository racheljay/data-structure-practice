// take an array and convert it to a linked list


function toLinkedList(arr) {

    function Node(data) {
        this.data = data
        this.next = null
    }

    const list = new Node(arr[0])
    let current = list

    for(let i = 1; i < arr.length; i++) {

        current.next = new Node(arr[i])
        current = current.next

    }
    console.log(list)
    return list

}


const array = [34, 68, 24, 89, 5, 77]
toLinkedList(array)