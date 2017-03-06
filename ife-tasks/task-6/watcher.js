// Watcher的实例就是订阅者
function Watcher(vm,exp,cb){
	this.cb = cb;
	this.vm = vm;
	this.exp = exp
	this.value = this.get()//更新前的值
}
var w = Watcher.prototype;

// 订阅者的更新方法
w.update = function (){
	var value = this.get() //这里是更新后的值
	if(value!==this.value){
		this.value = value //用新值覆盖旧值
		this.cb.call(this.vm,value)
	}
}
// 通过Watcher的实例调用了getter
w.get = function (){
	Dep.target = this//表明是watcher调用了getter
	return this.vm.data.user.name.names[this.exp] //这里会调用get方法
}
w.addDep = function (dep){
	dep.addSub(this) //this值watcher
}
w.walkExp = function (obj){
	return Object.keys(this.vm.data)
}
