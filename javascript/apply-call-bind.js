/**
 * call
 * 1. 判断this是否为函数来防止直接调用
 * 2. 传入context作为执行上下文，默认值window
 * 3. Symbol作为context属性，执行完后delete
 */
Function.prototype.call = function(context = window, ...args) {
  if(this === Function.prototype) return void 0;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
}