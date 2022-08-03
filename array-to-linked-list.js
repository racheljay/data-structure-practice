// take an array and convert it to a linked list


function toLinkedList (arr) {

    function Node(data) {
        this.data = data
        this.next = null
    }

    // let head = null

    function List() {
        this.head = null
    }

 
    List.prototype.append = function(data) {
        // let node = new Node(data)
        if(this.head === null) {
            this.head = new Node(data)
            return
        }
        let current = this.head
        while (current.next != null) {
            current = current.next
        }
        current.next = new Node(data)
    }

    let list = new List
    
    for(let num of arr) {
        list.append(num)
        
    }
console.log(list.head)

}


const array = [34, 68, 24, 89, 5, 77]
toLinkedList(array)