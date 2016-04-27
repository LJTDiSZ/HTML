 //判断是否是微信的浏览器
function isWx(){
    var isWx = false
    var ua = navigator.userAgent.toLowerCase();
    if ((ua.match(/MicroMessenger/i) == "micromessenger")) {//微信浏览器
        isWx = true;
    }
    return isWx;
}
//检测是否是ios
function isIos() {
    var isIos = false;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("mac") > 0) {//iphone，mac，ipad
        isIos = true;
    }
    return isIos;
}
function getRequestParam(param) {
    var url = window.location.href;
    var returnVal = '';
    var parmasArr = url.substring(url.indexOf("?") + 1, url.length)
            .split("&");
    for ( var i = 0; i < parmasArr.length; i++) {
        var paramValArr = parmasArr[i].split("=");
        if (paramValArr.length > 1
                && paramValArr[0].toLowerCase() == param.toLowerCase()) {
            for ( var j = 1; j < paramValArr.length; j++) {
                if (j == 1) {
                    returnVal = paramValArr[j];
                } else {
                    returnVal += ('=' + paramValArr[j]);
                }
            }
            break;
        }
    }
    return returnVal;
}