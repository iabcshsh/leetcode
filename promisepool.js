
var promisePool = async function (functions, n) {
    return new Promise((resolve) => {
      let fn = 0;
      let i = 0;
      let runningPromises = 0;
  
      const executeNextPromise = () => {
        if (i < functions.length && runningPromises < n) {
          runningPromises++;
          functions[i]()
            .then(() => {
              runningPromises--;
              console.log(++fn);
              if (fn === functions.length && runningPromises === 0) {
                resolve();
              }
              executeNextPromise();
            })
            .catch((error) => {
              // handle errors here
              console.error(error);
            });
          i++;
          executeNextPromise();
        }
      };
  
      executeNextPromise();
    });
  };
  


const sleep = (t) => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400), () => sleep(500), () => sleep(400)], 1)
    .then(console.log) // After 900ms
