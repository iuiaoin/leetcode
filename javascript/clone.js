// 浅拷贝和深拷贝

/* 浅拷贝 */
arr.slice();
arr.concat();
Object.assign({}, obj);

/* 深拷贝 */
JSON.parse(JSON.stringify(obj));

/**
 * 判断是数组，则对每一项clone，对象同理，其他类型直接返回
 * @param {*} target 
 */
function clone(target) {
  if (typeof target !== 'object' || !target) return target;
  let copy = {};
  if (Array.isArray(target)) copy = [];
  for (let key in target) {
    copy[key] = clone(target[key]);
  }
  return copy;
}

/**
 * 存在循环引用，存储曾经出现过的对象
 * @param {*} target 
 */
function clone(target) {
  const map = new Map();

  function _clone(target) {
    if (typeof target !== 'object' || !target) return target;
    if(map.has(target)) return map.get(target);
    let copy = {};
    if (Array.isArray(target)) copy = [];
    map.set(target, copy);
    for (let key in target) {
      copy[key] = _clone(target[key]);
    }
    return copy;
  }

  return _clone(target);
}

/**
 * 函数的拷贝
 * @param {*} target 
 */
function clone(target) {
  if(typeof target === 'function') return eval(target.toString());
  if(typeof target !== 'object' || !target) return target;
  let copy = {};
  if(Array.isArray(target)) copy = [];
  for(let key in target) {
    copy[key] = clone(target);
  } 
  return copy;
}