


particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });


//Animated Heading  


var typed = new Typed('.element', {
    strings: ['Front-End Developer', 'Back-End Developer', 'Competitive Coder', 'Designer'],
    typedSpeed: 50,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});

//-----------------------------------//


$(window).on('scroll', function () {
    var menu_area = $('.top');
    if ($(window).scrollTop() > 80) {
        menu_area.addClass('navAdd');
        $(".top a").addClass("textAdd");
    } else {
        menu_area.removeClass('navAdd');
        $(".top a").removeClass("textAdd");
    }
});

// ** color change navbar
var linkContainer = document.querySelector(".nav ul");


var links = linkContainer.querySelectorAll("li");


for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

$(document).scroll(function () {
    var st = $(this).scrollTop();

    $(".nav ul").forEach(function () {
        if (st > $(this).offset().top && st <= $(this).offset().top + $(this).height()) {
            var id = $(this).attr('id');
            $('a[href="#' + id + '"]').addClass('active');
        } else {
            var id = $(this).attr('id');
            $('a[href="#' + id + '"]').removeClass('active');
        }
    });

});

//************ smooth scroll js

$('.nav a').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
});