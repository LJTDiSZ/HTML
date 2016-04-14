        $('.banner').unslider({
                speed: 500,               //  滚动速度
                delay: 5500,              //  动画延迟
                complete: function() {},  //  动画完成的回调函数
                keys: true,               //  启动键盘导航
                dots: true,               //  显示点导航
                fluid: false,              //  支持响应式设计
                arrows: false,
                autoplay: true
        });

        //save selectors as variables to increase performance
        var $window = $(window);
        var $firstBG = $('#first');
        var $secondBG = $('#second');
        var $thirdBG = $('#third');
        var $fourthBG = $('#fourth');

        var windowHeight = 803; //get the height of the window
        // console.log(window.innerWidth + ":" + window.innerHeight);
        // console.log(document.documentElement.clientWidth + ":" + document.documentElement.clientHeight);
        // console.log(document.body.clientWidth + ":" + document.body.clientHeight);
        // console.log(screen.width + "*" + screen.height);
        // console.log(screen.availWidth + "*" + screen.availHeight);

        var minWidth = 0;
        var maxWidth = 0;
        var offsetT = 0;
        minWidth = $('#second .bottomM').width();
        maxWidth = $('#third .topM').width();
        console.log($('#third .topM').offset());
        console.log(minWidth + ":" + maxWidth);
        offsetT = $('#third .topM').offset().top;


        //apply the class "inview" to a section that is in the viewport
        $('#second').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("inview");

                // var exP = $('.example-design').css("position");
                // // console.log("posotion=" + exP);
                // if (exP != "fixed"){
                //     var exPos = $('.example-design').offset();
                //     $('.example-design').css("position", "fixed");
                //     $('.example-design').css("top", exPos.top);
                //     $('.example-design').css("left", exPos.left);
                // }
            } else {
                $(this).removeClass("inview");

                // var exP = $('.example-design').css("position");
                // if (exP == "fixed" && $thirdBG.hasClass("inview")){
                // } else {
                //     $('.example-design').css("position", "static");
                // }
            }
        });
        $('#third, #fourth').bind('inview', function (event, visible) {
            if (visible == true) {
                $(this).addClass("inview");
            } else {
                $(this).removeClass("inview");
            }
        });

        //function that is called for every pixel the user scrolls. Determines the position of the background
        /*arguments:
            x = horizontal position of background
            windowHeight = height of the viewport
            pos = position of the scrollbar
            adjuster = adjust the position of the background
            inertia = how fast the background moves in relation to scrolling
        */
        function newPos(x, windowHeight, pos, adjuster, inertia){
            return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
        }

        //function to be called whenever the window is scrolled or resized
        function Move(){
            if (typeof Move.x == 'undefined') {
                Move.x = window.pageXOffset;
                Move.y = window.pageYOffset;
            }
            var diffX = Move.x - window.pageXOffset;
            var diffY = Move.y - window.pageYOffset;
            var toDown = 0;
            if (diffX < 0) {
                // Scroll right
            } else if (diffX > 0) {
                // Scroll left
            } else if (diffY < 0) {
                toDown = 1;
                // Scroll down
            } else if (diffY > 0) {
                toDown = -1;
                // Scroll up
            } else {
                // First scroll event
            }
            Move.x = window.pageXOffset;
            Move.y = window.pageYOffset;

            var pos = $window.scrollTop(); //position of the scrollbar
            var step = (maxWidth - minWidth) * (pos - 700) / 300;
            console.log(pos + ";" + step);
            //if the second section is in view...
            if($secondBG.hasClass("inview")){
                //switch design to match-products
                if(pos > 460){
                    // $('#second .bottomM').css('opacity','1');
                    // $('.example-design').css('opacity', '0');
                    $('.second-info').fadeIn();
                    if (pos > 800){
                        $('.example-design').css('opacity', '0');
                    } else {
                        $('.example-design').css('opacity', '1');
                    }
                } else {
                    // $('#second .bottomM').css('opacity','0');
                    $('.example-design').css('opacity', '1');
                    $('.second-info').fadeOut();
                }
            }

            //if the third section is in view...
            if($thirdBG.hasClass("inview")) {
                //keep design on top when moving to third slide
            }

            //if the fourth section is in view...
            if($fourthBG.hasClass("inview")){

            }

            var $product = $('#second .bottomM');
            if (toDown == 1) {
                if (pos > 1000) {
                    $product.css('opacity', '0');
                } else if (pos > 700) {
                    var newWidth = minWidth + step;
                    console.log(newWidth);
                    if (newWidth > maxWidth) { newWidth = maxWidth; }
                    $product.width(newWidth);
                    $product.css("margin-left", "-" + $product.width() / 2 + "px");

                    if ($product.offset().top > offsetT) {
                        $('.section2-bg').css('z-index', '0');
                        $product.css('opacity', '0');
                    } else {
                        $('.section2-bg').css('z-index', '2');
                        $product.css('opacity', '1');
                    }
                } else if (pos > 460) {
                    $('.section2-bg').css('z-index', '2');
                    $product.css('opacity', '1');
                    // $product.css('z-index', '10');
                } else {
                    $('.section2-bg').css('z-index', '0');
                    $product.css('opacity', '0');
                }
            } else if (toDown == -1) {
                if (pos > 1000) {
                    $product.css('opacity', '0');
                } else if (pos > 700) {
                    var newWidth = minWidth + step;
                    console.log(newWidth);
                    if (newWidth < minWidth) { newWidth = minWidth; }
                    $product.width(newWidth);
                    $product.css("margin-left", "-" + $product.width() / 2 + "px");

                    $('.section2-bg').css('z-index', '2');
                    $product.css('opacity', '1');
                } else if (pos > 460) {
                    $product.width(minWidth);
                    $product.css("margin-left", "-" + $product.width() / 2 + "px");
                    $('.section2-bg').css('z-index', '2');
                    $product.css('opacity', '1');
                    // $product.css('z-index', '10');
                } else {
                    $('.section2-bg').css('z-index', '0');
                    $product.css('opacity', '0');
                }
            }
        }

        function MoveH(){
            if (typeof MoveH.x == 'undefined') {
                MoveH.x = window.pageXOffset;
                MoveH.y = window.pageYOffset;
            }
            var diffX = MoveH.x - window.pageXOffset;
            var diffY = MoveH.y - window.pageYOffset;
            var toDown = 0;
            if (diffX < 0) {
                // Scroll right
            } else if (diffX > 0) {
                // Scroll left
            } else if (diffY < 0) {
                toDown = 1;
                // Scroll down
            } else if (diffY > 0) {
                toDown = -1;
                // Scroll up
            } else {
                // First scroll event
            }
            MoveH.x = window.pageXOffset;
            MoveH.y = window.pageYOffset;

            var pos = $window.scrollTop(); //position of the scrollbar
            var step = (maxWidth - minWidth) * (pos - 1100) / 300;
            // console.log("MoveH:" + pos + ";" + step);
            //if the second section is in view...
            if($secondBG.hasClass("inview")){
                //switch design to match-products
                if(pos > 660){
                    // $('#second .bottomM').css('opacity','1');
                    // $('.example-design').css('opacity', '0');
                    $('.second-info').fadeIn();
                    if (pos > 900){
                        $('.example-design').css('opacity', '0');
                    } else {
                        $('.example-design').css('opacity', '1');
                    }
                } else {
                    // $('#second .bottomM').css('opacity','0');
                    $('.example-design').css('opacity', '1');
                    $('.second-info').fadeOut();
                }
            }

            //if the third section is in view...
            if($thirdBG.hasClass("inview")) {
                //keep design on top when moving to third slide
            }

            //if the fourth section is in view...
            if($fourthBG.hasClass("inview")){

            }

            var $product = $('#second .bottomM');
            if (toDown == 1) {
                if (pos > 1400) {
                    $product.css('opacity', '0');
                } else if (pos > 1100) {
                    var newWidth = minWidth + step;
                    // console.log(newWidth);
                    if (newWidth > maxWidth) { newWidth = maxWidth; }
                    $product.width(newWidth);
                    $product.css("margin-left", "-" + $product.width() / 2 + "px");

                    if ($product.offset().top > offsetT) {
                        $('.section2-bg').css('z-index', '0');
                        $product.css('opacity', '0');
                    } else {
                        $('.section2-bg').css('z-index', '2');
                        $product.css('opacity', '1');
                    }
                } else if (pos > 800) {
                    $('.section2-bg').css('z-index', '2');
                    $product.css('opacity', '1');
                    // $product.css('z-index', '10');
                } else {
                    $('.section2-bg').css('z-index', '0');
                    $product.css('opacity', '0');
                }
            } else if (toDown == -1) {
                if (pos > 1400) {
                    $product.css('opacity', '0');
                } else if (pos > 1100) {
                    var newWidth = minWidth + step;
                    // console.log(newWidth);
                    if (newWidth < minWidth) { newWidth = minWidth; }
                    $product.width(newWidth);
                    $product.css("margin-left", "-" + $product.width() / 2 + "px");

                    $('.section2-bg').css('z-index', '2');
                    $product.css('opacity', '1');
                } else if (pos > 800) {
                    $product.width(minWidth);
                    $product.css("margin-left", "-" + $product.width() / 2 + "px");
                    $('.section2-bg').css('z-index', '2');
                    $product.css('opacity', '1');
                    // $product.css('z-index', '10');
                } else {
                    $('.section2-bg').css('z-index', '0');
                    $product.css('opacity', '0');
                }
            }
        }


        $window.bind('scroll resize', function(){ //when the user is scrolling...
            if (document.documentElement.clientHeight < 900) {
                Move();
            } else {
                MoveH(); //move the background images in relation to the movement of the scrollbar
            }
        });

        var $logofile = $('#first input[type=file]');
        $('.btnUpload').click(function () {
            $logofile.click();
        });
        $logofile.change(function() {
            var path = $(this).val();
            if (!path){
                console.log("you cancelled file selection.");
                return;
            }
            console.log("selected: " + path);

            if ($logofile[0].files.length === 0) { return; }
            // var oFile = $logofile[0].files[0];
            console.log("ready to call ajax to upload logo");

            var formData = new FormData();
            formData.append('file', $logofile[0].files[0]);
            console.log("before call ajax to upload logo");
            $.ajax({
                url : '/api/logoupload',
                type : 'POST',
                data : formData,
                processData: false,  // tell jQuery not to process the data
                contentType: false,  // tell jQuery not to set contentType
                success : function(data) {
                    console.log(data);
                    if (data.success){
                        $().redirect('design.html', {'tl': data.tmpname}, "GET");
                    } else {
                        alert(data.error);
                    }
                },
                error: function(xhr, errtext, ex){
                    console.log(xhr.status);
                    console.log(xhr.readyState);
                    console.log(errtext);
                    console.log(ex);
                    console.log(xhr.responseText);
                    alert(xhr.status + ":" + xhr.readyState + ":" + errtext + ":" + ex + ":" + xhr.responseText);
                }
            });
        });