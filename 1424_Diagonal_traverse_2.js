// group elements by the sum of row and column indice
var findDiagonalOrder = function(nums) {
    let output = {};

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < nums[i].length; j++) {
            let diagonal = i + j;
            if (!output[diagonal]) {
                output[diagonal] = [];
            }
            output[diagonal].push(nums[i][j]);
        }
    }

    let ans = [];
    let curr = 0;

    while (output[curr]) {
        ans.push(...output[curr]);
        curr++;
    }

    return ans;
};

