// 判断arr是否是一个数组，返回一个bool值
function isArray(arr){
	/* 
	法一：IE9+
	return Array.isArray(arr);
	*/
	/* 法二：更安全的检测数组*/
	return Object.prototype.toString.call(arr)=='[object Array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return Object.prototype.toString.call(fn)=='[object Function]';
}
// 判断str是否为一个RegExp
function isRegExp(str){
	return Object.prototype.toString.call(str)=='[object RegExp]';
}
// 判断obj是否为Object

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
     var o = isArray(src)?[]:{};
     // 或者 var o = src.constructor==Array?[]:{};
     // for in只遍历对象中可枚举的属性
     for(var i in src){
     	// for in遍历数组的时候i为数组下标(与此代码没有关系)
     	// 如果调用hasOwnProperty的是数组那么通过for in传入hasOwnProperty中的i是数组的下标
     	if(src.hasOwnProperty(i)){
     		// hasOwnProperty只能检测对象中指定的而非继承而来的属性
     		o[i]=typeof src[i]==='object'?arguments.callee(src[i]):src[i];
     	}
     }
   return o;
}
 /*
// 测试用例：
var srcObj = {
    a: 1,
    b1:[1,2,3]
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
srcObj.b1[0] = "4";

// console.log(abObj.a);//2
console.log(abObj.b1[0]);//'Hello'

// console.log(tarObj.a);      // 1
console.log(tarObj.b1[0]);    // "hello"

  */
 //数组的indexOf
function indexOf(arr,item){
	// var index = -1;
	for(var i in arr){
		if(arr[i]==item){
			return i;
			//一旦找到就返回不在向下执行
		}
	}
	return -1;
}
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var args = [];
   	for(var i in arr){
   		if(indexOf(args,arr[i])===-1){
   			args.push(arr[i]);
   		}
   	}
   	return args;
    
}
/*



// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]
 */

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    for(var i=0,len1=str.length;i<len1;i++){
    	if(str.charAt(i)!=' '&&str.charAt(i)!='\t'){
    		break;
    	}
    }

    for(var j=str.length-1;j>0;j--){
    	if(str.charAt(j)!=' '&&str.charAt(j)!='\t'){
    		break;
    	}
    }
    return str.slice(i,j+1);
}

function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g,'');
}

/*

 
var str = '   hi!  ';
str = trim(str);
console.log('---'+str+'----'); // 'hi!'
*/


// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i in arr){
    	fn(arr[i],i);
    }
}

/*
// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html
 */

 // 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var arr = [];
	for(var i in obj){
		arr.push(obj[i]);
	}
	return arr.length;
	
}
/*
// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3
*/

// 判断是否为邮箱地址
function isEmail(emailStr) {
   return  /^(\w)+@[\w]+(\.[a-zA-Z]+)+$/.test(emailStr);
   // 例子：qq邮箱274312732@qq.com.cn
}

// 判断是否为手机号
// 手机号规则：区号(1-4位)+号码(7-11位)
function isMobilePhone(phone) {
   return /^(\+\d{1,4})?\d{7,11}$/.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    var newClass = new RegExp('(^|\\s)'+newClassName+'(\\s|$)');
    var arr = element.className.split(' ');
    if(!newClass.test(element.className)){
    	arr.push(newClassName);
    	element.className = arr.join(' ');
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    var arr = element.className.split(' ');
    for(var i=0,len=arr.length;i<len;i++){
    	if(oldClassName==arr[i]){
    		break;
    	}
    }	
    arr.splice(i,1);
    element.className = arr.join(' ');
}
// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
   // return element.nextElementSibling==siblingNode;
   
   // 直接判断两个节点的父节点是否相等
   return element.parentNode==siblingNode.parentNode;
}


// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var o = {};
    o.actualTop= element.offsetTop;
    o.actualLeft= element.offsetLeft;
    o.current = element.offsetParent;
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
    while(o.current!==null){//body的offsetParent=null
    	o.actualTop+=o.current.offsetTop;
    	o.actualLeft+=o.current.offsetLeft;
    	o.current = o.current.offsetParent;
    }
    // 因为是相对于浏览器适口
    o.actualLeft-=scrollLeft;
    o.actualTop-=scrollTop;
    return o;
}

/*
Query思路：
	1、先将selector的前后空格去掉，再创建一个elements数组(函数最后返回的数组)，用来保存本次查找的节点数组，
	  再判断传进来的参数中是否有空格，如果有空格则是类css选择器查找，否则是单个元素查找

	2、在类css选择器查找中(只有css选择器查找中才存在保存父节点的数组)：先将selector字符串(根据空格)分割成数组保
	  存在arr中，再创建一个node数组(令node=elements)用来存放下一次查找的父节点数组。将arr遍历，如果第一次
	  遍历的时候node数组中为空，则令其=document,根据arr[i]的首字符判断是#、.、[、还是标签名。

	3、若是#则先将临时存放节点的数组elements清空，再将查找到的节点数组push进elements

	4、若是.则再遍历node数组，查找符合的className

	5、若是[ 则先判断arr[i]中(字符串)是否存在=，若不存在，则遍历父节点，将每个父节点下的所有元素节点
	  找出来，遍历元素节点，查找存在(要查找的属性)的节点放入临时数组中，
	  若存在=，则遍历父节点，再通过正则提取key和value,将每个父节点下(存在key和value)的节点存放到elements
	6、单个元素节点查找不用考虑父元素
 */

// 实现一个简单的Query
function $(selector) {
	selector = trim(selector);
	var elements = [];//用来存放临时节点数组，解决下次查时临时节点数组被覆盖的问题
	if(selector.indexOf(' ')>-1){//模拟css选择器
		/*
			如果selector中间存在空格则说明是css选择器
			则将selector按空格分成数组，创建Node数组存放本次的临时数组用于做下次的父元素
		 */
		var arr = selector.split(' ');//将selector拆分成数组保存到arr中
		var node = [];//用来存放上次查找到的节点数组，作为下一次查找的父元素
		for(var i=0,len=arr.length;i<len;i++){
			//如果是多个元素查找的时候若第一个元素不是id查找，则它的父元素是没有的
			if(!node.length){node=document;}
			switch(arr[i].charAt(0)){
				case '#':
					elements=[];
					elements.push(getId(arr[i].substring(1)));
					node = elements;
					break;
				case '.':
					elements=[];
					for(var j=0;j<node.length;j++){
						var temps = getClassName(arr[i].substring(1),node[j]);
						for(var k=0;k<temps.length;k++){
							elements.push(temps[k]);
						}
					}
					node = elements;
					break;
				case '[':
					elements=[];
					if(arr[i].slice(1,-1).indexOf('=')==-1){//只有key没有value
						for(var j=0;j<node.length;j++){
							var temps = node[j].getElementsByTagName('*');
							for(var k=0;k<temps.length;k++){
								
									/*element.getAttribute()返回的是属性的值
									element.getAttributeNode().value/element.attributes()返回的是属性节点，可以
									通过element.getAttributeNode().value/element.attributes().name获取属性的名称
									通过element.getAttributeNode().value/element.attributes().value获取属性的值
								  */
								if(temps[k].getAttribute(arr[i].slice(1,-1))==''){
									elements.push(temps[k]);
									// 使用break可以跳出循坏
									// break;
								}
							}
						}
					}else{//既有key又有value
						for(var j=0;j<node.length;j++){
							var pattern = /(.+)=(.+)/;
							var cut = pattern.exec(arr[i].slice(1,-1));
							var key = cut[1];
							var value = cut[2];
							var temps = node[j].getElementsByTagName('*');
							for(var k=0;k<temps.length;k++){
								if(temps[k].getAttribute(key)==value){
									elements.push(temps[k]);
									// break;
								}
							}
						}
					}
					node = elements;
					break;
				default:
					elements = [];
					for(var j=0;j<node.length;j++){
						var temps=getTagName(arr[i],node[j]);
						for(var k=0;k<temps.length;k++){
							elements.push(temps[k]);
						}
					}	
			}
		}
	}else{//单个元素查找
		switch(selector.charAt(0)){
			case '#':
				elements = [];
				elements.push(getId(selector.substring(1)));
				break;
			case '.':
				elements = getClassName(selector.substring(1));
				break;
			case '[':
				if(selector.slice(1,-1).indexOf('=')==-1){//只有key没有value
						var temps = document.getElementsByTagName('*');
						var arr=[];
						for(var k=0;k<temps.length;k++){
							if(temps[k].getAttribute(selector.slice(1,-1))==''){
								arr.push(temps[k]);
								// break;
							}
						}
						elements = arr;
				}else{//既有key又有value
					/*
						使用分组匹配和exec(pattern.exec(字符串))/match(字符串.match(pattern))
						会返回一个数组,['匹配到的字符串','匹配到的第一个分组里的字符串','匹配到第二个分组里的字符串']
					 */
					var pattern = /^(.+)=(.+)$/;
					var cut = pattern.exec(selector.slice(1,-1));
					var key = cut[1];
					var value = cut[2];
					var temps = document.getElementsByTagName('*');
					var arr = [];
					for(var k=0;k<temps.length;k++){
						if(temps[k].getAttribute(key)==value){
							arr.push(temps[k]);
							// break;
						}
					}
					elements = arr;
				}
				break;
			default:
				elements = getTagName(selector);
		}
	}					
	return elements[0];
}

