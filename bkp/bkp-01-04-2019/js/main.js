$(document).ready(function(){
  
  // back to top
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

/* loader */
  setTimeout(function(){
    $('.loader-left').removeClass(' slideInLeft');
    $('.loader-left').addClass(' slideInLeftReverse');
    $('.loader-right').removeClass(' slideInRight');
    $('.loader-right').addClass(' slideInRightReverse');
  }, 5000);

  setTimeout(function(){
    $('.loader-center').addClass(' loader-logo-hide');
  }, 6000);

  setTimeout(function(){
    $(".loader").addClass(' animated zoomInCustom');
  }, 6500);

  //LOADER HIDE CODE
  setTimeout(function(){
    $(".loader").addClass(' loader-hide');

    //MENU CLICK
    $('#toggle-menu').on('click', function(){
        $(this).addClass('staylogo');
    });
      
      
    //HOME VIDEO
		$('.videoLink').on('click', function(){
			var _videow = $(".videoPaly").width();
			var _videoh = $(".videoPaly").height();
			$('#videoHome .video-wrap h2').hide();
			video = '<aside class="__videoPaly animated fadeInDownBig"><iframe src="'+ $(this).attr('data-video') +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe><div class="closeVideo" onClick="closeVideo();">Close</div></aside>';
			$('.videoPaly').hide();
			
			$('.video-wrap').css('background-color', '#000');
			$(".video-wrap").append(video);
			var chkvideohg = $(".video-wrap").height();
			
			$(".video-wrap")({
				height: chkvideohg,
				transition: 'height 800ms, background 800ms, box-shadow 800ms'
			});
		});
      
// banner code
var slideWrapper = $(".main-slider"),
    iframes = slideWrapper.find('.embed-player'),
    lazyImages = slideWrapper.find('.slide-image'),
    lazyCounter = 0;

// POST commands to YouTube or Vimeo API
function postMessageToPlayer(player, command){
  if (player == null || command == null) return;
  player.contentWindow.postMessage(JSON.stringify(command), "*");
}

// When the slide is changing
function playPauseVideo(slick, control){
  var currentSlide, slideType, startTime, player, video;

  currentSlide = slick.find(".slick-current");
  slideType = currentSlide.attr("class").split(" ")[1];
  player = currentSlide.find("iframe").get(0);
  startTime = currentSlide.data("video-start");

  if (slideType === "vimeo") {
    switch (control) {
      case "play":
        if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
          currentSlide.addClass('started');
          postMessageToPlayer(player, {
            "method": "setCurrentTime",
            "value" : startTime
          });
        }
        postMessageToPlayer(player, {
          "method": "play",
          "value" : 1
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "method": "pause",
          "value": 1
        });
        break;
    }
  } else if (slideType === "youtube") {
    switch (control) {
      case "play":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "mute"
        });
        postMessageToPlayer(player, {
          "event": "command",
          "func": "playVideo"
        });
        break;
      case "pause":
        postMessageToPlayer(player, {
          "event": "command",
          "func": "pauseVideo"
        });
        break;
    }
  } else if (slideType === "video") {
    video = currentSlide.children("video").get(0);
    if (video != null) {
      if (control === "play"){
        video.play();
      } else {
        video.pause();
      }
    }
  }
}

// Resize player
function resizePlayer(iframes, ratio) {
  if (!iframes[0]) return;
  var win = $(".main-slider"),
      width = win.width(),
      playerWidth,
      height = win.height(),
      playerHeight,
      ratio = ratio || 16/9;

  iframes.each(function(){
    var current = $(this);
    if (width / ratio < height) {
      playerWidth = Math.ceil(height * ratio);
      current.width(playerWidth).height(height).css({
        left: (width - playerWidth) / 2,
         top: 0
        });
    } else {
      playerHeight = Math.ceil(width / ratio);
      current.width(width).height(playerHeight).css({
        left: 0,
        top: (height - playerHeight) / 2
      });
    }
  });
}

// DOM Ready
$(function() {
  // Initialize
  slideWrapper.on("init", function(slick){
    slick = $(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
    resizePlayer(iframes, 16/9);
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    playPauseVideo(slick,"play");
  });
  slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
    lazyCounter++;
    if (lazyCounter === lazyImages.length){
      lazyImages.addClass('show');
      // slideWrapper.slick("slickPlay");
    }
  });

  //start the slider
  slideWrapper.slick({
    // fade:true,
    autoplaySpeed:4000,
    lazyLoad:"progressive",
    speed:600,
    arrows:false,
    dots:true,
    cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  });
});

