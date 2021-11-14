(function(){
    let scrollTop = 0;
    let goLeft = 0;
    let allowed = true;
    let pos = 0.01;

    const $window = $(window),
        $content = $(".content__item"),
        $sce3 = $(".sce3"),
        $spanCont = $('.span__cont');

        setTimeout(()=>{
            console.log('2')
            $spanCont.eq(0).removeClass('show');
            $spanCont.eq(1).addClass('show');
            setTimeout(()=>{
                $spanCont.eq(1).removeClass('show');
                $content.eq(0).removeClass('show')
                $content.eq(1).addClass('show')
            },0)
        },0)

    //오프셋값 구하기
    function getOffset(eq){
        return eq.offset().top + eq.height();
    }

    //스크롤시
    function doScroll(e){
        //scrolltop 값 구하기
        scrollTop = $window.scrollTop();

        //가로모드할 컨텐츠의 Left 값
        goLeft = $content.eq(2).offset().top - scrollTop;

        //섹션2 이상일때
        if (scrollTop <= getOffset($content.eq(1))){
            
        }


        if( scrollTop > $content.eq(2).offset().top ){
            $sce3.css("left",goLeft)
        }
    }
    //휠스크롤시 
    function doWheel(e){
        let speed = 300;
        pos *= 8.8;
        if(pos > 5.5){
            pos = 5.5;
        }
        e.preventDefault();
        
        if(e.deltaY > 0){
            console.log("up")

        } else {
            speed = -(speed);
            console.log("down")
            $('.span__cont2').css({
                transform: `translate3d(0px, ${-pos}px, 0px)`,
            })
            
        }
        
        if (allowed){
            allowed = false;
            $('html, body').stop().animate({
                scrollTop: scrollTop + speed
            },1000,'easeOutQuart');
            allowed = true;
        }
    }
    
    $(window).scroll(function(){
        requestAnimationFrame(doScroll)
    });
    window.addEventListener("wheel",doWheel,{passive:false});
})();
