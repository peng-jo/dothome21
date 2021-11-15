(function(){
    let scrollTop = 0;
    let goLeft = 0;
    let opacity = 0;
    let flag = true;
    // let allowed = true;
    // let allowed2 = true;
    // let pos = 20;

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
            },1500)
        },1500)

    //오프셋값 구하기
    function getOffset(eq){
        return eq.offset().top + eq.height();
    }
    function getOffsetTop(eq){
        return eq.offset().top;
    }
    function getPreOffset(eq){
        return eq.offset().top - 100;
    }

    //스크롤시
    function doScroll(e){
        //scrolltop 값 구하기
        scrollTop = $window.scrollTop();

        //가로모드할 컨텐츠의 Left 값
        goLeft = $content.eq(2).offset().top - $content.eq(2).height()  - scrollTop;

        
        if (scrollTop <= getOffset($content.eq(1)) && scrollTop > getOffsetTop($content.eq(1))){
            opacity = (getOffset($content.eq(1)) - scrollTop) / 3;

            console.log(opacity);
            $sce3.css("left",goLeft )
            $content.eq(1).css({opacity:`${opacity}%`});

            if( flag &&  scrollTop > getPreOffset($content.eq(2)) ){
                $sce3.delay(1000).css({backgroundColor:'#F9DB53'})
                flag = false;
            }
        }

        
    }
    // //휠스크롤시 
    // function doWheel(e){
    //     let speed = 300;
    //     e.preventDefault();
        
    //     if(e.deltaY > 0){
    //         console.log("up")

    //     } else {
    //         speed = -(speed);
    //         if (allowed2 ){
                
    //             $('.span__cont2').stop().animate({transform: `translate3d(0px, 0px, 0px)`},{
    //                 step: function(){
    //                     $(this).css({ transform: `translate3d(0px, ${-pos}px, 0px)`})
    //                 }
    //             }).delay(1000).css({ transform: `translate3d(0px, 0px, 0px)`},function(){
    //                 allowed2 = true;
    //             });
    //         }       
            
    //     }
        
    //     if (allowed){
    //         allowed = false;
    //         $('html, body').stop().animate({
    //             scrollTop: scrollTop + speed
    //         },1000,'easeOutQuart');
    //         allowed = true;
    //     }
    // }
    
    $(window).scroll(function(){
        requestAnimationFrame(doScroll)
    });
    // window.addEventListener("wheel",doWheel,{passive:false});
})();
