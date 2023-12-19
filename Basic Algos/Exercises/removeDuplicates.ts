// Example removeDuplicates("this is is is a test test") => "this is a test"

const removeDuplicates = (str: string): string => {
  const arr = str.split(" ");
  const set = new Set(arr);
  const newString = [...set].join(" ");

  return newString;
}

removeDuplicates("this is is is a test test")

export {}