window.onload= function (){
    // alert(1);
    var box = document.getElementById('box'),
        QQ = document.getElementById('qq'),
        fraction = document.getElementById('fraction'),
        aP = fraction.getElementsByTagName('p'),
        oAlert = document.getElementById('alert'),
        oBtn = document.getElementsByTagName('input')[0],
        num = 1,
        score = 0,
        losePoints = 0,
        width = parseInt(getStyle(box,"width")),
        height = parseInt(getStyle(box,"height")),

        arrQQ = ['img/1.png', 'img/2.png', 'img/3.png',
                 'img/4.png', 'img/5.png', 'img/6.png', 
                 'img/7.png', 'img/8.png', 'img/9.png', 
                 'img/10.png', 'img/11.png'];
                  // alert(height);

     oBtn.onclick = fn;
     function fn(){
         aP[0].innerHTML = "得分:"+(score)+"分";
          aP[1].innerHTML = "失分:"+(losePoints)+"分";
        oBtn.disabled = true;
        oBtn.value = '游戏正在进行中';
        var x = selectFrom(0,width-24),
            n = selectFrom(0,arrQQ.length-1),
            aImg = document.getElementsByTagName('img');
        QQ.innerHTML =   '<img style="left:'+x +'px;"src="'+arrQQ[n]+'" alt="">';
        
        doMove(aImg[0],'top',num,height-24,function (){
            aP[1].innerHTML = "失分:"+(++losePoints)+"分";
            // aImg[0].disabled =true;
            if(losePoints<10){
                shake(bolosePoints,"top",fn);
            }else{
                QQ.innerHTML = '';
                alert("您失败了,请再来一次");
                num=1;
                score = 0;
                losePoints = 0;
                oBtn.value = '开始游戏';
                oBtn.disabled = false;

            }
        });


        aImg[0].onclick= function (){
            this.src = 'img/qq.png';
            shake(this,'left',function (){
                aImg[0].style.display = 'none';
                num++;
                fn();
            aP[0].innerHTML = "得分:"+(++score)+"分";
            });

        };
    };
};

    function selectFrom (lowerValue,upperValue){
        var choice = upperValue - lowerValue+1;
        return Math.floor(Math.random()*choice+lowerValue);
    }
    function getStyle(obj,attr){
        return getComputedStyle(obj)[attr];
    }
    function shake(obj,attr,endFn){
        if(obj.flag){return ;}
        obj.flag = true;
        var pos = parseInt(getStyle(obj,attr)),
            arr = [];
            num = 0;
        
        for(var i=10;i>0;i--){
            arr.push(i,-i);
        }
        arr.push(0);

        clearInterval(obj.shaker);
        obj.shaker = setInterval(function(){
            obj.style[attr] = pos+arr[num]+'px';
            num++;
            if(num==arr.length){
                clearInterval(obj.shaker);
                endFn&&endFn();
                obj.flag  = false;
            }
        }, 50)
    }

    //doMove()运动函数:
    function doMove(obj,attr,dir,target,endFn){
        dir = parseInt(getStyle(obj,attr))<target?dir:-dir;
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var speed = parseInt(getStyle(obj,attr))+dir;
            if(speed>target&&dir>0||speed<target&&dir<0){
                speed = target;
            }
            obj.style[attr] = speed+'px';
            if(speed==target){
                clearInterval(obj.timer);
                endFn&&endFn();
            }
        }, 50)
    }