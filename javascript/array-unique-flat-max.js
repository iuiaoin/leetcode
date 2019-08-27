// 数组去重、扁平、最值

/* 去重 */

// 开辟外部存储空间用于标识元素是否出现过
function unique(arr) {
  let container = {};
  return arr.filter((item) => {
    if(container[item]) return false;
    container[item] = true;
    return true;
  })
}

// indexOf + filter
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Set
function unique(arr) {
  return arr.from(new Set(arr));
}

function unique(arr) {
  return [...new Set(arr)];
}

// 排序，通过比较相邻数字是否重复，将排序后的数组去重
function unique(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(i < 1 || arr[i] !== arr[i - 1]) res.push(arr[i]);
  }
  return res;
}

// indexOf + lastIndexOf
function unique(arr) {
  return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
}

/* 扁平 */

function flat(arr) {
  if(!Array.isArray(arr)) return arr;
  return arr.reduce((pre, cur) => {
    pre = pre.concat(flat(cur));
    return pre;
  }, [])
}

// 根据指定深度扁平数组
function flatByDeep(arr, deep) {
  if(!Array.isArray(arr) || deep < 1) return arr;
  return arr.reduce((pre, cur) => {
    pre = pre.concat(flatByDeep(cur, deep - 1));
    return pre;
  }, [])
}

/* 最值 */
arr.reduce((pre, cur) => Math.max(pre, cur));

Math.max(...arr);
Math.max.apply(null, arr);

// reduce实现map
Array.prototype.map = function(handle) {
  return this.reduce((pre, cur, index, arr) => {
    pre.push(handle(cur, index, arr));
    return pre;
  }, []);
}

// reduce实现filter
Array.prototype.filter = function(handle) {
  return this.reduce((pre, cur, index, arr) => {
    if(handle(cur, index, arr)) pre.push(cur);
    return pre;
  }, []);
}