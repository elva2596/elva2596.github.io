/*
*
 * Created by Jee on 2016/5/11.
jQuery(function($){init()});

var slideTimeoutDuration = 3*1000;
var slideTransitionDuration = 1000;

var slideID;
var slideLoadCompleted;
var slideTimeoutID;
var slideList;
var firstRun = true;

function init(){
    setSearch();
    setStage();
    initSlides();
}

function setStage(){
    setStageWidth();
    $(window).unload(windowUnload);
    $(window).resize(windowResize);
    $(window).resize();
    $("body").css({overflow:"hidden"});
    $("footer").hide();
    ieFix();
}

function setStageWidth(){
    if($(window).width() > 1560){
        var sideMargin = ($(window).width() - 1500)/2;
        $("body").css({"margin-left":sideMargin + "px", "margin-right":sideMargin + "px"});
        $("#search").css({right:sideMargin + "px"});
    } else {
        $("body").css({"margin-left":"30px", "margin-right":"30px"});
        $("#search").css({right:"30px"});
    }
}

function windowUnload(){
    window.clearTimeout(slideTimeoutID);
}
/!*

function windowResize(){
    setStageWidth();
    // $("footer").css({position:"absolute", bottom:(ie() ? "10px" : "20px"), width:($(window).width() - 60) + "px"});
    $("#main img").each(resizeSlide);
}

function initSlides(){
    slideID = 0;
    slideList = new Array();
    $("#main > a").each(initSlide);
    loadSlide();
}

function initSlide(index){
    slideList.push($(this).detach());
}

function hideSlide(slide){
    $(slide).css({top:"-9000px"}).hide();
}

function loadSlide(){
    var img = new Image();
    $(img).load(slideLoadComplete);
    img.src = $(slideList[slideID]).children("img")[0].src;
}

function slideLoadComplete(){
    displaySlide();
}

function displaySlide(){
    if($("#main > a").length > 0){
        if(ie6()){
            $("#main img").css({opacity:0});
        } else {
            $("#main img").animate({opacity:0}, slideTransitionDuration);
        }
    }

    var slideNode = $(slideList[slideID]).clone();
    $("#main").append($(slideNode));
    $(slideNode).children("img").css({opacity:0}).animate({opacity:1}, slideTransitionDuration, slideFadeInComplete);

    $("#main img").each(resizeSlide);
}

function resizeSlide(){
    fillStage(this);
}

function fillStage(slide){
    // if(!(slide.width > 0 && slide.height > 0)) return;
    var maxWidth;
    $(window).width() > 1560 ? maxWidth = 1500 : maxWidth = $(window).width() - 60;
    var maxHeight = $(window).height() - (60 + $("nav").height() + 20);
    var image = new Image();
    image.src = slide.src;
    var scaleX = maxWidth/image.width;
    var scaleY = maxHeight/image.height;
    slide.width = Math.min(scaleX, scaleY)*image.width;
    slide.height = Math.min(scaleX, scaleY)*image.height;
}

function slideFadeInComplete(){
    removeLastSlide();
    startSlideTimeout();
}

function removeLastSlide(){
    if($("#main > a").length > 1){
        $($("#main > a")[0]).remove();
    }
}

function startSlideTimeout(){
    window.clearTimeout(slideTimeoutID);
    slideTimeoutID = window.setTimeout(slideTimeout, slideTimeoutDuration);
}

function slideTimeout(){
    nextSlide();
}

function nextSlide(){
    if(++slideID >= slideList.length) slideID = 0;
    loadSlide();
}
*!/



*/
window.onload=function() {
    var obtn=document.getElementById('btn');
    var timer = null;
    var isTop = true;
    //滚动条滚动时触发
    window.onscroll = function () {
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    };
    obtn.onclick = function () {
        //设置定时器
        timer = setInterval(function () {
            //获取滚动条距离顶部的高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-osTop / 6);//向下舍入取整
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            isTop = true;
            // console.log(osTop - ispeed);
            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
};













