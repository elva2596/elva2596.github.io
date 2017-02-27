

function Observer(data){
	this.data = data;
	this.walk(data)
}

var p = Observer.prototype;

// 遍历
p.walk = function (obj){
	var val,
		_this = this;
	Object.keys(obj).forEach(function (key){
		val = obj[key]
		_this.observer(val)
		_this.convert(key,val)
	})
}

// 绑定getter 和setter
p.convert = function (key,val){
	var _this = this
	Object.defineProperty(this.data,key,{
		configurable:true,
		enumarable:true,
		get:function (){
			console.log("你访问了"+key);
			return val
		},
		set:function (newVal){
			console.log("你设置了"+key);
			console.log("新的"+key+"="+newVal);
			// 如果设置的新值是一个对象，则递归它，加上set/get
			_this.observer(newVal)
			val = newVal
		}
	})
}

p.observer = function (value){
	if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}
let data = {
    user: {
        name: "hello world",
        age: "24"
    },
    address: {
        city: "beijing"
    }
};
var app = new Observer(data);
console.log(app.data.user);
