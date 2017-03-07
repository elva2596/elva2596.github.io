(function(){
	var buttons = $('.circle').getElementsByTagName('li');
	var index = 1;
	var flag = false;
	var timer = null;
	var t = 3000;


	function next(){
		if(index==4){
			index =1;
		}else{
			index++;
		}
		showButton();
		// if(!flag){
			animation($('.list'),{
				attr:'x',
				target:-500*index,
				step:25
			});
		// } 
	}
	addEvent('.right','click',next);
	addEvent('.left','click',prev);
	function prev(){
		if(index==1){
			index = 4;
		}else{
			index--;
		}
		showButton();
		// if(!flag){
			animation($('.list'),{
				attr:'x',
				target:-500*index,
				step:25
			});
		// }
	}
	// 小圆点亮起
	function showButton(){
		for(var i=0;i<buttons.length;i++){
			if( buttons[i].className == 'active'){
	            buttons[i].className = '';
	            break;
	        }
		}
		buttons[index-1].className = 'active';
	}
	showButton();//初始化第一个亮起
	// 小圆点点击函数
	function buttonClick(){
		for(var i=0;i<buttons.length;i++){
			buttons[i].onclick = function (){
				this.index = this.getAttribute('index');
				// var offset = (myIndex-index)*(-500);
				index = this.index;
				animation($('.list'),{
				attr:'x',
				target:-500*index,
				step:25
			});
				// 点击当前Li的时候当前小圆点亮起
				showButton();
			};
		}
	}
	// 正序

	function playAsc(){
		buttonClick();
		showButton();
		if(timer){
			stop();
		}
		timer = setInterval(next,3000);
	}

	// 逆序
	function palyDesc(){
		buttonClick();
		showButton();
		if(timer){
			stop();
		}
		timer = setInterval(prev,3000);
	}
	function stop(){
		clearInterval(timer);
	}
	// 正序
	addEvent('#normal','click',playAsc);
	// 逆序
	addEvent('#reverse','click',palyDesc);
	addEvent('.right','mouseover',stop);
	// addEvent('.right','mouseout',autoPlay);
	// addEvent('.left','mouseover',stop);
	// addEvent('.left','mouseout',autoPlay);
	// addEvent('.list','mouseover',stop);
	// addEvent('.list','mouseout',autoPlay);
	addEvent('.circle','mouseover',stop);
	// addEvent('.circle','mouseout',autoPlay);
})(3000);

