// 模拟实现promise

/**
 * 基础版本
 * 1. promise有3个状态pending、fulfilled、rejected，状态变化后不能再更改
 * 2. 接收一个函数executor作为参数，函数接收两个参数resolve、reject
 * 3. executor在new Promise的时候就会调用
 */
// const PENDING = 'pending',
//       FULFILLED = 'fulfilled',
//       REJECTED = 'rejected';

// function Promise1(executor) {
//   this.state = PENDING;
//   this.value = null;
//   this.reason = null;

//   const resolve = (value) => {
//     if(this.state === PENDING) {
//       this.state = FULFILLED;
//       this.value = value;
//     }
//   }

//   const reject = (reason) => {
//     if(this.state === PENDING) {
//       this.state = REJECTED;
//       this.reason = reason;
//     }
//   }

//   try {
//     executor(resolve, reject);
//   } catch(reason) {
//     reject(reason);
//   }
// }

/**
 * then 方法
 * 1. 接收两个参数onFulfilled, 和onRejected，它们分别在状态由PENDING改变为对应状态时调用
 * 2. promise可以绑定多个then方法
 * 3. 对象不是PENDING时直接调用传入的对应函数
 * 4. 对象为PENDING时，将函数推入callback数组，在resolve或者reject后再调用
 * 5. 链式调用
 * 6. 若onFulfilled或onRejected返回值为promise，则将其promise的终值作为返回
 */
const PENDING = 'pending',
      FULFILLED = 'fulfilled',
      REJECTED = 'rejected';

function Promise1(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if(this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(cb => cb());
    }
  }

  const reject = reason => {
    if(this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach(cb => cb());
    }
  }

  try {
    executor(resolve, reject);
  } catch(reason) {
    reject(reason);
  }
}

Promise1.prototype.then = function(onFulfilled, onRejected) {
  if(typeof onFulfilled !== 'function') {
    onFulfilled = function(value) {
      return value;
    }
  }

  if(typeof onRejected !== 'function') {
    onRejected = function(reason) {
      throw reason;
    }
  }

  return new Promise1((resolve, reject) => {

    function handle(res) {
      if(res && typeof res.then === 'function') {
        return res.then((value) => {
          resolve(value);
        }, (err) => {
          reject(err);
        })
      }
      try {
        resolve(res);
      } catch(reason) {
        reject(reason);
      }
    }

    switch (this.state) {
      case FULFILLED:
        handle(onFulfilled(this.value));    
        break;
      case REJECTED:
        handle(onRejected(this.reason));
        break;
      case PENDING:
        this.onFulfilledCallbacks.push(() => {
          handle(onFulfilled(this.value));
        });
        this.onRejectedCallbacks.push(() => {
          handle(onRejected(this.reason));
        });
        break;
    }
  })
}

/**
 * catch 方法
 */
Promise1.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
}

/**
 * finally 方法
 * 不管是resolve还是reject都会调用finally
 */
Promise1.prototype.finally = function (fn) {
  return this.then(value => {
    fn();
    return value;
  }, reason => {
    fn();
    throw reason;
  })
}

/**
 * Promise1.resolve
 * 用来直接生成一个处于FULFILLED状态的promise
 */
Promise1.resolve = function(value) {
  return new Promise1(resolve => {
    resolve(value);
  })
}

/**
 * Promise1.reject
 * 用来直接生成一个处于REJECTED状态的promise
 */
Promise1.reject = function(reason) {
  return new Promise1((resolve, reject) => {
    reject(reason);
  })
}

/**
 * Promise1.all
 * 当所有的promise执行完成之后，执行resolve，失败则返回第一个失败的结果并reject
 */
Promise1.all = function(arr) {
  return new Promise1((resolve, reject) => {
    if(!arr.length) return resolve([]);
    let result = [],
        index = 0;
    for(let i = 0; i < arr.length; i++) {
      arr[i].then(res => {
        result[i] = res;
        index++;
        if(index === arr.length) resolve(result);
      }, err => {
        reject(err);
      })
    }
  })
}

/**
 * Promise1.race
 * 只要有一个promise执行完成，就执行resolve或reject
 */
Promise1.race = function(arr) {
  return new Promise1((resolve, reject) => {
    if(!arr.length) return resolve();
    for(let i = 0; i < arr.length; i++) {
      arr[i].then((res) => {
        resolve(res);
      }, err => {
        reject(err);
      })
    }
  })
}