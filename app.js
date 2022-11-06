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


    //onLoad animations

    $('#name').animate({
        opacity:'1'}, 800);
    $('#name').animate({
        top:'28.5vh'},800);
    $('#title').delay(1700).animate({
        opacity:'1'}, 800);
    $('#resume').fadeOut();

    // Scroll Animations
    $nameBox = $('#name');
    $titleBox = $('#title');
    $brand = $('#one').children('p');
    $hiBox = $('h3');
    $iAmA = $('#iAmA');
    $austin = $('#austin');
    $bio = $('#bio');
    $about = $('#about');
    $resume = $('#resume');
    $projects = $('#projects');
    $contact = $('#contact');
    $diamond = $('#diamond');
    scrollState = '1';

    $('#frame2').scroll(function() {
        let scrollPos = $('#frame2').scrollTop();
        if ((scrollPos > 900) && (scrollState === '1')) {
            $nameBox.animate({top: '32vh'}, 800);
            $nameBox.animate({left: '16vw'}, 1000);
            $titleBox.animate({top: '38vh'}, 800);
            $titleBox.animate({left: '16.5vw'}, 1000);
            $brand.animate({opacity: '0'}, 800);
            $hiBox.delay(1500).animate({opacity: '1'}, 800);
            $bio.delay(1500).animate({opacity: '1'}, 800);
            $iAmA.delay(1500).animate({opacity: '1'}, 800);
            $austin.delay(1500).animate({opacity: '1'}, 800);
            $resume.animate({opacity: '1'});
            $resume.delay(1500).fadeIn();
            $about.delay(500).animate({opacity: '1'}, 800);
            $projects.delay(500).animate({opacity: '1'}, 800);
            $contact.delay(500).animate({opacity: '1'}, 800);
            $diamond.animate({left: '95vw'}, 800);

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
            $bio.animate({opacity: '0'}, 800);
            $resume.fadeOut();
            $projects.animate({opacity: '0'}, 800);
            $contact.animate({opacity: '0'}, 800);
            $diamond.delay(700).animate({left: '4vw'}, 800);

            scrollState = '1';
        } else if((scrollPos > 1500) && (scrollState === '2')) {
            $nameBox.animate({left: '7.5vw'}, 800);
            $nameBox.animate({top: '4vh'}, 800);
            $titleBox.animate({opacity: '0'}, 800);
            $hiBox.animate({opacity: '0'}, 800);
            $iAmA.animate({opacity: '0'}, 800);
            $austin.animate({opacity: '0'}, 800);
            $bio.animate({opacity: '0'}, 800);
            $resume.fadeOut();

            scrollState = '3';
        } else if ((scrollPos < 1500 && (scrollState === '3'))) {
            // $nameBox.animate({opacity: '1'}, 500);
            $nameBox.animate({top: '28vh'}, 800);
            $titleBox.animate({opacity: '1'}, 800);
            $hiBox.animate({opacity: '1'}, 800);
            $iAmA.animate({opacity: '1'}, 800);
            $austin.animate({opacity: '1'}, 800);

            scrollState = '2';
        }

    })

    // Canvas Animation

    // const canvas = document.getElementById('canvas');
    // const mother = canvas.getContext('2d');
    // mother.canvas.width = 100px;
    // mother.canvas.height = 100px;
    // let particleArray;

    // function Particle(x, y, directionX, directionY, size, color) {
    //     this.x = x;
    //     this.y = y;
    //     this.directionX = directionX;
    //     this.directionY = directionY;
    //     this.size = size;
    //     this.color = color;
    // }

    // Particle.prototype.draw = function() {
    //     mother.beginPath();
    //     mother.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    //     mother.fillStyle = this.color;
    //     mother.fill();
    // }
    
    // Particle.prototype.update = function() {
    //     if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    //         this.directionX = -this.directionX;
    //     }
    //     if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    //         this.directionY = -this.directionY;
    //     }
    //     this.draw();
    //     this.x += this.directionX;
    //     this.y += this.directionY;
    // }
    // function init() {
    //     particleArray = [];
    //     for (let i=0; i<1000; i++) {
    //         let size = Math.random() * 2;
    //         let x = Math.random() * (innerWidth - size * 2);
    //         let y = Math.random() * (innerHeight - size * 2);
    //         let directionX = (Math.random() * .4) - .2;
    //         let directionY = (Math.random() * 4) + .2;
    //         let color = 'black';
            
    //         particleArray.push(new Particle(x, y, directionX, directionY, size, color))
    //     }
    // }

    // function animate() {
    //     requestAnimationFrame(animate);
    //     mother.clearRect(0,0,innerWidth,innerHeight);

    //     for (let i=0;i<particleArray.length; i++) {
    //         particleArray[i].update();
    //     }
    // }
    // init();
    // animate();

    // window.addEventListener('resize', 
    //     function() {
    //         canvas.width = innerWidth;
    //         canvas.height = innerHeight;
    //         init();
    //     })


});