// TODO: how do I know when to stop? when I go through one pass and no swaps are performed

const bubbleSort = (arr: number[]): number[] => {  
  // Loop to help me keep track of how many times I have to go over the array
  for (let i = 0; i < arr.length; i++) {
    let swaps = 0;

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        swaps++;
        // Swap the numbers
        const tmp = arr[j+1]; // hold that value for a sec please!
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }

    }
    
    if (swaps === 0) { break }
  }

  return arr;
}

const arr = [4, 6, 7, 1, 4, 99, 23, 5];
const arr2 = [5, 1, 2, 3, 4];

console.log(bubbleSort(arr));
console.log(bubbleSort(arr2));
export {};