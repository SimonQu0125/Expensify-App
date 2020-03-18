const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('This is my resolved data');
    reject('Someything went wrong!');
  }, 5000 );
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error)
});

console.log('after');