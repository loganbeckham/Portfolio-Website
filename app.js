$(() => {

    // Front Page fade & button functions

    $('#a1').hover(function() {
        $('#a1').fadeTo('slow', .4)
        $('#shooting-star').fadeTo('slow', .4)
        // $('#a1').css('slow', .4)
    }, function () {
        $('#a1').fadeTo('slow', 1)
        $('#shooting-star').fadeTo('slow', 1)
    });

    $('#b1').hover(function() {
        $('#b1').fadeTo('slow', .4)
        $('#shooting-star2').fadeTo('slow', .4)
        // $('#b1').css('slow', .4)
    }, function () {
        $('#b1').fadeTo('slow', 1)
        $('#shooting-star2').fadeTo('slow', 1)
    });

    $('#c1').hover(function() {
        $('#c1').fadeTo('slow', .4)
        $('#shooting-star3').fadeTo('slow',.4)
        // $('#c1').css('slow', .4)
    }, function () {
        $('#c1').fadeTo('slow', 1)
        $('#shooting-star3').fadeTo('slow',1)
    });

    // Click to scroll to functions

    $("#a1").on('click', function() {
        $('#frame2').animate({
            scrollTop: $('#two').offset().top + $('#frame2').scrollTop() - 100
    }, 2000);
    });

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

    $("#c1").on('click', function() {
        
        $('#frame2').animate({
            scrollTop: $('#five').offset().top + $('#frame2').scrollTop() - 100
    }, 2000);
    });

    // Toggle menu 

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


    $('#b1').on('click', () => {
        $('#dropMenu').fadeToggle(700);
                
        $('#frame2').on('scroll', () => {
            $('#dropMenu').fadeOut(); 
        })
        setTimeout(function() {
            $('#dropMenu').fadeOut();
        }, 10000);
        });


    //     
    const $nameBox = $('#name');
    const $titleBox = $('#title');
    const $brand = $('#one').children('p');
    const $hiBox = $('h3');
    const $iAmA = $('#iAmA');
    const $austin = $('#austin');
    const $bio = $('#bio');
    const $about = $('#about');
    const $resume = $('#resume');
    const $projects = $('#projects');
    const $contact = $('#contact');
    const $diamond = $('#diamond');
    const $git = $('#git');
    const $linked = $('#linkedIn')
    const $contactMe = $('#contactMe');
    const $email = $('#email');
    const $number = $('#number');
    
    //onLoad animations

    $('#name').animate({
        opacity:'1'}, 800);
    $('#name').animate({
        top:'28.5vh'},800);
    $('#title').delay(1700).animate({
        opacity:'1'}, 800);
    $resume.fadeOut();
    $about.fadeOut();
    $projects.fadeOut();
    $contact.fadeOut();
    $('#twoStar').fadeOut();

    scrollState = '1';

    // Scroll Animations

    $('#frame2').scroll(function() {
        let scrollPos = $('#frame2').scrollTop();
        if ((scrollPos > 900) && (scrollState === '1')) {
            $nameBox.animate({top: '32vh'}, 800);
            $nameBox.animate({left: '15.9vw'}, 1000);
            $titleBox.animate({top: '37.9vh'}, 800);
            $titleBox.animate({left: '16.4vw'}, 1000);
            $brand.animate({opacity: '0'}, 800);
            $hiBox.delay(1500).animate({opacity: '1'}, 800);
            $bio.delay(1500).animate({opacity: '1'}, 800);
            $iAmA.delay(1500).animate({opacity: '1'}, 800);
            $austin.delay(1500).animate({opacity: '1'}, 800);
            $resume.animate({opacity: '1'});
            $resume.delay(1500).fadeIn();
            $about.delay(500).animate({opacity: '1'}, 800);
            $about.fadeIn();
            $projects.delay(500).animate({opacity: '1'}, 800);
            $projects.fadeIn();
            $contact.delay(500).animate({opacity: '1'}, 800);
            $contact.fadeIn();
            $diamond.animate({left: '95vw'}, 800);
            $('#twoStar').fadeIn();
            $('#twoStar').delay(1000).animate({opacity: '.5'},800);

            $projects.hover(function() {
                $('#projects').fadeTo('slow', .4)
            }, function () {
                $('#projects').fadeTo('slow', 1)
            });
        
            $about.hover(function() {
                $('#about').fadeTo('slow', .4)
            }, function () {
                $('#about').fadeTo('slow', 1)
            });
        
            $contact.hover(function() {
                $('#contact').fadeTo('slow', .4)
            }, function () {
                $('#contact').fadeTo('slow', 1)
            });

            scrollState = '2';
        } else if ((scrollPos < 900) && (scrollState === '2')) {
            $nameBox.animate({top: '28.5vh'}, 800);
            $nameBox.animate({left: '7.5vw'}, 1000);
            $titleBox.animate({top: '32vh'}, 800);
            $titleBox.animate({left: '9.5vw'}, 1000);
            $brand.delay(1500).animate({opacity: '1'}, 800);
            $hiBox.animate({opacity: '0'}, 800);
            $iAmA.animate({opacity: '0'}, 800);
            $austin.animate({opacity: '0'}, 800);
            $about.animate({opacity: '0'}, 800);
            $about.fadeOut();
            $bio.animate({opacity: '0'}, 800);
            $resume.fadeOut();
            $projects.animate({opacity: '0'}, 800);
            $projects.fadeOut();
            $contact.animate({opacity: '0'}, 800);
            $contact.fadeOut();
            $diamond.delay(700).animate({left: '4vw'}, 800);
            $('#twoStar').animate({opacity: '0'}, 800);

            scrollState = '1';
        } else if((scrollPos > 1500) && (scrollState === '2')) {
            $nameBox.animate({left: '5vw'}, 800);
            $nameBox.animate({top: '3.7vh'}, 800);
            $titleBox.animate({opacity: '0'}, 800);
            $hiBox.animate({opacity: '0'}, 800);
            $iAmA.animate({opacity: '0'}, 800);
            $austin.animate({opacity: '0'}, 800);
            $bio.animate({opacity: '0'}, 800);
            $resume.fadeOut();
            $('#twoStar').animate({opacity: '0'}, 800);

            scrollState = '3';
        } else if ((scrollPos < 1500 && (scrollState === '3'))) {
            // $nameBox.animate({opacity: '1'}, 500);
            $nameBox.animate({top: '32vh'}, 800);
            $nameBox.animate({left: '16vw'}, 800);
            $titleBox.animate({opacity: '1'}, 800);
            $hiBox.animate({opacity: '1'}, 800);
            $iAmA.animate({opacity: '1'}, 800);
            $austin.animate({opacity: '1'}, 800);
            $bio.animate({opacity: '1'}, 800);
            $resume.fadeIn();
            $('#twoStar').animate({opacity: '.5'},800)

            scrollState = '2';

        } else if((scrollPos > 2300) && (scrollState === '3')) {
           
            scrollState = '4';
        } else if ((scrollPos < 2300 && (scrollState === '4'))) {

            scrollState = '3';
        } else if((scrollPos > 3200) && (scrollState === '4')) {
           
            scrollState = '5';
        } else if ((scrollPos < 3200 && (scrollState === '5'))) {

            scrollState = '4';
        } else if ((scrollPos > 4000 && (scrollState === '5'))) {
            // $nameBox.animate({opacity: '1'}, 500);
            $git.animate({right: '51vw'}, 800);
            $linked.animate({right: '49vw'}, 800);
            $git.animate({top: '48.9vh'}, 800);
            $linked.animate({top: '49vh'}, 800);
            $contactMe.animate({opacity: '1'}, 800);
            $email.animate({opacity: '1'}, 800);
            $number.animate({opacity: '1'}, 800);

            scrollState = '6';
        } else if ((scrollPos < 4000 && (scrollState === '6'))) {
            // $nameBox.animate({opacity: '1'}, 500);
            $git.animate({top: '84vh'}, 800);
            $linked.animate({top: '80vh'}, 800);
            $git.animate({right: '1.5vw'}, 800);
            $linked.animate({right: '1.5vw'}, 800);
            $contactMe.animate({opacity: '0'}, 800);
            $email.animate({opacity: '0'}, 800);
            $number.animate({opacity: '0'}, 800);

            scrollState = '4';

    }})

});