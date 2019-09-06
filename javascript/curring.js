// 函数柯里化

/**
 *  定义：柯里化是将 使用多个参数 的函数转化成 使用一个参数 的函数
 *  思路：使用闭包保存参数，当参数数量足够，执行函数
 */
function curring(fn, ...args) {
  if (args.length >= fn.length) return fn(...args);
  return (...args2) => curring(fn, ...args, ...args2);
}

/**
 * 应用场景：参数复用
 */
function getUrl(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}
let page1 = getUrl('http', 'www.declan.com', 'page1.html');
let page2 = getUrl('http', 'www.declan.com', 'page2.html');

/* 使用curring简化 */
const curringGetUrl = curring(getUrl, 'http', 'www.declan.com');
let page1 = curringGetUrl('page1.html1');
let page2 = curringGetUrl('page2.html2');