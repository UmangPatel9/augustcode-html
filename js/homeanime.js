$(document).ready(function(){
    setTimeout(function(){
        /*********** about us section animation ****************/     
        var controller = new ScrollMagic.Controller();
        var t2 = new TimelineMax();

        t2.fromTo('.about-trangle1 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
          lazy1();
        }})

        .staggerFromTo('.about-section .section-title h3', 0.9, {
          xPercent: -100,
          opacity: 0,
          ease: Elastic.easeOut.config(0.1, 0.5)
        },
        {
            xPercent: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(0.1, 0.5)
        }, 0.3)

        .fromTo('.about-section .title-border svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
          pattern();
        }})

        .staggerFrom('.about-content .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "-=1")
        //.to('.about-content .sub-title .char',0.1, {opacity:0})

        .fromTo(
          '.about-content p',
          0.2,
          {opacity: 0},
          {opacity: 1},
          "-=0.5"
        )

        .staggerFromTo('.about-content li', 0.1, {
          xPercent: 100,
          opacity: 0,
          ease: Elastic.easeOut.config(0.1, 0.2)
        },
        {
            xPercent: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(0.1, 0.2)
        }, 0.1, "-=0.5")

        .fromTo(
          '.about-content .read-more',
          0.5,
          {opacity: 0},
          {opacity: 1},
          "-=1"
         )

        .fromTo('.about-trangle2 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
          abouttriangle2();
        }})

        var scene = new ScrollMagic.Scene({
          triggerElement: "#about"
        })
        .setTween(t2)
        // .addIndicators()
        .addTo(controller);
        // scene.triggerHook(0.7);
        /*********** about us section animation close ****************/
        /*********** services section animation ****************/     
        var controller = new ScrollMagic.Controller();
        var t3 = new TimelineMax();

        t3.staggerFromTo('.services-section .section-title h3', 0.4, {
          xPercent: 100,
          opacity: 0,
          ease: Elastic.easeOut.config(0.1, 0.5)
        },
        {
            xPercent: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(0.1, 0.5)
        }, 0.2)

        .fromTo('.services-section .title-border svg', 0.5,{opacity: 0},{opacity: 1, onComplete:function(){
          pattern1();
        }})

        .fromTo('.services-line1 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
          services_line1();
        }})

        .staggerFrom('.service1 .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "-=1")

        .staggerFromTo('.service1 h5', 0.4, {
          xPercent: -100,
          opacity: 0,
          ease: Elastic.easeOut.config(0.1, 0.5)
        },
        {
            xPercent: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(0.1, 0.5)
        }, 0.1, "-=1")

        .staggerFromTo(
          '.service1 p',
          0.01,
          {opacity: 0},
          {opacity: 1},
          "-=1"
         )

        .staggerFromTo(
          '.service1 .read-more',
          0.1,
          {opacity: 0},
          {opacity: 1}
         )



         .staggerFromTo('.services-triangle1', 0.4, {
          xPercent: 100,
          opacity: 0,
          ease: Elastic.easeOut.config(0.1, 0.5)
        },
        {
            xPercent: 0,
            opacity: 1,
            ease: Elastic.easeOut.config(0.1, 0.5)
        }, 0.9)

        .fromTo('.services-line2 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
          services_line2();
        }})

         .staggerFrom('.service2 .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "-=1")

         .staggerFromTo('.service2 h5', 0.4, {
           xPercent: -100,
           opacity: 0,
           ease: Elastic.easeOut.config(0.1, 0.5)
         },
         {
             xPercent: 0,
             opacity: 1,
             ease: Elastic.easeOut.config(0.1, 0.5)
         }, 0.1, "-=1")

         .staggerFromTo(
           '.service2 p',
           0.01,
           {opacity: 0},
           {opacity: 1},
           "-=1"
          )

         .staggerFromTo(
           '.service2 .read-more',
           0.1,
           {opacity: 0},
           {opacity: 1}
          )

        //  .fromTo('.services-line3 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
        //    services_line3()();
        //  }})
        //  

          .staggerFrom('.service3 .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "-=1")

          .staggerFromTo('.service3 h5', 0.4, {
            xPercent: -100,
            opacity: 0,
            ease: Elastic.easeOut.config(0.1, 0.5)
          },
          {
              xPercent: 0,
              opacity: 1,
              ease: Elastic.easeOut.config(0.1, 0.5)
          }, 0.1, "-=1")

          .staggerFromTo(
            '.service3 p',
            0.01,
            {opacity: 0},
            {opacity: 1},
            "-=1"
           )

          .staggerFromTo(
            '.service3 .read-more',
            0.1,
            {opacity: 0},
            {opacity: 1}
           )

          .fromTo('.services-left-bottom-line-2 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
            services_left_bottom_line2 ();
          }})

          .fromTo('.services-left-bottom-line-1 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
            services_left_bottom_line1 ();
          }})



         .staggerFromTo(
          '.load-more',
          0.5,
          {opacity: 0},
          {opacity: 1}
         ) 

        var scene = new ScrollMagic.Scene({
          triggerElement: "#services"
        })
        .setTween(t3)
        .addTo(controller);
         }, 6500);
});
      
