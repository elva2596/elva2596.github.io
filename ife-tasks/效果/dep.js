// 定义一个Dep，用来维护一系列观察者，方便添加观察者
function Dep(){
	this.subs = [] //存放订阅者的数组
}
var s = Dep.prototype;
s.addSub = function (sub){
	this.subs.push(sub)
}
s.notify = function (){
	// 一旦调用了set就触发notify,然后遍历每个观察者，并触发他们相应的update方法
	this.subs.forEach(function (sub){
		sub.update();
	})
}
Dep.target = null;//定义一个全局变量，用来判断是否是watcher调用了getter