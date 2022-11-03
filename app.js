$(() => {

    // Hover menu 

    $('html', 'body').ready(function() {
        $('#dropMenu').hide();
    })

    $('#projects').on('click', () => {
        $('#dropMenu').fadeToggle(700);
        
        $('#frame2').on('scroll', () => {
            $('#dropMenu').fadeOut(); 
        })

        setTimeout(function() {
            $('#dropMenu').fadeOut();
        }, 10000);
    });

    // Fade Opacity on Hover

    $('#projects').hover(function() {
        $('#projects').fadeTo('slow', .4)
    }, function () {
        $('#projects').fadeTo('slow', 1)
    });

    $('#about').hover(function() {
        $('#about').fadeTo('slow', .4)
    }, function () {
        $('#about').fadeTo('slow', 1)
    });

    $('#contact').hover(function() {
        $('#contact').fadeTo('slow', .4)
    }, function () {
        $('#contact').fadeTo('slow', 1)
    });



    // Click to scroll to functions

    $("#name").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#one').offset().top + $('#frame2').scrollTop() - 100
    }, 2000);
    });

    $("#about").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#two').offset().top + $('#frame2').scrollTop() -117
    }, 2000,);
    });

    $("#drop1").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#three').offset().top + $('#frame2').scrollTop() -100
    }, 2000);
    });

    $("#drop2").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#four').offset().top + $('#frame2').scrollTop() -100
    }, 2000);
    });

    $("#drop3").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#four').offset().top + $('#frame2').scrollTop() -100
    }, 2000);
    });

    $("#contact").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#five').offset().top + $('#frame2').scrollTop() -100
    }, 2000);
    });


    //onLoad animations

    $('#name').animate({
        opacity:'1'}, 800);
    $('#name').animate({
        top:'900px'},800);
    $('#title').delay(1700).animate({
        opacity:'1'}, 800);

    // Scroll Animations
    $nameBox = $('#name');
    $titleBox = $('#title');
    scrollState = '1';

    $('#frame2').scroll(function() {
        let scrollPos = $('#frame2').scrollTop();
        if ((scrollPos > 800) && (scrollState === '1')) {
            $nameBox.animate({top: '150px'}, 800);
            $titleBox.animate({top: '205px'}, 800);
            scrollState = '2';
        } else if ((scrollPos < 800) && (scrollState === '2')) {
            $nameBox.animate({top: '900px'}, 800);
            // $nameBox.animate({opacity: '1'}, 500);
            $titleBox.animate({top: '955px'}, 800);
            scrollState = '1';
        } else if((scrollPos > 1200) && (scrollState === '2')) {
            $nameBox.animate({top: '50px'}, 500);
            $titleBox.animate({opacity: '0'}, 500);
            scrollState = '3';
        } else if ((scrollPos < 1200 && (scrollState === '3'))) {
            // $nameBox.animate({opacity: '1'}, 500);
            $nameBox.animate({top: '150px'}, 800);
            $titleBox.animate({opacity: '1'}, 500);
            scrollState = '2';
        }

    })


});