// 获取ID
function getId(id){
	return document.getElementById(id);
}
//获取tagName
function getTagName(tagName,parentNode){
	var node = null;//用来存放父元素
	var temps = [];//用来存放找到的元素最终并返回
	if(parentNode!=undefined){
		node = parentNode;
	}else{
		node = document;
	}
	var allElements = node.getElementsByTagName(tagName);
	for(var i=0,len=allElements.length;i<len;i++){
		temps.push(allElements[i]);
	}
	return temps;
}
// 获取className
function getClassName(className,parentNode){
	var node = null;//用来存放父元素
	var temps = [];//用来存放找到的元素最终并返回
	if(parentNode!=undefined){
		node = parentNode;
	}else{
		node = document;
	}
	var allElements = node.getElementsByTagName('*');
	for(var i=0,len=allElements.length;i<len;i++){
		if(hasClassName(className,allElements[i])){
			temps.push(allElements[i]);
		}
	}
	return temps;
}

//判断是否还有className
function hasClassName(className,ele){
	return new RegExp('(^|\\s)'+className+'(\\s|$)').test(ele.className);
}
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(selector, event, listener) {
    // your implement
    if($(selector).addEventListener){
    	$(selector).addEventListener(event,listener,false);
    }else if($(selector).attachEvent){//IE8及以下适用。并且相同的事件处理程序可以注册多次
    	$(selector).attachEvent('on'+event,listener);
    }else{
    	$(selector)['on'+event] = listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(selector, event, listener) {
    // your implement
    if($(selector).removeEventListener){
    	$(selector).removeEventListener(event,listener,false);
    }else if($(selector).detachEvent){
    	$(selector).detachEvent('on'+event,listener);
    }else{
    	$(selector)['on'+event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(selector, listener) {
    // your implement
    addEvent(selector, "click", listener);
}
// 实现对于按Enter键时的事件绑定
function addEnterEvent(selector, listener) {
    // your implement
      addEvent(selector, "keyup", function (event){
      	if(event.keyCode==13){
      		listener(event);
      	}
      });
}

//事件委托
// 先简单一些
function delegateEvent(selector, tag, eventName, listener){
    // your implement
     addEvent(selector,eventName,function (event){
     	event = event||window.event;
     	var target = event.target||event.srcElement;
     	//元素的tagName和nodeName的值都是大写的
     	if(target.tagName.toLowerCase()==tag.toLowerCase()){
     		listener(event);
     	}
     });
}

/*
	接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
 */
$.on = addEvent;
$.un= removeEvent;
$.click= addClickEvent;
$.enter=addEnterEvent;
$.delegate = delegateEvent;

// AJAX
function ajax(url, options) {
    // your implement
    var xhr = new XMLHttpRequest();
    options.data = (function (data){
    	var arr = [];
    	for(var i in options.data){
    		arr.push(encodeURIComponent(i)+'='+encodeURIComponent(optionsdata[i]));
    	}
    	return arr.join('&');
    })(options.data);

    options.method =options.method||'get';

    if(options.method=='get'){
    	url+= url.indexOf('?')==-1?'?'+options.data:options.data;
    }
    xhr.onreadystate = function (){
    	if(xhr.readyState==4){
    		/*  readyState==4:表示服务器端已经将请求处理完成，客户端可以接受并调用响应数据了，
    						  在用status做判断可以获取我们想要的数据

    			status:
	    				200:200 ok。表示从客户端发来的请求在服务器端被正常的处理了
	    				204:No Content。请求处理成功，但没有资源可返回。一般在只需要从客户端往服务器发送消息
	    					而对客户端不需要发送任何新信息内容的情况下使用
						206:Partial Content。对资源一部分的请求
						304:Not Modified 服务器端资源未改变，可直接使用客户端未过期的缓存
    		 */
    		if(xhr.status>=200&&xhr.status<300||xhr.status==304){
    			options.success(xhr.responseText);
    		}else{
    			alert('Request was unsuccessful:'+xhr.status);
    		}
    	}
    };
    xhr.open(options.method,url,true);
    if(options.method=='post'){
    	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    	xhr.send(options.data);
    }else{
    	xhr.send(null);
    }
    
}
/*


// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest', 
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
 */

 // 设置cookie
function setCookie(cookieName, cookieValue, expiredays,path,domain,secure) {
    // your implement
    var cookieText = encodeURIComponent(cookieName)+'='+encodeURIComponent(cookieValue);
    if(expiredays instanceof Date){
    	cookieText+='; expiredays='+expiredays.toGMTString();
    }
    if(path){
    	cookieText+='; path='+path;
    }
    if(domain){
    	cookieText+='; domain='+domain;
    }
    if(secure){
    	cookieText+='; '+secure;
    }

    document.cookie = cookieText;
     
}
// 获取cookie值
function getCookie(cookieName) {
    // your implement
    var cookieName = encodeURIComponent(cookieName)+'=',
    	cookieStart = document.cookie.indexOf(cookieName),
    	cookieValue = null;
    if(cookieStart>-1){
    	var cookieEnd = document.cookie.indexOf(';',cookieStart);
    	if(cookieEnd==-1){
    		cookieEnd = document.cookie.length;
    	}
    	cookieValue = decodeURIComponent(document.cookie.subtring(cookieStart+cookieName.length,cookieEnd));
    }
    return cookieValue;
}
// 删除cookie
/*
	需要使用相同的路径(path)、域(domain)、安全(secure)再次设置cookie，并且将失效时间设置为过去的时间。
 */
function deleteCookie(name,path,domain,secure){
	setCookie(name,'',new Date(0),path,domain,secure);
}
// 设置动画
function animation(element,obj){  
	var attr = obj['attr']=='o'?'opacity':obj['attr']=='x'?'left':obj['attr']=='y'?
				'top':obj['attr']=='w'?'width':obj['attr']
				=='h'?'height':obj['attr']=='o'?'opacity':'left';

	var target = obj['target'];
	var step = obj['step']!=undefined?obj['step']:10;
	var speed =obj['speed']!=undefined?obj['speed']:6;
	var type = obj['type']==0?'constant':obj['type']==1?'buffer':'buffer';
	step = (getStyle(element,attr)>target)?-step:step;
	var mul = obj['mul'];
	clearInterval(element.timer);
	// 如果没有传mul则是单个动画
	if(mul==undefined){
		mul = {};
		mul[attr] = target;
		console.log(step);
	}
	element.timer = setInterval(function (){
		/*
			当element.style[attr] =198，再加7=205但是他和下面判断语句是
			同处于一个定时器处理程序中的，并且同一个定时器中的程序是瞬间完成的。
		 */
		var flag = true;//关闭定时器的开关
		/*
			同步动画原理:在一次定时器程序执行过程中所有对象属性都执行一下，再执行下一次定时器程序
		 */
		for(var i in mul){
			attr = i=='x'?'left':i=='y'?'top':i=='w'?'width':
					i=='h'?'height':i=='o'?'opacity':i!=undefined?i:'left';
			target = mul[i];
			// 缓冲运动
			if(type=='buffer'){
				/*
					缓冲原理:设置每次的步数不一样。
					step(步数)=(目标值-当前值)/speed(速度),并且每次step都会减小,
					并且向上取整(step>0)或者向下取整(step<0)
				 */
				step= attr=='opacity'?(target-getStyle(element,attr)*100)/speed:(target-getStyle(element,attr))/speed;
				step = (step>0)?Math.ceil(step):Math.floor(step);
			}

			if(attr=='opacity'){
				var temps = getStyle(element,attr)*100;
				element.style.opacity = parseInt(temps+step)/100;
				/*
					PS：要注意parseInt(temp + step)的用途，因为计算机对小数经常不敏感，需要取整操作，
						不然可能会造成渐变闪烁问题
				 */
				element.style.filter = 'alpha(opacity='+ parseInt(temps + step) +')';
				if(step==0){
					clearOpacity();
				}else if(step>0&&Math.abs(temps-target)<step){
					clearOpacity();
				}else if(step<0&&(temps-target)<Math.abs(step)){
					clearOpacity();
				}
				// parseInt避免出现小数
				if(target!=parseInt(temps)){flag=false}
			}else{
				element.style[attr] = getStyle(element,attr) + step+ 'px';
				// 更好的解决突兀问题(如果计算的差值小于step，直接往前调到target)
				if(step==0){
					clear();
				}else if(step>0&&Math.abs(getStyle(element,attr)-target)<step){
					clear();
				}else if(step<0&&(getStyle(element,attr)-target)<Math.abs(step)){
					clear();
				}
				if(target!=getStyle(element,attr)){flag=false;}
			}
		}
		if(flag){
			clearInterval(element.timer);
			if(obj.fn!==undefined){
				obj.fn();
			}
		}
	},30);

	function clear(){
		element.style[attr]=target+'px';
		
	}
	function clearOpacity(){
		element.style.opacity = target/100;
	}
}
// 获取计算的样式
function getStyle(element,attr){//返回的是带单位的(element.style.attr也是带单位的)
	var value = '';
	if(typeof window.getComputedStyle!='undefined'){//IE9+支持
		value =  parseFloat(window.getComputedStyle(element,null)[attr]);
	}else if(typeof element.currentStyle!='undefined'){//IE8及以下
		value =  parseFloat(element.currentStyle[attr]);
	}
	// console.log(value);
	return value;
}
// 去除数组中的空元素
function deleteBlank(arr){
	var args = [];
	for(var i in arr){
		if(/\s+/.test(arr[i])||arr[i]==''){
			continue;
		}else{
			args.push(arr[i]);
		}
	}
	return args;
}
// console.log(['1',,'3','4',' ','6']);
// console.log(deleteBlank(['1','','3','4',' ','6']));