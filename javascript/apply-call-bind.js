/**
 * call
 * 1. 判断this防止直接调用
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

/**
 * apply: 与call类似，参数为数组
 */
Function.prototype.apply = function(context = window, args) {
  if(this === Function.prototype) return void 0;
  const fn = Symbol();
  context[fn] = this;
  let result;
  if(Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    result = context[fn]();
  }
  delete context[fn];
  return result;
}

/**
 * bind
 * 1. 判断this防止直接调用
 * 2. 判断若作为构造函数使用，则返回 new 之后的新对象
 * 3. 返回在context上下文上执行的函数，拼接参数
 */
Function.prototype.bind = function(context, ...args1) {
  if(this === Function.prototype) throw new TypeError('error');
  const _this = this;
  return function F(...args2) {
    if(this instanceof F) return new _this(...args1, ...args2);
    return _this.apply(context, args1.concat(args2));
  }
}