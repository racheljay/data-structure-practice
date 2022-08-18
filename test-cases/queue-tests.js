import {Queue} from "../js-examples/queue.js"

let queue = new Queue()

queue.push(2)
queue.push(5)
queue.push(12)
queue.push(13)


queue.pop()
queue.pop()

queue.pop()
queue.pop()
// queue.pop()


// console.log("head:", queue.head, "tail:", queue.tail)
// console.log(queue.head)

// queue.stringify()