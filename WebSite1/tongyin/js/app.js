$(function () {
    console.log($('.topBar li a').height());

    $(".pagesContianer").show();

    $('.pagesContianer').fullpage();
    // $.fn.fullpage.reBuild();
    $(".fp-section").css({ //修正兼容性
        height: window.document.body.clientHeight + "px"
    });

});