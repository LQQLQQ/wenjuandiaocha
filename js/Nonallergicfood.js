
require('../scss/Nonallergicfood.scss');
var $=require('jquery');
$('.Nonallergicfood_choose input').on('click',function(){
    var Nonallergicfood_index=$(this).attr('data-Nonallergicfood');
    if(Nonallergicfood_index=='有'){
        $('.Nonallergicfood_illness').show();

    }else{
        $('.Nonallergicfood_illness').hide();
    }

})
$('.Nonallergicfood_illness li').on('click',function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    }else{
        $(this).addClass('active')
    }
})
$('.Nonallergicfood_continue').on('click',function(){
    window.location.href='../html/dislikeFood.html'
})