// Resize event
$(window).on("resize.slickVideoPlayer", function(){  
  resizePlayer(iframes, 16/9);
});

// banner code close
 



/******************* banner text animation  ***********************/

  Splitting();

      var el = $(".letter");
      var animation = new TimelineMax({ paused: true }).staggerTo(
      '.caption h3 .char',
      0.3,
      {
        y: -15,
        ease: Power1.easeIn,
        onComplete() {
          TweenMax.to(this.target, 0.3, {
            y: 0,
            ease: Power3.easeOut,
            delay: 0.2
          });
        }
      },
      0.05
    );

// el.addEventListener(
//   "mouseover",
//   e => !animation.isActive() && animation.restart()
// );


  $('.caption h3 .char').mouseover( function() {
    return !animation.isActive() && animation.restart();

  });


  // var animation1 = new TimelineMax({ paused: true }).staggerTo(
  //   '.caption p .char',
  //   0.2,
  //   {
  //     y: -15,
  //     ease: Power1.easeIn,
  //     onComplete() {
  //       TweenMax.to(this.target, 0.3, {
  //         y: 0,
  //         ease: Power3.easeOut,
  //         delay: 0.1
  //       });
  //     }
  //   },
  //   0.05
  // );
  // $('.caption p .char').mouseover( function() {
  //   return !animation1.isActive() && animation1.restart();

  // });


var controller = new ScrollMagic.Controller();
var t5 = new TimelineMax();

t5.staggerFromTo('.logo img', 0.9, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.5)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0.2)


.staggerFrom('.caption h3 .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.05, "+=0.05")

.fromTo(
  '.caption p .char',
  0.01,
  {opacity: 0},
  {opacity: 1}
 )

var scene = new ScrollMagic.Scene({
  triggerElement: ".banner-section"
})

.setTween(t5)
.addTo(controller);
/******************* banner text animation close  ***********************/





/*********** footer section animation ****************/     
var controller = new ScrollMagic.Controller();
var t5 = new TimelineMax();

t5.fromTo('.footer-left-bottom-line-2 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  footer_left_bottom_line2 ();
}})
 
.fromTo('.footer-left-bottom-line-1 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  footer_left_bottom_line1 ();
}})

.fromTo(
  '.footer-logo',
  0.5,
  {scale: 0},
  {scale: 1},
  "-=1"
 )

.staggerFromTo('.footer-menu li, .social-icons a, .register-partners > .row > .col', 0.01, {
  xPercent: 100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.01, 0.02)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.01, 0.02)
}, 0.1, "-=1")

.fromTo(
  '.footer-block',
  0.2,
  {opacity: 0},
  {opacity: 1}
)

.staggerFrom('.copyright .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "+=0.05")
 
var scene = new ScrollMagic.Scene({
  triggerElement: ".site-footer"
})
.setTween(t5)
.addTo(controller);

function footer_left_bottom_line1(){ 

    if (document.readyState === 'complete') {

      let el = document.querySelector('#footerleft-bottom-line-1');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
    }
}

function footer_left_bottom_line2() { 

    if (document.readyState === 'complete') {

      let el = document.querySelector('#footerleft-bottom-line-2');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
  }
}      

/*********** footer section animation close ****************/




}, 6500);
/* loader close */


/* [Smart open close] */
$("body").on("click", "#toggle-menu",function(){
  $('.main-menu-wrap').addClass('menu-active');
  $('.overlay').addClass('overlay-display');
  $('html').addClass('no-scroll');
  $('.main-menu li').addClass('animated fadeInUp');
});

/* [Smart menu close] */
$("body").on("click", ".menu-close",function(){
  $('.main-menu-wrap').removeClass('menu-active');
  $('.overlay').removeClass('overlay-display');
  $('html').removeClass('no-scroll');
  $('.main-menu li').removeClass('animated fadeInUp');
  $('#toggle-menu').removeClass('staylogo');    
});


