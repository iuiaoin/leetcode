// 手动实现instanceof

/**
 * a instanceof Object
 * 判断Object.prototype是否在a的原型链上
 */
function instanceOf(target, origin) {
  const proto = target.__proto__;
  if(!proto) return false;
  if(proto === origin.prototype) return true;
  return instanceOf(proto, origin);
}