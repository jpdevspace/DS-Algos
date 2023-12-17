/**
 * Finds an element in an unsorted array
 * using the Linear Search algorithm
 * returns the index if found or -1 if not found
 * 
 */

const linearSearch = (arr: number[], elem: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) { return i }
  }

  return -1;
}

console.log("Example >>> ", linearSearch([1, 5, 6, 3, 8, 9, 0], 17));