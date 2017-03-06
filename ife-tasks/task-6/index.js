// 发布者，对data做监听，提供了某个数据项变化的能力
function Observer(data,preOb,objKey){
	this.dep  = new Dep()
	this.data = data;
	this.preOb = preOb||null
	this.objKey = objKey
	this.walk(data)
}
// 将原型赋值给一个变量
var p = Observer.prototype;

// 遍历对象所有属性，包括子属性
p.walk = function (obj){
	var _this = this;
	Object.keys(obj).forEach(function (key){

		_this.convert(key,obj[key])

	})
}

// 绑定getter 和setter
p.convert = function (key,val){
	//每次set函数调用的时候，触发notify
	var dep = new Dep()  //发布给订阅者,每一个属性拥有一个dep
	var _this = this;
	var child =_this.observer(val,this,key)
	// console.log(val);
	Object.defineProperty(this.data,key,{
		configurable:true,
		enumarable:true,
		get:function (){
			console.log("你访问了"+key);
			// console.log(child);
			// Watcher的实例调用了getter，将watcher加入到调度中心的数组里面

			if(Dep.target){
				dep.depend();//收集依赖
				if(child){
					child.dep.depend()
				}
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
			child = _this.observer(newVal,this,key)
			var parent = _this.preOb
			var objKey = _this.objKey
			while(parent){
				// console.log(parent);
				console.log(objKey);
				objKey = parent.objKey
				parent = parent.preOb
				
			}
			
			dep.notify()//发布者发布到订阅中心
		}
	})
}
// 判断属性值是否是一个对象,如果是再深度监听
p.observer = function (val,preOb,key){
	if(typeof val ==="object"){
		return  new Observer(val,preOb,val)
	}
}
// 定义一个watcher
p.$watcher = function (exp,cb){
	new Watcher(this,exp,cb)
}

let data = {
	user:{
		name:{
			names:{
				age:25
			}
		}
	}

};
var app = new Observer(data);
 app.$watcher('age', function(age) {
         console.log(`我的年纪变了，现在已经是：${age}岁了`)
 });
app.data.user.name.names.age =100
