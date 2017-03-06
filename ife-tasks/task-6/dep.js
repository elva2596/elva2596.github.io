// 定义一个Dep(调度中心)，用来维护一系列观察者，方便添加观察者
function Dep(){
	this.subs = [] //存放订阅者的数组
}
Dep.target = null;//定义一个全局变量，用来判断是否是watcher调用了getter
var s = Dep.prototype;
// 把订阅者都存到数组里面
s.addSub = function (sub){
	this.subs.push(sub)
}
// 订阅者想订阅的事件，注册到事件中心
s.notify = function (obj){
	// console.log(obj);
	// 一旦调用了set就触发notify,然后遍历每个观察者，并触发他们相应的update方法
	this.subs.forEach(function (sub){
		sub.update();
		/* 
		    sub.update()：
			调度中心统一调度订阅者注册到调度中心的处理代码
		 */
	})
}
s.depend = function (){
	Dep.target.addDep(this) //这个this指向Dep实例dep
} 
