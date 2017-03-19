var iconSearchLeft, iconSearchLeftOver, iconSearchRight, iconSearchRightOver;
var initialSearch;
function setSearch(){
	initialSearch = true;
	$("#search img").hover(iconRollover, iconRollout).click(iconClick);
	iconSearchLeft = new Image();
	iconSearchLeft.src = "img/searchbox.png";
	iconSearchLeftOver = new Image();
	iconSearchLeftOver.src = "img/searchbox.png";
	iconSearchRight = new Image();
	iconSearchRight.src = "img/searchbox.png";
	iconSearchRightOver = new Image();
	iconSearchRightOver.src = "img/searchbox.png";
	$("#searchField").focus(searchFocus).blur(searchBlur).keydown(searchKeydown);
}

function iconRollover(e){
	if(this.src == iconSearchLeft.src){
		this.src = iconSearchLeftOver.src;
		$(this).css({cursor:"pointer"});
	} else if(this.src == iconSearchRight.src){
		this.src = iconSearchRightOver.src;
		$(this).css({cursor:"pointer"});
	}
}

function iconRollout(e){
	$(this).css({cursor:"auto"});
	if(this.src == iconSearchLeftOver.src){
		this.src = iconSearchLeft.src;
	} else if(this.src == iconSearchRightOver.src){
		this.src = iconSearchRight.src;
	}
}

function iconClick(e){
	if(this.src == iconSearchLeftOver.src){
		$(this).attr({src:iconSearchLeft.src}).unbind();
		$("#searchElements").animate({left:0}, 1000, searchElementsOpenComplete);
	} else if(this.src == iconSearchRightOver.src){
		$(this).attr({src:iconSearchRight.src}).unbind();
		$("#searchElements").animate({left:150}, 1000, searchElementsCloseComplete);
	}
}

function searchElementsOpenComplete(){
	$("#search img").attr({src:iconSearchRight.src}).hover(iconRollover, iconRollout).click(iconClick);
}

function searchElementsCloseComplete(){
	$("#search img").attr({src:iconSearchLeft.src}).hover(iconRollover, iconRollout).click(iconClick);
}

function searchFocus(){
	if(initialSearch){
		this.value = "";
		initialSearch = false;
	}
}

function searchBlur(){
	if(this.value.length < 1){
		this.value = "Search";
		initialSearch = true;
	}
}

function searchKeydown(e){
	if(e.which == 13){
		// alert("Search " + $("#searchField").attr("value"));
	}
}
