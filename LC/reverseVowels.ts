const reverseVowels = (s: string): string => {
  const arr = s.split('');
  const vowelMap: { [key: string]: boolean } = { a: true, e: true, i: true, o: true, u: true};

  let vowels = arr.filter((c: string) => vowelMap[c.toLowerCase()]);
  
  for (let i = 0; i < s.length && vowels.length > 0; i++) {
    const char = s[i].toLowerCase();

    if (vowelMap[char]) { arr[i] = vowels.pop() || '' }    
  }

  return arr.join('');
};

console.log('reverseVowels >>> hEllo ', reverseVowels('hEllo'))