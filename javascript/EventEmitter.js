// EventEmitter

/**
 * on(event, listener): 为指定事件添加一个监听器
 * once(event, listener): 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器
 * off(event, listener): 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器
 * emit(event, [arg1], [arg2], [...]): 按监听器的顺序执行执行每个监听器
 */
class Emitter {
  constructor() {
    this.__events__ = {};
  }
 
  on(type, fn) {
    if (!this.__events__[type]) this.__events__[type] = [];
    this.__events__[type].push(fn);
  }

  once(type, fn) {
    const onceFn = (...args) => {
      fn.apply(args);
      this.off(type, onceFn);
    };
    this.on(type, onceFn);
  }
 
  emit(type, ...args ) {
    const listener = this.__events__[type];
    if (Array.isArray(listener)) {
      listener.forEach((fn) => {
        fn.apply(this, args);
      })
    }
  }

  off(type, fn) {
    const listener = this.__events__[type];
    if(Array.isArray(listener)) {
      this.__events__[type] = listener.filter(l => l !== fn);
    }
  }
}