// Add smooth scrolling to all links
$("a[href*='#']").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});


    
//MODAL
var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
		coverLayer = $('.cd-cover-layer');
	
	/*
		convert a cubic bezier value to a custom mina easing
		http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
	*/
	var duration = 600,
		epsilon = (1000 / 60 / duration) / 4,
		firstCustomMinaAnimation = bezier(.63,.35,.48,.92, epsilon);

	modalTriggerBts.each(function(){
		initModal($(this));
	});

	function initModal(modalTrigger) {
		var modalTriggerId =  modalTrigger.attr('id'),
			modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]'),
			svgCoverLayer = modal.children('.cd-svg-bg'),
			paths = svgCoverLayer.find('path'),
			pathsArray = [];
		//store Snap objects
		pathsArray[0] = Snap('#'+paths.eq(0).attr('id')),
		pathsArray[1] = Snap('#'+paths.eq(1).attr('id')),
		pathsArray[2] = Snap('#'+paths.eq(2).attr('id'));

		//store path 'd' attribute values	
		var pathSteps = [];
		pathSteps[0] = svgCoverLayer.data('step1');
		pathSteps[1] = svgCoverLayer.data('step2');
		pathSteps[2] = svgCoverLayer.data('step3');
		pathSteps[3] = svgCoverLayer.data('step4');
		pathSteps[4] = svgCoverLayer.data('step5');
		pathSteps[5] = svgCoverLayer.data('step6');
		
		//open modal window
		modalTrigger.on('click', function(event){
			event.preventDefault();
			modal.addClass('modal-is-visible');
			coverLayer.addClass('modal-is-visible');
			animateModal(pathsArray, pathSteps, duration, 'open');
		});

		//close modal window
		modal.on('click', '.modal-close', function(event){
			event.preventDefault();
			modal.removeClass('modal-is-visible');
			coverLayer.removeClass('modal-is-visible');
			animateModal(pathsArray, pathSteps, duration, 'close');
		});
	}

	function animateModal(paths, pathSteps, duration, animationType) {
		var path1 = ( animationType == 'open' ) ? pathSteps[1] : pathSteps[0],
			path2 = ( animationType == 'open' ) ? pathSteps[3] : pathSteps[2],
			path3 = ( animationType == 'open' ) ? pathSteps[5] : pathSteps[4];
		paths[0].animate({'d': path1}, duration, firstCustomMinaAnimation);
		paths[1].animate({'d': path2}, duration, firstCustomMinaAnimation);
		paths[2].animate({'d': path3}, duration, firstCustomMinaAnimation);
	}

	function bezier(x1, y1, x2, y2, epsilon){
		//https://github.com/arian/cubic-bezier
		var curveX = function(t){
			var v = 1 - t;
			return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
		};

		var curveY = function(t){
			var v = 1 - t;
			return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
		};

		var derivativeCurveX = function(t){
			var v = 1 - t;
			return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
		};

		return function(t){

			var x = t, t0, t1, t2, x2, d2, i;

			// First try a few iterations of Newton's method -- normally very fast.
			for (t2 = x, i = 0; i < 8; i++){
				x2 = curveX(t2) - x;
				if (Math.abs(x2) < epsilon) return curveY(t2);
				d2 = derivativeCurveX(t2);
				if (Math.abs(d2) < 1e-6) break;
				t2 = t2 - x2 / d2;
			}

			t0 = 0, t1 = 1, t2 = x;

			if (t2 < t0) return curveY(t0);
			if (t2 > t1) return curveY(t1);

			// Fallback to the bisection method for reliability.
			while (t0 < t1){
				x2 = curveX(t2);
				if (Math.abs(x2 - x) < epsilon) return curveY(t2);
				if (x > x2) t0 = t2;
				else t1 = t2;
				t2 = (t1 - t0) * .5 + t0;
			}

			// Failure
			return curveY(t2);

		};
	};    
  
  
});  // document.ready close

  






/***************************** menu js *********************/
var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //poster transform
  $menu.css('transform', transformPoster);

  //parallax for each layer
  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});
