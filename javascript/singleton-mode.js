// 单例模式

/**
 * 在合适的时候创建对象，并且只创建唯一的一个
 */
function Singleton(name) {
  this.name = name;
}
Singleton.prototype.getName = function() {
  console.log(this.name);
}

Singleton.getInstance = (function() {
  let instance;
  return function(name) {
    if(!instance) {
      instance = new Singleton(name);
    }
    return instance;
  }
})();

let a = Singleton.getInstance('Declan');
let b = Singleton.getInstance('Declan2');

console.log(a === b); // true