//title border
function pattern1(){

    if (document.readyState === 'complete') {

      let el = document.querySelector('#pattern');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1}); 
      myAnimation.paint(); 
    }
  }

function pattern2(){

    if (document.readyState === 'complete') {

      let el = document.querySelector('#pattern');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1}); 
      myAnimation.paint(); 
    }
  }  
      
function services_line1() { 

    if (document.readyState === 'complete') {

      let el = document.querySelector('#servicesline1');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":20.7,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
      myAnimation.paint(); 
    }
}   
      
    function testimonial_line1(){ 

    if (document.readyState === 'complete') {

      let el = document.querySelector('#testimonials-line1');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10.7,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
    }
}  
      
      function services_right_top_line1() { 
  if (document.readyState === 'complete') {
    let el = document.querySelector('#servicesright-top-line-1');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616","delay":0}); 
    myAnimation.paint(); 
  }
}

function services_right_top_line2() { 

if (document.readyState === 'complete') {

    let el = document.querySelector('#servicesright-top-line-2');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616","delay":0}); 
    myAnimation.paint(); 
  }
}
      
      function services_line2() { 

  if (document.readyState === 'complete') {

    let el = document.querySelector('#servicesline2');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":20.7,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
    myAnimation.paint(); 
  }
}
      
      function services_line3() { 

  if (document.readyState === 'complete') {

    let el = document.querySelector('#services-line3');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10.7,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }

};
      
      function services_left_bottom_line2() { 

    if (document.readyState === 'complete') {

      let el = document.querySelector('#servicesleft-bottom-line-2');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
  }
}
      
      
      function services_left_bottom_line1(){ 

    if (document.readyState === 'complete') {

      let el = document.querySelector('#servicesleft-bottom-line-1');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
    }
}

/*********** services section animation close ****************/


/*********** testimonials section animation ****************/     
setTimeout(function(){
var controller = new ScrollMagic.Controller();
var t4 = new TimelineMax();

t4.staggerFromTo('.testimonials-section .section-title h3', 0.2, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.5)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0, "-=3")

.fromTo('.testimonials-section .title-border svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  pattern2();
}})

.fromTo('.testimonials-line1 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  testimonial_line1();
}})

.fromTo(
  '.testimonials-wrap1 .testimonial-block',
  0.1,
  {scale: 0},
  {scale: 1},
  "-=3"
)

.staggerFromTo('.testimonials-wrap1 .testi-traingle1', 0.1, {
  xPercent: 100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.2, 0.4)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.5, 0.7)
}, 0, "-=4")

.staggerFromTo('.testimonials-wrap1 .testi-traingle2', 0.1, {
  yPercent: 100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.2, 0.4)
},
{
    yPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.5, 0.7)
}, 0, "-=4")

.fromTo(
  '.testimonials-wrap1 .user-img',
  0.1,
  {scale: 0},
  {scale: 1},
  "-=3"
)

