var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let right = 0;
    let sum = 0;
    let maxFrequency = 0;

    while (right < nums.length) {
        sum += nums[right];

        while ((nums[right] * (right - left + 1)) > sum + k) {
            sum -= nums[left];
            left++;
        }

        maxFrequency = Math.max(maxFrequency, right - left + 1);
        right++;
    }

    return maxFrequency;
};
