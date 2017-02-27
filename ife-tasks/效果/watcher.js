/*
	先来看看vue官网对实例$watcher方法的说明:
	vm.$watch( expOrFn, callback, [options] )
	参数：
	{string | Function} expOrFn
	{Function} callback
	{Object} [options]
	{boolean} deep
	{boolean} immediate
	返回值： {Function} unwatch
	用法：
		观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。
		表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代(这句很重要)

	示例：
	// 键路径
	vm.$watch('a.b.c', function (newVal, oldVal) {
	  // 做点什么
	})
	// 函数
	vm.$watch(
	  function () {
	    return this.a + this.b
	  },
	  function (newVal, oldVal) {
	    // 做点什么
	  }
	)

 */
function Watcher(vm,expOrFn,cb){
	this.cb = cb;
	this.vm = vm;
	// 此处作了简化，要区分function 还是string,这里只考虑string
	this.expOrFn = expOrFn
	this.value = this.get()//更新前的值
}
var w = Watcher.prototype;
w.update = function (){
	this.run()
}
w.run  = function (){
	var value = this.get() //这里是更新后的值
	if(value!===this.value){
		this.value = value //用新值覆盖旧值
		this.cb.call(this.vm)
	}
}
w.get = function (){
	Dep.target = this
	return this.vm._data[this.expOrFn] //这里会调用get方法
}