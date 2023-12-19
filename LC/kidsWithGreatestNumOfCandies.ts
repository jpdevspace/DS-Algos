const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
  let highestNum = 0;

  // Find the highest number
  candies.forEach(q => {
      if (q >= highestNum) { highestNum = q }
  });

  // Check every entry to see if adding all the extra candies makes them 
  // the kid with the most candies.
  return candies.map(q => q + extraCandies >= highestNum);
};