/**
 * Observer 观察data,监听其属性的读取与变化
 */
function Observer(data, events, parentObserver, parentKey) {
  this.data = data; //存下当前data
  this.events = events || {}; //存下所有事件
  this.parentObserver = parentObserver ||null; // 如果深层，存下上一级Observer
  this.parentKey = parentKey || ''; // 如果深层，存下上一级的key
  this.defineAllData(data, this.events);
}


/**
 * 递归修改属性
 */
Observer.prototype.defineAllData = function(obj, events) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) { //可枚举属性
        if (typeof obj[key] === 'object') { //这个key是obj，递归，往key加get、set
          new Observer(obj[key], events, this, key);
        }
        this.defineGetSet(key, obj[key], events); //对该obj的key加set、set
      }
    }
  }
  /**
   * 修改属性加get、set，监听其属性的读取与变化
   */
Observer.prototype.defineGetSet = function(key, val, events) {
  var self = this;
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      console.log('你访问了', key);
      return val;
    },
    set: function(newVal) {
      console.log('你设置了', key, ',新的值为', newVal);
      if (newVal !== val) {
        val = newVal;
        var parentObserver = self.parentObserver;
        var parentKey = self.parentKey;
        while (parentObserver) { // 循环寻找上级触发事件
          self.$emit(parentKey, newVal);
          parentKey = parentObserver.parentKey;
           console.log(parentObserver);
          parentObserver = parentObserver.parentObserver;
         
        }
        self.$emit(key, newVal); //触发当前key事件
      }
      if (typeof newVal === 'object') { //这个key是obj，递归，往key加get、set
        return new Observer(newVal, events, this, key);
      }
    }
  })
}

/**
 * watch key放入事件数组
 */
Observer.prototype.$watch = function(key, listener) {
  if (!this.events[key]) {
    this.events[key] = [];
  }
  this.events[key].push(listener);
}

/**
 * emit 触发事件
 */
Observer.prototype.$emit = function() {
  var key = [].shift.call(arguments);
  var data = [].slice.call(arguments);
  if (!this.events[key] || this.events[key].length < 1) {
    return;
  }
  this.events[key].forEach(function(listener) {
    listener(data || {});
  })
}


/**
 * 代码测试
 */

/**
 * 代码测试
 */

let app2 = new Observer({
  user:{
    name: {
    firstName: 'shaofeng',
    lastName: 'liang',
}
  }
}
);

app2.$watch('name', function(newName) {
  console.log('我的姓名发生了变化，可能是姓氏变了，也可能是名字变了,有可能深层的东西变了。')
});
app2.$watch('firstName', function(newName) {
  console.log('名字变了。')
});
app2.$watch('lastName', function(newName) {
  console.log('姓氏变了。')
});

app2.data.user.name.firstName = 'hahaha';
