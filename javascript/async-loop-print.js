// 异步循环打印

/**
 * 使用promise + async await 实现异步循环打印
 */
function sleep(time, i) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(i);
    }, time);
  })
}

async function start(step) {
  for(let i = 0; i < step; i++) {
    let result = await sleep(1000, i);
    console.log(result);
  }
}

start(6);