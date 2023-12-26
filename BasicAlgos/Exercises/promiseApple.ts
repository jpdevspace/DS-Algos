// Convert the following function into a promise version
function returnApple(callback: Function): any {
  setTimeout(() => {
    callback('🍎');
  }, 500);
}

const returnPromiseApple = (cb: Function) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(cb), 1000);
  })

  return p;
}

const myCb = (x: any) => console.log('Here it is: ', x);

returnPromiseApple(myCb).then(d => console.log('I am out: ', d));



const firstP = (str: string) => {
  console.log('Going in');
  setTimeout(() => console.log('Hello'), 3000);
  console.log('I am out');

  const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('I have been resolved!'), 5000);
  });

  return p;
}

// const main = () => {
//   const res = firstP('There');
//   return res.then(d => console.log('I have been through hell and back with >>> ', d));
// }
const main = async () => {
  const res = await firstP('There');
  console.log('I have been through so much >>>', res);
}


console.log('Res >>> ', main());


