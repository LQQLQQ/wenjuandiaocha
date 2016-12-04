
require("../scss/sex.scss");
var $=require('jquery');
$('.sex_continue').on('click',function(){//判断单选
    $('.sex_nan_nv input').each(function(){
        if($(this).prop('checked')){
            window.location.href='../html/medicalHistory.html'
        }
    })
})