.staggerFrom('.testimonials-wrap1 .testimonial-block .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "-=3")

.staggerFromTo('.testimonials-wrap1 .testimonial-block h5', 0.1, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.1)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0.1, "-=4")

.fromTo(
  '.testimonials-wrap1 .testimonial-block p, .testimonials-wrap1 .testimonial-block .read-more',
  0.1,
  {opacity: 0},
  {opacity: 1},
  "-=4"
 )

// .fromTo(
//   '.testimonials-wrap1 .testimonial-block .read-more',
//   0.2,
//   {opacity: 0},
//   {opacity: 1}
//  )

 
var scene = new ScrollMagic.Scene({
  triggerElement: "#testimonials"
})
.setTween(t4)
// .addIndicators()
.addTo(controller);




var t7 = new TimelineMax();

t7.staggerFromTo('.testimonials-triangle1', 0.2, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.2, 0.4)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.5, 0.7)
}, 0, "-=5")

.fromTo(
  '.testimonials-trigger-2 .testimonial-block',
  0.1,
  {scale: 0},
  {scale: 1},
  0, "-=5"
)

.staggerFromTo('.testimonials-trigger-2 .testi-traingle1', 0.1, {
  xPercent: 100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.2, 0.4)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.5, 0.7)
}, 0, "-=5")

.staggerFromTo('.testimonials-trigger-2 .testi-traingle2', 0.1, {
  yPercent: 100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.2, 0.4)
},
{
    yPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.5, 0.7)
}, 0, "-=5")

.fromTo(
  '.testimonials-trigger-2 .user-img',
  0.1,
  {scale: 0},
  {scale: 1},
  "-=3"
 )

.staggerFrom('.testimonials-trigger-2 .testimonial-block .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.05, "-=3")

.staggerFromTo('.testimonials-trigger-2 .testimonial-block h5', 0.1, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.1)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0.1, "-=5")

.fromTo(
  '.testimonials-trigger-2 .testimonial-block p, .testimonials-trigger-2 .testimonial-block .read-more',
  0.1,
  {opacity: 0},
  {opacity: 1}
 )

// .fromTo(
//   '.testimonials-trigger-2 .testimonial-block .read-more',
//   0.2,
//   {opacity: 0},
//   {opacity: 1}
//  )

// .staggerFromTo('testimonials-trigger-2 .partnership-quote .sub-title', 0.2, {
//   xPercent: -100,
//   opacity: 0,
//   ease: Elastic.easeOut.config(0.1, 0.5)
// },
// {
//     xPercent: 0,
//     opacity: 1,
//     ease: Elastic.easeOut.config(0.1, 0.5)
// }, 0.3)

// .fromTo(
//   'testimonials-trigger-2 .partnership-quote .button',
//   0.1,
//   {scale: 0},
//   {scale: 1}
// )

var scene = new ScrollMagic.Scene({
  triggerElement: ".testimonials-trigger-2"
})
.setTween(t7)
// .addIndicators()
.addTo(controller);

var t8 = new TimelineMax();

t8.staggerFromTo('.partnership-quote .sub-title', 0.2, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.5)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0.3)

.fromTo(
  '.partnership-quote .button',
  0.2,
  {scale: 0},
  {scale: 1}
)
 
var scene = new ScrollMagic.Scene({
  triggerElement: ".partnership-quote"
})
.setTween(t8)
.addTo(controller);

}, 6500);
/*********** testimonials section animation close ****************/

//SVG ANIMTION 

