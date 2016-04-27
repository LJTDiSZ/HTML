function showAnimate(){
	setTimeout(function(){
	    $(".p0-line-1").css("width","93.333333%");
	},300);
	setTimeout(function(){
	    $(".p0-line-2").css("width",80);
	},400);
	setTimeout(function(){
	    $(".p0-user-name").addClass("riseUp");
	},900);
	setTimeout(function(){
	    $(".p0-user-from").addClass("riseUp");
	},1200);
	setTimeout(function(){
	    $(".p0-user-info").addClass("riseUp");
	},1700);
	setTimeout(function(){
	    $("#btn-showPop").addClass("riseUp");
	},2200);
	setTimeout(function(){
	    var $listItem = $("#appList").find(".item");
	    var listNum = $listItem.length;
	    var i,t;
	    for(i=0;i<=listNum;i++){
	    var time = i*500;
	    t = setTimeout("riseUp("+i+")",time);
	    } 
	    clearTimeout(t);
	},2700);

}

function riseUp(i){
  $("#appList").find(".item").eq(i).addClass("riseUp");
}

function showPop(id,imgUrl){
    var screenHeight = $(window).height();
     var screenWidth = $(window).width();
    if(imgUrl && imgUrl != ""){
        $("#qrcodeImg").attr("src",imgUrl);
    }
    if(id==="#popDialog"){
        $(id).css({height:screenHeight}).show();
        $("body").css({overflow:"hidden",height:screenHeight});
        $(".container").css({height:screenHeight,width:screenWidth});
    } else{
         $(id).show();
    }

}
function hidePop(id){
    if(id==="#popDialog"){
           $(id).hide();
           $("body").css({overflow:"hidden",height:"auto"});
            $(".container").css({height:"auto",width:"100%"});
       } else{
            $(id).hide();
       }
}


