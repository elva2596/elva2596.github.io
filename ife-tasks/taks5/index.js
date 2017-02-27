// 发布者
function Observer(data){
	this.data = data;
	this.walk(data)
}
// 将原型赋值给一个变量
var p = Observer.prototype;

// 遍历对象所有属性，包括子属性
p.walk = function (obj){
	var _this = this;
	Object.keys(obj).forEach(function (key){
		_this.observer(obj[key])
		_this.convert(key,obj[key])
	})
}

// 绑定getter 和setter
p.convert = function (key,val){
	//每次set函数调用的时候，触发notify
	var dep = new Dep()  //发布给订阅者
	var _this = this;
	Object.defineProperty(this.data,key,{
		configurable:true,
		enumarable:true,
		get:function (){
			console.log("你访问了"+key);

			// Watcher的实例调用了getter
			if(Dep.target){
				dep.addSub(Dep.target)
			}

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
			dep.notify()//发布者发布到订阅中心
		}
	})
}
// 判断属性值是否是一个对象
p.observer = function (val){
	if(typeof val ==="object"){
		 new Observer(val)
	}
}
// 定义一个watcher
p.$watcher = function (exp,cb){
	new Watcher(this,exp,cb)
}

let data = {
	user:{
		name:'dailu',
		age:25
	}
};
var app = new Observer(data);
 app.$watcher('age', function(age) {
         console.log(`我的年纪变了，现在已经是：${age}岁了`)
 });
app.data.user.age = 100;
// console.log(app.data.name);