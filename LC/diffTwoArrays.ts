const diffTwoArrays = (nums1: number[], nums2: number[]): number[][] => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const ans1 = [...set1].filter(n => !set2.has(n));
  const ans2 = [...set2].filter(n => !set1.has(n));

  return [ ans1, ans2 ];
}

const n1 = [1,2,3];
const n2 = [2,4,6];

const m1 = [1,2,3,3];
const m2 = [1,1,2,2];

console.log(diffTwoArrays(n1, n2));
console.log(diffTwoArrays(m1, m2));