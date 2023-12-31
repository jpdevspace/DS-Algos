const maxArea = (height: number[]): number => {
  let maxArea = 0;
  let leftPointer = 0;
  let rightPointer = height.length;

  while (leftPointer < rightPointer) {
    const base = rightPointer - (leftPointer + 1);
    const leftBar = height[leftPointer];
    const rightBar = height[rightPointer - 1];
    let shortestBar;
    
    if (leftBar < rightBar) {
      shortestBar = leftBar;
      leftPointer++;
    } else {
      shortestBar = rightBar
      rightPointer--;
    }
    
    const area = base * shortestBar;

    if (area > maxArea) { maxArea = area }
  }

  return maxArea;
}

const h1 = [1,8,6,2,5,4,8,3,7];
const h2 = [1, 1];

console.log('maxArea 1 > ', maxArea(h1));
console.log('maxArea 2 > ', maxArea(h2));