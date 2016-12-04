
require('../scss/levelQuality.scss');
var $=require('jquery');
//宜食
    $('.span_EasyEat').on('click',function(){
        //$(this).html("∧");
        $('.levelQuality_main_main_header').hide();
        $('.levelQuality_main_main_header1').show();
        $(' .EasyEat').slideDown()
        if($(".span_EasyEat").html("∧")){
            $('.span_EasyEat').on('click',function(){
                $(".span_EasyEat").html("∨");
                $('.EasyEat').slideUp()
            })
        }
    })
//不易食
$('.span_noEasyEat').on('click',function(){
    $('.levelQuality_main_main_header').hide();
    $('.levelQuality_main_main_header1').show();
    $('.noEasyEat').slideDown();
    if($('.span_noEasyEat').html('∧')){
        $('.span_noEasyEat').on('click',function(){
            $('.span_noEasyEat').html('∨');
            $('.noEasyEat').slideUp();
        })


    }
})
//点击头部
$('.levelQuality_main_main_header').on('click',function(){
    $(this).hide();
    $('.levelQuality_main_main_header2').show();
    $('.levelQuality_main_main_header2').on('click',function(){
        $('.levelQuality_main_main_header2_content').show();
        $('.fulltext').on('click',function(){
            $(this).find('span').html('∧');
            $('.fulltext_text').show();
            if($('.fulltext span').html('∧')){
                $('.fulltext').on('click',function(){
                    $('.fulltext span').html('∨')
                    $('.fulltext_text').hide();
                })
            }
        })
    })


})
//点击第三个头
$('.levelQuality_main_main_header2').on('click',function(){
    //$(this).hide();
    $('.levelQuality_main_main_header2_content').hide();
    $('.levelQuality_main_main_header').show();

})



