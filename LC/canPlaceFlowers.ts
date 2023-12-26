const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  let newFlowers = 0;

  for (let i = 0; i <= flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
          if (flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1) {
              flowerbed[i] = 1; // Plant flower and update the flowerbed array
              newFlowers++;
          }
      }

      if (newFlowers >= n) { break }
  }

  return newFlowers >= n;
};

const fb1 = [1,0,0,0,1];
const fb2 = [1,0,0,0,0,1];

console.log('canPlaceFlowers. Expected: True >>> ', canPlaceFlowers(fb1, 1));
console.log('canPlaceFlowers 2, Expected: False >>> ', canPlaceFlowers(fb1, 2));
console.log('canPlaceFlowers 3, Expected: True >>> ', canPlaceFlowers(fb2, 1));
console.log('canPlaceFlowers 4, Expected: False >>> ', canPlaceFlowers(fb1, 2));