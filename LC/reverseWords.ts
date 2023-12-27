const reverseWords = (str: string): string => {
  let word = [];
  let res = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar: string = str[i];
    const prevChar: string = str[i-1] || ' ';

    if (currentChar !== ' ') { word.push(currentChar) }
    else if (currentChar === ' ' && prevChar !== ' ') {
      res.push(word.join(''));
      word = [];
    }
    console.log('word >> ', word);
    console.log('res >>> ', res);
  }

  if (word.length) { res.push(word.join('')) }
  
  return res.reverse().join(' ');
}

const reverseWords2 = (s: string): string => {
  return s.split(' ').filter(el => el !== '').reverse().join(' ');
}

const w1 = 'hello world';
const w2 = '   hello  world ';
const w3 = '  hello world  ';
const w4 = 'the sky is blue';
console.log('w1 >', reverseWords2(w1));
console.log('w2 >', reverseWords2(w2));
console.log('w3 >', reverseWords2(w3));
console.log('w4 >', reverseWords2(w4));