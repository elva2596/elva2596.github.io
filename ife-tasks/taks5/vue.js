

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
	//每次set函数调用的时候，触发notify
	var dep = new Dep()  //处于闭包当中
	var _this = this;
	Object.defineProperty(this.data,key,{
		configurable:true,
		enumarable:true,
		get:function (){
			console.log("你访问了"+key);
			return val
		},
		set:function (newVal){
			// 如果新设置的值和原来相等则不重新赋值
			if(newVal==val){
				return 
			}
			console.log("你设置了"+key);
			console.log("新的"+key+"="+newVal);
			val = newVal
			// 如果设置的新值是一个对象，则递归它，加上set/get
			_this.observer(newVal)
			dep.notify()
		}
	})
}

p.observer = function (val){
	if(typeof val ==="object"){
		return new Observer(val)
	}
	return 
}

let data = {
    data:{
    	user: {
        name: "hello world",
        age: "24"
    },
    address: {
        city: "beijing"
    }
    }
};
var app = new Observer(data);
// console.log(app.data.user.name);
