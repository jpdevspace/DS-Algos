/*
  is t a subsequence of s
  if I remove some characters (or none) from t, would I get s
  does all characters in s appear on the same order in t
*/

const isSubsequence = (s: string, t: string): boolean => {
  let targetIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[targetIndex]) {
      targetIndex++;
    }
  }

  return targetIndex === s.length;
}

const s1 = 'abc';
const t1 = 'ahbgdc';

const s2 = 'axc';
const t2 = 'ahbgdc';

console.log('isSubsequence (1) > ', isSubsequence(s1, t1));
console.log('isSubsequence (2) > ', isSubsequence(s2, t2));
