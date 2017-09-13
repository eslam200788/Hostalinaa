/*global $, alert, console, mixer */
$(function () {
    'use strict';
    $(window).width(function () {
        if ($(window).width() < 768) {
        
            $('.header .sale-date, .header .sale').fadeOut();
        } else {
        
            $('.header .sale-date, .header .sale').fadeIn();
        
        }
    });
   
    $('.top-services .choose-us ul li a').click(function () {
        
        $('.top-services .choose-us .details').hide(500);
        
        $('#' + $(this).data('value')).show(1000);
        
        $(this).parent().addClass('select').siblings().removeClass('select');
   
    });
    
    if ($(window).width() < 768) {
        
        $('.top-services .choose-us .details img').css('width', '30%');
        
    }
    
    
    
    (function autoSlider() {
        
        $('.clients .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(4000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(4000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active');
                    $('.clients .say').eq(0).addClass('active').fadeIn();
                    autoSlider();
                    
                });
            }
        
        });
        
        $(window).width(function () {
            if ($(window).width() < 1200) {
        
                $('.features img').css('margin-left', ($('.container').width()) / 3);
                
            }
        });
        
    }());
    
    
    
    
    
});

