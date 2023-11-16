//Approach 1 Recursive generate all strings
var findDifferentBinaryString = function(nums) {
    let s=new Set(nums);
    function generate(curr){
        if(curr.length==nums.length){
            if(s.has(curr)){
                return ""
            }else{
                return curr
            }
        }
        let addZero=generate(curr+"0")
        if(addZero){
            return addZero
        }
        return generate(curr+"1")
    }
    return generate("")
};

