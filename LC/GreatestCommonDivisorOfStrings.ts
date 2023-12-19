const divisorOfStrings = (str1: string, str2: string): string => {
  let shortestStr = '';
  let longestStr = '';
  let longestDivStr = '';
  
  if (str1.length > str2.length) {
      shortestStr = str2;
      longestStr = str1;
  } else {
      shortestStr = str1;
      longestStr = str2;
  }

  for (let i = 0; i < shortestStr.length; i++) {
    const remainderShortStr = shortestStr.length % (i+1);
    const remainderLongtStr = longestStr.length % (i+1);
    const sizeOfSubStr = i+1;

    if (remainderShortStr === 0 && remainderLongtStr === 0) { 
      const numOfShortSubStrs = shortestStr.length / sizeOfSubStr;
      const numOfLongSubStrs = longestStr.length / sizeOfSubStr;
      const subStr = shortestStr.slice(0, i+1);
      const shortSubArr: Array<string> = [];
      const longSubArr: Array<string> = [];

      for (let j = 0; j < numOfShortSubStrs; j++) {
        shortSubArr.push(subStr);
      }

      for (let j = 0; j < numOfLongSubStrs; j++) {
        longSubArr.push(subStr);
      }

      const shortSequence = shortSubArr.join('');
      const longSequence = longSubArr.join('');

      if (shortSequence === shortestStr && longSequence === longestStr) { 
        longestDivStr = subStr;
      }
    }
  }

  return longestDivStr;
};

console.log("RESULT >>>", divisorOfStrings("ABABABAB", "ABAB"));