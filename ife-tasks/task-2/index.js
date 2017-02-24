window.onload = function (){
  var oClick = document.getElementById('click_region'),
      oMenu = document.getElementById('menu'),
      aLi = oMenu.getElementsByTagName('li'),
      browserHeight = document.documentElement.clientHeight,//浏览器视口的高度
      browserWidth = document.documentElement.clientWidth; //浏览器视口的快读，不包括垂直滚动天的宽度

  document.oncontextmenu = function (ev){
    oMenu.style.display = 'block';
    var ev = ev||window.event,
        scrollTop = document.documentElement.scrollTop||document.body.scrollTop,
        scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft,
        clientX = ev.clientX,
        clientY = ev.clientY,
        // 注意：只有在隐藏的元素变成display:block的状态才能获取他的宽度和高度
        offsetWidth = oMenu.offsetWidth,
        offsetHeight = oMenu.offsetHeight,
        top,
        left;

    if(clientY+offsetHeight>browserHeight){
       top = clientY-offsetHeight
    }else{
      top = clientY
    }

    if(clientX+offsetWidth>browserWidth){
      left = clientX-offsetWidth
      console.log(left);
    }else{
      left = clientX
    }

    oMenu.style.left = left+'px';
    oMenu.style.top =scrollTop+top+'px';
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
