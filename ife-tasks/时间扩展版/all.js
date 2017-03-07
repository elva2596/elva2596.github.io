window.onload = function (){
	var oUl = document.getElementById('list'),
		aLi = oUl.getElementsByTagName('li'),
		aDiv = oUl.getElementsByTagName('div'),
		timer = null;

	timer = setInterval(function(){
		for(var i=0,len=aDiv.length;i<len;i++){
				fnFlip(aDiv[i],i);
		}
	}, 1000);
}

function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:
		getComputedStyle(obj)[attr];
	}

function doMove(obj,attr,dir,target,frequency,endFn){
		dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var speed = parseInt(getStyle(obj,attr))+dir;
			if(speed>target&&dir>0||speed<target&&dir<0){
				speed =target;
			}
			obj.style[attr]=speed+'px';
			if(speed==target){
				clearInterval(obj.timer);
				endFn&&endFn();
			}
		}, frequency);
	}

function toTwo(n){
	return n<10?'0'+n:''+n;

	}

function fnFlip(obj,index){

		//每次获取当前时间(把每次都变换的放进封装函数里面)
			var now = new Date(),
				iHours = now.getHours(),
				iMin = now.getMinutes(),
				iSec = now.getSeconds(),
				str = toTwo(iHours)+':'+toTwo(iMin)+':'+toTwo(iSec),
				aImg = obj.getElementsByTagName('img');
			
			if(str.charAt(index)==':'){
				aImg[0].src = '../img/colon.JPG';
				setTimeout(function(){
				aImg[0].src = '../img/colon2.jpg';
				}, 500);
			}else{
				aImg[1].src = "../img/"+str.charAt(index)+".JPG";

					if(aImg[0].src!=aImg[1].src){
						doMove(obj,'top',20,-150,50,function (){
						aImg[0].src = aImg[1].src;
						obj.style.top = 0;
					});
				}

			}
	}

















	

	



