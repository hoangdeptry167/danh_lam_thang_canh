$(function(){
    $(window).scroll(function(event){

        var vitribody = $('html,body').scrollTop();
        console.log('vi tri body: ' + vitribody);
        if(vitribody > 0)
        {
            console.log('được rồi');
            $('.tongquat3').addClass('xuathientongquat3');
            
            $('.tongquat').addClass('bienmat');

            $('.tongquat2').addClass('xuathientongquat2');

            $('.menu').addClass('doimaumenu');


        }
        if(vitribody == 0){
            $('.tongquat').removeClass('bienmat');
            $('.tongquat3').removeClass('xuathientongquat3');
            $('.tongquat2').removeClass('xuathientongquat2');
            $('.menu').removeClass('doimaumenu');
        }
        if(vitribody > 0 && vitribody < 300)
        {
            $('.hinhtrongmuiten').addClass('dichlen');
            $('.hinhtrongmuiten').removeClass('dichxuong');
        }
        else{
            $('.hinhtrongmuiten').addClass('dichxuong');
        }
        if(vitribody >= 900){
            $('.nutbammenu_2socngang').addClass('xuathien_menu2');
            $('.nutbammenu_2socdoc').addClass('xuathien_menu2');
            $('.nutbam_danhlam').addClass('animation_danhlam');
            $('.nutbam_amthuc').addClass('animation_amthuc');
            $('.nutbam_vanhoa').addClass('animation_vanhoa');
            $('.nutbam_trangchu').addClass('animation_trangchu');
        }
        else if(vitribody < 970)
        {
            $('.nutbammenu_2socngang').removeClass('xuathien_menu2');
            $('.nutbammenu_2socdoc').removeClass('xuathien_menu2');
            $('.nutbam_danhlam').removeClass('animation_danhlam');
            $('.nutbam_amthuc').removeClass('animation_amthuc');
            $('.nutbam_vanhoa').removeClass('animation_vanhoa');
            $('.nutbam_trangchu').removeClass('animation_trangchu');
        }
    })


})
