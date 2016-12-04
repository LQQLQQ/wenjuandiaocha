
require('../scss/feel.scss');
var $=require('jquery');
$('.feel_main_main .feel_list').on('click','span',function(){
   if($(this).hasClass('active')){
       $(this).removeClass('active')
   }else{
       $(this).addClass('active')
       $('.feel_submit').on('click',function(){
           window.location.href=''
       })
   }
})