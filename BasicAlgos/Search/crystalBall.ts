/**
 * Two crystal balls thrown from a building
 * find the max high at wich they break
 * 
 * The building could be represented like the following array
 * [false, false, false, true, true, true]
 * meaning, the balls start breaking after thrown from the 3 floor
 * assuming we count from the ground floor (0)
 */

const breakBalls = (building: boolean[]): number => {
  const jumpAmount = Math.floor(Math.sqrt(building.length));
  
  let i = jumpAmount;

  for (i; i < building.length; i += jumpAmount) {
    if (building[i]) { break } // if ball breaks
  }

  // Go back to the last safe point
  i -= jumpAmount;

  // Start jumping from the last safe point 1 floor at a time
  for (let j = i; j <= i + jumpAmount && j <= building.length; j++) {
    if (building[j]) { return j }
  }

  return  -1;
}

const s1 = [false, false, false, true, true, true];
const s2 = [true, true, true, true, true, true];
const s3 = [false, false, false, false, false, true];
const s4 = [false, false, false, false, false, false];


console.log("S1 >>> ", breakBalls(s1));
console.log("S2 >>> ", breakBalls(s2));
console.log("S3 >>> ", breakBalls(s3));
console.log("S4 >>> ", breakBalls(s4));

export {}