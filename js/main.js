(function ($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  var baseCarouselSettings = {
    center: true,
    loop: true,
    autoplay: true,
    stagePadding: 0,
    nav: false,
    navText: [
      '<span class="ion-ios-arrow-back">',
      '<span class="ion-ios-arrow-forward">',
    ],
  };

  // Testimony Carousel
  var carouselTestimony = function () {
    $(".carousel-testimony").owlCarousel({
      ...baseCarouselSettings,
      items: 1,
      margin: 30,
      autoplaySpeed: 2000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };

  // Tools Carousel
  var carouselTools = function () {
    $(".carousel-tools").owlCarousel({
      ...baseCarouselSettings,
      items: 3,
      margin: 10,
      autoplaySpeed: 1000,
      responsive: {
        0: {
          items: 2,
        },
        680: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  };

  var carouselService = function () {
    $(".carousel-services").owlCarousel({
      ...baseCarouselSettings,
      items: 3,
      margin: 10,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  };

  carouselTestimony();
  carouselTools();
  carouselService();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();

  var goHere = function () {
    $(".mouse-icon").on("click", function (event) {
      event.preventDefault();

      $("html,body").animate(
        {
          scrollTop: $(".goto-here").offset().top,
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });
  };
  goHere();

  $(function () {
    $(".progress").each(function () {
      var value = $(this).attr("data-value");
      var left = $(this).find(".progress-left .progress-bar");
      var right = $(this).find(".progress-right .progress-bar");

      if (value > 0) {
        if (value <= 50) {
          right.css(
            "transform",
            "rotate(" + percentageToDegrees(value) + "deg)"
          );
        } else {
          right.css("transform", "rotate(180deg)");
          left.css(
            "transform",
            "rotate(" + percentageToDegrees(value - 50) + "deg)"
          );
        }
      }
    });

    function percentageToDegrees(percentage) {
      return (percentage / 100) * 360;
    }
  });

  $(document).ready(function () {
    $("#slide-captions").owlCarousel({
      items: 1, // Number of items to display at a time
      loop: true, // Enable looping
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Time between slides (in milliseconds)
      autoplayHoverPause: true, // Pause on hover
      nav: true, // Show navigation arrows
      dots: true, // Show pagination dots
      animateOut: "slideOutDown", // Custom animation on slide out
      animateIn: "flipInX", // Custom animation on slide in
    });
  });

  $(document).ready(function () {
    var $typewriterText = $(".typewriter");
    var originalText = $typewriterText.html();
    var firstLetter = originalText.charAt(0); // First letter to retain
    var fullText = originalText.slice(1); // Rest of the text
    var typingSpeed = 100; // Typing speed in ms
    var deletingSpeed = 150; // Deleting speed in ms
    var delayBetweenCycles = 2000; // Delay before restarting the cycle
    var currentText = firstLetter; // Initialize with first letter

    function typeText(text, index) {
      if (index < text.length) {
        currentText += text.charAt(index);
        $typewriterText.html(currentText);
        setTimeout(function () {
          typeText(text, index + 1);
        }, typingSpeed);
      } else {
        setTimeout(deleteText, delayBetweenCycles); // Delay before deletion starts
      }
    }

    $(document).ready(function () {
      var $typewriterText = $(".typewriter");
      var originalText = $typewriterText.html();
      var resetTyping = function () {
        $typewriterText.html("H");
        setTimeout(function () {
          $typewriterText.html(originalText);
        }, 1000);
      };
      setInterval(resetTyping, 6000);
    });
  });

  $(document).ready(function () {
    var items = [
      "Virtual Assistant",
      "Real Estate Virtual Assistant",
      "Vacation Rental VA",
      "Virtual Coach",
      "Let's Collaborate!",
    ];
    var $textElement = $(".swapping-text");
    var currentIndex = 0;
    function switchText() {
      $textElement.fadeOut(function () {
        $textElement.html(items[currentIndex]);
        $textElement.fadeIn();
        currentIndex = (currentIndex + 1) % items.length;
      });
    }
    setInterval(switchText, 4000);
  });
})(jQuery);
