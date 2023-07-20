let carry = 0;

let addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2 && carry === 0) {
        return null;
    }
    
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let nextL1 = l1 ? l1.next : null;
    let nextL2 = l2 ? l2.next : null;
    
    let sum = x + y + carry;

    carry = Math.floor(sum/10);
 
        
    return {
        val: sum%10,
        next: addTwoNumbers(nextL1, nextL2)
    };
};
