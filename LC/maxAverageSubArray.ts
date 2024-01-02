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


const nums1 = [1,12,-5,-6,50,3];
const k1 = 4;

const nums2 = [5];
const k2 = 1;

const nums3 = [-1];
const k3 = 1;

console.log('findMaxAverage (1) >>> ', findMaxAverage(nums1, k1));
console.log('findMaxAverage (2) >>> ', findMaxAverage(nums2, k2));
console.log('findMaxAverage (3) >>> ', findMaxAverage(nums3, k3));

