var eraseOverlapIntervals = function (intervals) {
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let end = Number.MIN_SAFE_INTEGER;
    let count = 0;
      console.log(intervals)
    intervals.forEach((interval) => {
      if (interval[0] >= end) {
        end = interval[1];
      } else {
        count++;
      }
    });
  
    return count;
  };