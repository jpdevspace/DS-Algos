// Returns a new array
const moveZeroes = (nums: number[]): number[] => {
  let ans = new Array(nums.length).fill(0);
  let trackIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ans[trackIndex] = nums[i];
      trackIndex++;
    }
  }

  return ans;
}

// Changes the array in place
const moveZeroesInPlace = (nums: number[]): void => {
  let trackIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const tmp = nums[i];
      nums[i] = 0;
      nums[trackIndex] = tmp;
      trackIndex++;
    }
  }

  console.log('Nums >>> ', nums);
}

const arr1 = [0,1,0,3,12];
const arr2 = [0];
const arr3 = [1];

console.log('Returning a new array');
console.log('Arr1 > ', moveZeroes(arr1));
console.log('Arr2 > ', moveZeroes(arr2));
console.log('\n==================\n');
console.log('Changing the array in place');
moveZeroesInPlace(arr1);
moveZeroesInPlace(arr2);
moveZeroesInPlace(arr3);