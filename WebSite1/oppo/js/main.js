window.APP = {
    name: "index",
    isEnd: false,
    start: function() {},
    onLeave: function() {},
    afterLoad: function() {},
    sectionsColor: [],
};

$(document).ready(init);

function init() {

    if (isIE()) {
        var pages = $(".page");
        for (var i = pages.length - 1; i >= 0; i--) {
            if($(pages[i]).attr("forIE") !== "true"){
                $(pages[i]).html("");
                var img = $("<img src='assets/pages/" + APP.name + "/imgFull/" + (i + 1) + ".jpg?v=2015090103' style='height:100%;min-width:100%;min-height:100%;'>")
                $(pages[i]).append(img);
                if(APP.name == "vooc" && i == 1) {
                    var ww = $(window).width(),
                        wh = $(window).height();
                    var voocLink = '<a href="http://hd.oppo.com/2015/vooc/index.html" target="_blank" style="color:#fff;font-size:16px;position:absolute;left:'+ww/1920*416+'px;top:'+wh/1080*432+'px">了解VOOC闪充&gt;&gt;</a>'
                    $(pages[i]).append(voocLink);
                }
            }
        };
    }

    $(".pagesContianer").show();

    fullpage();

    APP.start();

    $("body").hide();
    $("body").fadeIn(800);

    //$(".priceSpan").html(2999+"起");
    $(".btnBuy").html("到货通知");

    $(".btnBuy").click(function(){
        if($(".dialog").length < 1){
            $.get("dialog.html",function(data){
                $("body").append($(data));
                $(".dialog").fadeIn(300);
            });
        }else{
            $(".dialog").fadeIn(300);
        }
        if (typeof _optj != 'undefined') {
            _optj.push(['_trackEvent', 'product', 'btn', 'r7plus', 'notice']);
        }
    });
}

function fullpage() {
    $('.pagesContianer').fullpage({
        verticalCentered: false,
        navigation: false,
        sectionsColor: APP.sectionsColor,
        onLeave: onLeave,
        afterLoad: afterLoad,
        autoScrolling: true,
        afterRender: function() {}
    });
    // $.fn.fullpage.reBuild();
    $(".fp-section").css({ //修正兼容性
        height: window.document.body.clientHeight + "px"
    });
    $('.pagesContianer').mousewheel(function(e) {
        if (APP.isEnd && e.deltaY < 0) {
            $(".bottomBar").slideDown();
        } else {
            $(".bottomBar").slideUp();
        }
    });

    var animates = $(".page[id=page1] .animate");
    doOpacityAnimate(animates, 600, 1200,aniFunc1);
}

function onLeave(index, nextIndex, direction) {
    APP.onLeave(nextIndex);

    //ANIMATE BASIC
    $(".page[id=page" + nextIndex + "] .animate").css("opacity", "0");
    if(typeof(window["pageAnimatePre" + nextIndex]) === "function") window["pageAnimatePre" + nextIndex]();
}

function afterLoad(anchorLink, index) {
    APP.afterLoad(index);
    APP.isEnd = index == $(".page").length;

    //ANIMATE BASIC
    var animates = $(".page[id=page" + index + "] .animate");
    var rand = Math.random();
    var aniFunc = aniFunc1;
    if(rand < 0.4) aniFunc = aniFunc2;
    else if(rand < 0.8) aniFunc = aniFunc3;
    doOpacityAnimate(animates, 600, 600 + Math.random() * 600,aniFunc);

    if(typeof(window["pageAnimate" + index]) === "function") window["pageAnimate" + index]();
}

function aniFunc1(value){return "matrix(1,0,0,1,0," + (60 - 60 * value) + ")";}
function aniFunc2(value){return "matrix(1,0,0,1," + (60 - 60 * value) + ",0)";}
function aniFunc3(value){return "matrix(1,0,0,1," + (- 60 + 60 * value) + ",0)";}

function doOpacityAnimate(eles, delay, duration,animateFunc) {
    delay = delay ? delay : 800;
    duration = duration ? duration : 800;
    for (var i = 0; i < eles.length; i++) {
        var ele = $(eles[i]);
        ele.stop(true, true);
        ele.css("opacity", "0");
        ele.delay(delay * (i + 1)).animate({
            "opacity": 1
        }, {
            step: function(value, e) {
                // console.log(value,e.elem);
                $(e.elem).css("transform", animateFunc(value));
            },
            easing:"easeInOutCubic",
            duration: duration
        });
    }
}

function isIE() {
    // return true;
    return !!window.ActiveXObject;
}


var isBatteryAnimating = false;
function doBatteryAnimate(isStop){
    function animateEnd(){
        isBatteryAnimating = false;
        $(".battery").html("4100");
    }

    var delay = 10;
    var step = 20;

    function animate(){
        var value = parseInt($(".battery").html());
        if(value < 4100 && isBatteryAnimating){
            $(".battery").html(value + step);
            setTimeout(animate,delay);
        }else{
            animateEnd();
        }
    }

    if(isStop === false){
        animateEnd();
        return;
    }

    if(!isBatteryAnimating){
        $(".battery").html(0);
        isBatteryAnimating = true;
        setTimeout(animate,delay);
    }
}