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
 let a=[];
 let b=[];
 let c=[];
var addTwoNumbers = function(l1, l2) {
    while(l1){
        a.push(l1.val);
        l1=l1.next
    }
    while(l2){
        b.push(l2.val);
        l2=l2.next
    }
    let carry=0;
    let sum=0;
    while (a.length > 0 || b.length > 0 || carry>0) {
        let f = a.length > 0 ? a.pop() : 0;
        let s = b.length > 0 ? b.pop() : 0;
        
        sum = f + s + carry;
        c.push(sum % 10);
        carry = sum > 9 ? 1 : 0;
    }
    let dummyHead = new ListNode(); 
    let currentNode = dummyHead; 

    while (c.length > 0) {
        currentNode.next = new ListNode(c.pop());
        currentNode = currentNode.next;
    }

    return dummyHead.next;
};
