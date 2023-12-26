/**
 * Finds an element in an sorted array
 * using the Binary Search algorithm
 * returns true or false
 * Uses recursion
 */

const binarySearch = (arr: number[], elem: number): boolean => {
  const middleIndex: number = Math.floor((arr.length - 1) / 2);

  if (arr[middleIndex] === elem) { return true }

  if (elem < arr[middleIndex]) {
    // go left
    binarySearch(arr.slice(0, middleIndex), elem);
  }
  
  if (elem > arr[middleIndex]) {
    // go right
    binarySearch(arr.slice(middleIndex + 1), elem);
  }

  return false;
}

/**
 * Finds an element in an sorted array
 * using the Binary Search algorithm
 * returns the index if found or -1 if not found
 * Doesn't use recursion but a do... while loop
 * 
 */
const binarySearch2 = (haystack: number[], needle: number): number => {
  let lo: number = 0;
  let hi: number = haystack.length;

  do {
    const middleIndex: number = Math.floor(lo + ((hi - lo) / 2));
    const value: number = haystack[middleIndex];

    if (value === needle) { return middleIndex }
    
    if (needle < value) {
      // go left
      hi = middleIndex - 1;
    } else {
      // go right
      lo = middleIndex + 1;
    }
  } while (lo <= hi);
  
  return -1;

}

// const ex = binarySearch([1, 5, 6, 8, 9, 10, 20, 32, 99], 33);
// console.log("Example >>> ", ex);

const ex = binarySearch2([1, 5, 6, 8, 9, 10, 20, 32, 99], 99);
console.log("The number you're looking for is at index >>> ", ex);

export {}