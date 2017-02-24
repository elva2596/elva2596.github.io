window.onload = function (){
  var oClick = document.getElementById('click_region'),
      oMenu = document.getElementById('menu'),
      aLi = oMenu.getElementsByTagName('li'),
      browserHeight = window.innerHeight,
      browserWidth = window.innerWidth;
  document.oncontextmenu = function (ev){
    var ev = ev||window.event,
        scrollTop = document.documentElement.scrollTop||document.body.scrollTop,
        scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft,
        clientX = ev.clientX,
        clientY = ev.clientY,
        offsetWidth = oMenu.offsetWidth,
        offsetHeight = oMenu.offsetHeight,
        top,
        left;

    oMenu.style.display = 'block';

    if(clientY+offsetHeight>=browserHeight){
       top = clientY-offsetHeight
    }else{
      top = clientY
    }

    if(clientX+offsetWidth>=browserWidth){
      left = clientX-offsetWidth
    }else{
      left = clientX
    }

    oMenu.style.left = left+'px';
    oMenu.style.top = top+'px';
    return false//阻止默认行为，并且阻止冒泡
  }

  // 取消自定义菜单
  document.onclick = function (){
      oMenu.style.display = 'none';
  }

    var lis = Array.prototype.slice.call(aLi,0); //类数组转成数组


    //遍历数组
    lis.forEach(function (item,index,arr){
      aLi[index].onclick = function (event){
        alert(this.innerHTML)
         event.stopPropagation();
      }
    })

}
