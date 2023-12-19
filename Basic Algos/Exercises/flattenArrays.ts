const flattenArrays = (arr: Array<number | string | Array<any>>): Array<number|string> => {
  const newArr: Array<number|string> = [];

  const fArr = (arr: any): void => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) { fArr(arr[i]) }
      else {
        newArr.push(arr[i]);
      }
    }
  }

  fArr(arr);
  
  return newArr;
}

console.log(flattenArrays([1,2,[3,4,[5,6,7],8],9,10]));

export {}