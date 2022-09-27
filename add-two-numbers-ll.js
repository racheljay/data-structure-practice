/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let newList = new ListNode(0)
    let newCurrent = newList

    let remainder = 0

    while (l1 !== null || l2 !== null || remainder !== 0) {

        const l1Val = l1 === null ? 0 : l1.val
        const l2Val = l2 === null ? 0 : l2.val
        let newVal = l1Val + l2Val

        if (remainder > 0) {
            newVal = newVal + remainder
            remainder = 0
        }


        if (newVal >= 10) {
            newVal = newVal - 10
            remainder = 1
        }

        newCurrent.next = new ListNode(newVal)
        newCurrent = newCurrent.next

        if (l1 !== null) {
            l1 = l1.next
        }
        if (l2 !== null) {
            l2 = l2.next
        }

    }
    return newList.next


};