var flat = function (arr, n) {
  let re = [];
  let flatten = (nums, l) => {
    for (let j = 0; j < nums.length; j++) {
      if (Array.isArray(nums[j]) && l>0 && l<=n ) {
        flatten(nums[j], l-1);
      } else {
        re.push(nums[j]);
      }
    }
  };
  flatten(arr, n);
  return re;
};

