/*==========================================
            SERVICES
==========================================*/
$(function () {
  // animate on scroll
  new WOW().init();
});
/*==========================================
            WORK
==========================================*/
$(function () {
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
/*==========================================
           TEAM
==========================================*/
$(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      // breakpoint form 0 up
      0: {
        items: 1,
      },
      //  breakpoint form 480 up
      480: {
        items: 2,
      },
      // breakpoint form 768 up
      768: {
        items: 3,
      },
    },
  });
});
/*==========================================
           TESTIMONIALS
==========================================*/
$(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});
/*==========================================
           CLIENTS
==========================================*/
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartspeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      // breakpoint form 0 up
      0: {
        items: 1,
      },
      //  breakpoint form 480 up
      480: {
        items: 3,
      },
      // breakpoint form 768 up
      768: {
        items: 5,
      },
      // breakpoint form 992 up
      992: {
        items: 6,
      },
    },
  });
});
/*==========================================
           NAVIGATION
==========================================*/
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      // hide-nav
      $("nav").removeClass("bakery-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      // show-nav
      $("nav").addClass("bakery-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});
//////// Smooth scrolling ///////////
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    // get.return id like #about #work etc;///
    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
// Close mobile menu on click
$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});
