const findMaxAverage = (nums: number[], k: number): number => {
  let maxAverage = Number.NEGATIVE_INFINITY;
  let maxLeftBound = nums.length - k;

  for (let i = 0; i <= maxLeftBound; i++) {
    let sum = 0;

    for (let j = 0; j < k; j++) {
      sum += nums[i+j];
    }

    if ((sum / k) > maxAverage) { maxAverage = (sum / k) }
  }

  return maxAverage;
}


const findMaxAverage2 = (nums: number[], k: number): number => {
  let sum = 0;
  let maxAverage = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  
  maxAverage = sum / k;
  console.log('maxAverage >>> ',maxAverage )
  for (let j = 1; j <= nums.length - k; j++) {
    const newSum = sum - nums[j-1] + nums[j+k-1];
    console.log('sum >>>', sum);
    console.log('nums[j-1] >>> ', nums[j-1]);
    console.log('nums[j+k-1] >>> ', nums[j+k-1]);
    console.log('newSum >>>', newSum);
    if ((newSum / k) > maxAverage) {
      maxAverage = (newSum / k);
    }
  }

  return maxAverage;
}

const nums1 = [1,12,-5,-6,50,3];
const k1 = 4;

const nums2 = [5];
const k2 = 1;

const nums3 = [-1];
const k3 = 1;

const nums4 = [0,1,1,3,3];

const nums5 = [4,2,1,3,3];
const k5 = 2;

// console.log('findMaxAverage (1) >>> ', findMaxAverage(nums1, k1));
// console.log('findMaxAverage (2) >>> ', findMaxAverage(nums2, k2));
// console.log('findMaxAverage (3) >>> ', findMaxAverage(nums3, k3));
// console.log('findMaxAverage (4) >>> ', findMaxAverage(nums4, k1));
// console.log('findMaxAverage (5) >>> ', findMaxAverage(nums5, k5));

// console.log('findMaxAverage2 (1) >>> ', findMaxAverage2(nums1, k1));
// console.log('findMaxAverage2 (2) >>> ', findMaxAverage2(nums2, k2));
// console.log('findMaxAverage2 (3) >>> ', findMaxAverage2(nums3, k3));
// console.log('findMaxAverage2 (4) >>> ', findMaxAverage2(nums4, k1));
console.log('\n\nfindMaxAverage2 (5) >>> ', findMaxAverage2(nums5, k5), '\n\n');