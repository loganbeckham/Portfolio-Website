$(() => {

    // Hover menu 
    
    $('#projects').hover(() => {
        $('#dropMenu').fadeIn(1500);
        },
    () => {
        $('#dropMenu').css('display', 'none');
    }
    );



    // $('#projects').hover(() => {
    //     $('#dropMenu').css('display', 'inline');
    // },
    // () => {
    //     $('#dropMenu').css('display', 'none');
    // }
    // );

    // Click to scroll to functions

    $("#name").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#one').offset().top -100
    }, 2000);
    });

    $("#about").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#one').offset().top -100
    }, 2000,);
    });

    $("#drop1").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#two').offset().top -100
    }, 2000);
    });

    $("#drop2").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#three').offset().top -100
    }, 2000);
    });

    $("#drop3").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#four').offset().top -100
    }, 2000);
    });

    $("#contact").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#five').offset().top -100
    }, 2000);
    });


});