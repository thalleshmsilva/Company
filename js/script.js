$(function() {
    // Menu - início
    $('nav.mobile').click(function() {
        $('nav.mobile').find('ul').slideToggle();
    })

    function scroll(href) {
        var offSetTop = $(href).offset().top;
        $('html, body').animate({scrollTop: offSetTop});
        return false;
    }

    $('nav li').click(function() {
        var href = $(this).find('a').attr('href');
        scroll(href);
    })

    $('nav a').click(function() {
        var href = $(this).attr('href');
        scroll(href);
    })
    // Menu - fim

    // Scroll equipe - início
    var amt;
    initSlider();
    function initSlider() {
        amt = $('.sobreAutor').length;
        var sizeContainer = 100 * amt;
        var sizeBox = 100 / amt;
        $('.scrollBox').css('width', sizeContainer + '%');
        $('.sobreAutor').css('width', sizeBox + '%');

        for(var i = 0; i < amt; i++) {
            if(i == 0)
                $('.bullets').append('<span style="background-color:#aaaaaa;"></span>');
            else
                $('.bullets').append('<span></span>');
        }
    }

    var cursor = 0;
    var autoPlay = setInterval(function(){
        cursor++;
        if(cursor == amt)
            cursor = 0;
        goToSlider(cursor);
    },5000)

    function goToSlider(cursor) {
        var offSetX = $('.sobreAutor').eq(cursor).offset().left - $('.scrollBox').offset().left;
        $('.bullets span').css('background-color','#c8c8c8');
        $('.bullets span').eq(cursor).css('background-color','#aaaaaa');
        $('.scrollEquipe').animate({scrollLeft: offSetX + 'px'});
    }

    $('.bullets span').click(function() {
        cursor = $(this).index();
        goToSlider(cursor);
        clearInterval(autoPlay);
    })
    // Scroll equipe - fim
});