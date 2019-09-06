// 防抖

/* 定义：将连续的调用归为一个 */

/**
 * @param {*} event 
 * @param {*} time 
 */
function debounce(event, time) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    setTimeout(() => {
      event.apply(this, args);
    }, time);
  }
}