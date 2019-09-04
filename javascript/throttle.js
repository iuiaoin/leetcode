// 节流

/* 定义：方法在单位时间内只执行一次 */

/**
 * 时间戳实现：第一时间触发
 * @param {*} event 
 * @param {*} time 
 */
function throttle(event, time) {
  let pre = 0;
  return function(...args) {
    if(Date.now() - pre > time) {
      pre = Date.now();
      event.apply(this, args);
    }
  }
}

/**
 * 定时器实现：time后触发
 * @param {*} event 
 * @param {*} time 
 */
function throttle(event, time) {
  let timer = null;
  return function(...args) {
    if(!timer) {
      timer = setTimeout(() => {
        timer = null;
        event.apply(this, args);
      }, time);
    }
  }
}

/**
 * 结合事件戳和定时器：第一次和最后一次都触发
 * @param {*} event 
 * @param {*} time 
 */
function throttle(event, time) {
  let pre = 0,
      timer = null;
  return function(...args) {
    if(Date.now() - pre > time) {
      pre = Date.now();
      clearTimeout(timer);
      timer = null;
      event.apply(this, args);
    } else {
      timer = setTimeout(() => {
        event.apply(this, args);
      }, time);
    }
  }
}

