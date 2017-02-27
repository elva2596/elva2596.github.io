  var data = {
	name:'dailu'
}
    Object.keys(data).forEach(function (key){

    	_proxy(key)
    })

function _proxy (key){
	
	 var self = this
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function  () {
      	console.log("执行了");
        return obj[key]
      },
      set: function  (val) {
      	console.log("succes");
        // self._data[key] = val
        obj[key] = val
      }
    })
  }
