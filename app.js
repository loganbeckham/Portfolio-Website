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



    // Click to scroll to functions
    

    $("#name").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#one').offset().top + $('#frame2').scrollTop() -100
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


});