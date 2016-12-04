
require('../scss/medicalHistory.scss');
var $=require('jquery');
$('.medicalHistory_choose').on('click','input',function(){
    var index=$(this).attr('data-title');
    if( index=='有'){
        $('.illness').show();

    }else{
        $('.illness').hide();
    }
})
$('.illness li').on('click',function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
})
$('.medicalHistory_continue').on('click',function(){
    window.location.href='../html/Nonallergicfood .html';
})
