$(function(){

    new WOW().init();

//Nút bấm danh lam
$('.nutbam_danhlam').mouseenter(function(){
    $('.gachngang_danhlam').addClass('xuathien_gachngang');
});
$('.nutbam_danhlam').mouseleave(function(){
    $('.gachngang_danhlam').removeClass('xuathien_gachngang');
});
//Nút bấm ẩm thực
$('.nutbam_amthuc').mouseenter(function(){
$('.gachngang_amthuc').addClass('xuathien_gachngang');
});
$('.nutbam_amthuc').mouseleave(function(){
$('.gachngang_amthuc').removeClass('xuathien_gachngang');
});
//nút bấm văn hóa
$('.nutbam_vanhoa').mouseenter(function(){
$('.gachngang_vanhoa').addClass('xuathien_gachngang');
});
$('.nutbam_vanhoa').mouseleave(function(){
$('.gachngang_vanhoa').removeClass('xuathien_gachngang');
});
//nút bấm trang chủ
$('.nutbam_trangchu').mouseenter(function(){
$('.gachngang_trangchu').addClass('xuathien_gachngang');
});
$('.nutbam_trangchu').mouseleave(function(){
$('.gachngang_trangchu').removeClass('xuathien_gachngang');
});
})