/***************************** menu js close *********************/

        
/***************************** mouse pointer circle *********************/        
        var container = document.getElementById("main");
        var circle = document.querySelector(".circle");

        $( "a" ).hover(
          function() {
            $( ".circle" ).addClass( "bgremove" );
          }, function() {
            $( ".circle" ).removeClass( "bgremove" );
          }
        );


//        TweenMax.set(".section", {
//          backgroundColor: function() {
//            return Math.random() * 0xffffff;
//          }
//        });

        TweenMax.set(circle, { scale: 0, xPercent: -50, yPercent: -50 });

        container.addEventListener("pointerenter", function(e) {
          TweenMax.to(circle, 0.1, { scale: 1, opacity: 0.8 });
          positionCircle(e);
        });

        container.addEventListener("pointerleave", function(e) {
          TweenMax.to(circle, 0.1, { scale: 0, opacity: 0 });
          positionCircle(e);
        });

        container.addEventListener("pointermove", function(e) {
          positionCircle(e);
            
        });

        function positionCircle(e) {
          var rect = container.getBoundingClientRect();  
          var relX = e.pageX - container.offsetLeft;
          var relY = e.pageY - container.offsetTop;

          TweenMax.to(circle, 0.3, { x: relX, y: relY });
        }
        
        $(document).mousemove(function(event){
            $( ".circle" ).addClass( "bgremove" );
        });
        
        lastTimeMouseMoved = new Date().getTime();
        var t = setTimeout(function() {
          var currentTime = new Date().getTime();
          if (currentTime - lastTimeMouseMoved > 1000) {
            $( ".circle" ).removeClass( "bgremove" );
            // $('.fall').remove();
          }
        }, 1000)
/***************************** mouse pointer circle close *********************/   

//TITL.JS        
const tilt = $('.tilt').tilt({
    glare: true,
    maxGlare: 0.3,
    maxTilt: 2
});

const tilt2 = $('.tilt2').tilt({
    glare: true,
    maxGlare: 0.3,
    maxTilt: 20
});


function closeVideo(){
	$('.videoPaly').show();
	$('#videoHome .video-wrap h2').show();
	$('aside.__videoPaly').remove();
}


//BLOCK REVEAL
//var blockreveal = new ScrollMagic.Controller();
//$('.setanime').each(function(){
//    var thiselem = this;
//    
//    var bReveal = new TimelineMax();
//    bReveal
//
//      /*Black block up to 400px */
//      .to(".reveal-block__black", 0.6, { ease: Power3.easeIn, width: '100%'}, "+=0.4")
//
//      /*Orange block up to 400px */
//      .to(".reveal-block__orange", 0.6, { ease: Power3.easeIn, width: '100%'}, "+=0.3")
//
//      /*Black block width shrinks down to 0px */
//      .to(".reveal-block__black", 0.1, { width: 0}, "+=0")  
//
//      /*Orange block moves away Layer text 2 appears*/
//      .to(".reveal-block__orange", 0.6, {ease: Power3.easeOut, xPercent: 100}, "+=0.1")
//
//    var brScene = new ScrollMagic.Scene({
//        triggerElement:thiselem,
//        reverse:false
//    })
//    .setTween(bReveal)
//    .addTo(blockreveal);
//});

var controller = new ScrollMagic.Controller();

$(".setanime").each(function() {
  var tl = new TimelineMax();
  var cov = $(this).find(".reveal-block__black");
  var cov2 = $(this).find(".reveal-block__orange");
  var img = $(this).find("img");

  tl
    .from(cov, 0.5, { scaleX: 0, transformOrigin: "left" })
    .to(cov, 0.5, { scaleX: 0, transformOrigin: "right" }, "reveal")
    .from(cov2, 0.5, { scaleX: 0, transformOrigin: "left"}, "-=1.2" )
    .to(cov2, 0.5, { scaleX: 0, transformOrigin: "right" }, "reveal", "-=1.2")
    .from(img, 1, { opacity: 0 }, "reveal");

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7
  })
    .setTween(tl)
    .addTo(controller);
    
    
});


//SMOOTH SCROLL
$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $(".servicesection").each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $(".sidebar ul li a.active").removeClass("active");
                    $(".sidebar ul li a").eq(i).addClass("active");
            }
        });
}).scroll();




//TEAM POPUP
















