// 手动实现es5继承

/* Man继承pepole */
function Peple() {
  this.type = 'people';
}

People.prototype.eat = function() {
  console.log('吃东西啦');
}

function Man(name) {
  People.call(this);
  this.name = name;
  this.color = 'black';
}

function inherit(obj, proto) {
  obj.super = proto;
  obj.prototype = Object.create(proto.prototype, {
    constructor: {
      value: obj,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
}

inherit(Man, People);