//aboutTrangle1
function lazy1(){
  if (document.readyState === 'complete') {

    /**
     * Setup your Lazy Line element.
     * see README file for more settings
     */

    let el = document.querySelector('#aboutTrangle1');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeOutQuad","strokeWidth":20,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }
} 

//title border
function pattern(){

  if (document.readyState === 'complete') {
                        
    /**
     * Setup your Lazy Line element.
     * see README file for more settings
     */

    let el = document.querySelector('#pattern');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1}); 
    myAnimation.paint(); 
  }
}

  function pattern1(){

    if (document.readyState === 'complete') {
                        
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#pattern');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1}); 
      myAnimation.paint(); 
    }
  }

  function pattern2(){

    if (document.readyState === 'complete') {
                        
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#pattern');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1}); 
      myAnimation.paint(); 
    }
  }

  function services_right_top_line1() { 

        if (document.readyState === 'complete') {
                  
          /**
           * Setup your Lazy Line element.
           * see README file for more settings
           */

          let el = document.querySelector('#servicesright-top-line-1');
          let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616","delay":0}); 
          myAnimation.paint(); 
        }
  }

  function services_right_top_line2() { 

    if (document.readyState === 'complete') {
                
        /*
         * Setup your Lazy Line element.
         * see README file for more settings
         */

        let el = document.querySelector('#servicesright-top-line-2');
        let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616","delay":0}); 
        myAnimation.paint(); 
      }
    }


    function services_left_bottom_line1(){ 

        if (document.readyState === 'complete') {
                  
          /**
           * Setup your Lazy Line element.
           * see README file for more settings
           */

          let el = document.querySelector('#servicesleft-bottom-line-1');
          let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
          myAnimation.paint(); 
        }
    }

    function services_left_bottom_line2() { 

        if (document.readyState === 'complete') {
                  
          /**
           * Setup your Lazy Line element.
           * see README file for more settings
           */

          let el = document.querySelector('#servicesleft-bottom-line-2');
          let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
          myAnimation.paint(); 
      }
    }


    function services_line1() { 

        if (document.readyState === 'complete') {
                  
          /**
           * Setup your Lazy Line element.
           * see README file for more settings
           */

          let el = document.querySelector('#servicesline1');
          let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":20.7,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
          myAnimation.paint(); 
        }
    }

    function abouttriangle2(){
      if (document.readyState === 'complete') {
                            
        /**
         * Setup your Lazy Line element.
         * see README file for more settings
         */
    
        let el = document.querySelector('#abouttriangle22');
        let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":25,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
        myAnimation.paint(); 
      }
    } 

    function services_line2() { 

      if (document.readyState === 'complete') {
                
        /**
         * Setup your Lazy Line element.
         * see README file for more settings
         */

        let el = document.querySelector('#servicesline2');
        let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":20.7,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
        myAnimation.paint(); 
      }
  }


  function footer_left_bottom_line1(){ 

    if (document.readyState === 'complete') {
              
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#footerleft-bottom-line-1');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
    }
}

function footer_left_bottom_line2() { 

    if (document.readyState === 'complete') {
              
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#footerleft-bottom-line-2');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
  }
}

function testimonial_line1(){ 

    if (document.readyState === 'complete') {
              
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#testimonials-line1');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10.7,"strokeOpacity":1,"strokeColor":"#d61616"}); 
      myAnimation.paint(); 
    }
}

function services_line3() { 

  if (document.readyState === 'complete') {
            
    /**
     * Setup your Lazy Line element.
     * see README file for more settings
     */

    let el = document.querySelector('#services-line3');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10.7,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }
};



// var $menu = $('.Menu-list'),
//     $item = $('.Menu-list-item'),
//     w = $(window).width(), //window width
//     h = $(window).height(); //window height

// $(window).on('mousemove', function(e) {
//   var offsetX = 0.5 - e.pageX / w, //cursor position X
//       offsetY = 0.5 - e.pageY / h, //cursor position Y
//       dy = e.pageY - h / 2, //@h/2 = center of poster
//       dx = e.pageX - w / 2, //@w/2 = center of poster
//       theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
//       angle = theta * 180 / Math.PI - 90, //convert rad in degrees
//       offsetPoster = $menu.data('offset'),
//       transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

//   //get angle between 0-360
//   if (angle < 0) {
//     angle = angle + 360;
//   }

//   //poster transform
//   $menu.css('transform', transformPoster);

//   //parallax for each layer
//   $item.each(function() {
//     var $this = $(this),
//         offsetLayer = $this.data('offset') || 0,
//         transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

//     $this.css('transform', transformLayer);
//   });
// });