// quick sort
function quickSort(nums) {
  if(nums.length <= 1) return nums;
  let pivotIndex = nums.length  - 1 >> 1;
  let pivot = nums.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// quick sort in three
function quickSort(nums) {
  if(nums.length <= 1) return nums;
  let pivotIndex = nums.length - 1 >> 1;
  let pivot = nums[pivotIndex];
  let left = [];
  let mid = [];
  let right = [];
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < pivot) {
      left.push(nums[i]);
    } else if(nums[i] === pivot) {
      mid.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}

// merge sort
function mergeSort(nums) {
  if(nums.length <= 1) return nums;
  let mid = nums.length >> 1;
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));

  function merge(l, r) {
    let res = [];
    while(l.length && r.length) {
      if(l[0] < r[0]) {
        res.push(l.shift());
      } else {
        res.push(r.shift());
      }
    }
    return res.concat(l, r);
  }
}