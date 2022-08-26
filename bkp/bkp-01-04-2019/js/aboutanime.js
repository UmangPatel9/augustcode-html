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

//      .fromTo('.about-section .title-border svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
//        pattern();
//      }})
      
      .staggerFrom('.about-content .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.05, "+=0.1")
      
      .fromTo(
        '.about-content p',
        0.5,
        {opacity: 0},
        {opacity: 1}
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
      }, 0.2)

      .fromTo(
        '.about-content .read-more',
        0.5,
        {opacity: 0},
        {opacity: 1}
       )
       
//      .fromTo('.about-trangle2 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
//        abouttriangle2();
//      }})
      
      var scene = new ScrollMagic.Scene({
        triggerElement: "#about"
      })
      .setTween(t2)
      .addTo(controller);
/*********** about us section animation close ****************/


/*********** about page video section animation ****************/     
var controller = new ScrollMagic.Controller();
var t9 = new TimelineMax();

t9.staggerFromTo(
  '.video-wrap',
  1.0,
  {scale: 0},
  {scale: 1}, 0.5
)

.fromTo('#downtriangle', 0.2,{display: "none"},{display: "block", onComplete:function(){
  downtriangle();
}})

var scene = new ScrollMagic.Scene({
  triggerElement: "#videoHome"
})
.setTween(t10)
.addTo(controller);
/*********** about page video section animation close ****************/  


/*********** about page banner section animation ****************/     
var controller = new ScrollMagic.Controller();
var t11 = new TimelineMax();

t11.staggerFromTo('.inner-page-banner h2', 0.9, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.5),
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 1.9)

var scene = new ScrollMagic.Scene({
  triggerElement: ".inner-page-banner"
})
.setTween(t11)
.addTo(controller);
/*********** about page banner section animation close ****************/  

/*********** about page top section animation ****************/     
var controller = new ScrollMagic.Controller();
var t12 = new TimelineMax();

t12.staggerFromTo(
  '.about-page-section p',
  1.0,
  {opacity: 0},
  {opacity: 1}
)

var scene = new ScrollMagic.Scene({
  triggerElement: ".about-page-section"
})
.setTween(t12)
.addTo(controller);
/*********** about page top section animation close ****************/  

 


/*********** about page story section animation ****************/     
var controller = new ScrollMagic.Controller();
var t10 = new TimelineMax();

t10.staggerFromTo('.story-section .section-title h3', 0.9, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.5)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0.3)

.fromTo('.story-section .title-border svg', 0.5,{opacity: 0},{opacity: 1, onComplete:function(){
  story_pattern();
}})

.fromTo('.story-line svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  story_line();
}})

.staggerFromTo(
  '.story-list',
  1.0,
  {opacity: 0},
  {opacity: 1}
)

.staggerFromTo('.story-list li', 1, {
  xPercent: 70,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.75)
},
{
  xPercent: 0,
  opacity: 1,
  ease: Elastic.easeOut.config(0.1, 0.75)
}, 0.2)

.staggerFrom('.story-list-details-wrap .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "+=0.05")

.staggerFromTo('.story-list-detail-item p', 1, {
  xPercent: 70,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.75)
},
{
  xPercent: 0,
  opacity: 1,
  ease: Elastic.easeOut.config(0.1, 0.75)
}, 0.2)
 
var scene = new ScrollMagic.Scene({
  triggerElement: "#story"
})
.setTween(t10)
.addTo(controller);

//story list
$('.story-list').on('click', 'a', function(e){
  e.preventDefault();
  e.stopPropagation();
  // setTimeout(function(){
      var businessListDetailItemWidth = $(".story-list-details-track").outerWidth();
      // $(".business-list-detail-item").css('width', businessListDetailItemWidth);
      var totalWidth = 0;
      $(".story-list-details-wrap").children().each(function() {
          totalWidth = totalWidth + $(this).outerWidth();
      });
      // $(".business-list-details-wrap").css('width', totalWidth);
  // }, 500);

  $('.story-list a').removeClass('active');
  $(this).addClass('active');

  $('.story-list-detail-item').removeClass('active');
  var activeMenuListItem = this.hash.slice(1);
  // console.log(activeMenuListItem);
  $('.story-list-detail-item').each(function(){
      var activeDetailListItem = $(this).attr('id');
      // console.log(activeDetailListItem);
      if(activeMenuListItem == activeDetailListItem){
          $(this).addClass('active');
      }
  });
      
  var controller = new ScrollMagic.Controller();
  var t12 = new TimelineMax();
  t12.to('.story-list-detail-item', 1, {
      opacity: 0
  }, 0.6)

  .fromTo('.story-list-detail-item.active', 1, {
      opacity: 0
  },
  {
      opacity: 1
  }, 0.6)

  .staggerFrom('.story-list-details-wrap .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.01, "+=0.05")

  .staggerFromTo('.story-list-detail-item p', 1, {
    xPercent: 70,
    opacity: 0,
    ease: Elastic.easeOut.config(0.1, 0.75)
  },
  {
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.75)
  }, 0.1)
  
  
  var scene = new ScrollMagic.Scene({
    triggerElement: "#story"
  })
  .setTween(t12)
  .addTo(controller);

  return false;
});

/*********** about page story section animation close ****************/   


/*********** about page team section animation ****************/     
var controller = new ScrollMagic.Controller();
var t13 = new TimelineMax();

t13.staggerFromTo('.team-section .section-title h3', 0.9, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.5)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0.3)

.fromTo('.team-section .title-border svg', 0.5,{opacity: 0},{opacity: 1, onComplete:function(){
  team_pattern();
}})

.fromTo('.story-line svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  team_line1();
}})

.staggerFromTo('.tilt2', 0.9, {
  xPercent: -100,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.5)
},
{
    xPercent: 0,
    opacity: 1,
    ease: Elastic.easeOut.config(0.1, 0.5)
}, 0.3)

.fromTo('.team-trangle1 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  team_trangle1();
}})

.staggerFromTo('.team-trangle2 svg', 1.5,{display: "none"},{display: "block", onComplete:function(){
  team_trangle2();
}})

.staggerFromTo('.member-name, .member-designation, .about-social-icons a, .allTeamWrap .grid__item', 1, {
  xPercent: 70,
  opacity: 0,
  ease: Elastic.easeOut.config(0.1, 0.75)
},
{
  xPercent: 0,
  opacity: 1,
  ease: Elastic.easeOut.config(0.1, 0.75)
}, 0.2)
 
var scene = new ScrollMagic.Scene({
  triggerElement: "#team"
})
.setTween(t13)
.addTo(controller);
/*********** about page team section animation close ****************/

/*********** about page mission section animation ****************/     

var controller = new ScrollMagic.Controller();
var t14 = new TimelineMax();

t14.fromTo(
  '.mission-item',
  0.9,
  {scale: 0},
  {scale: 1}, "+=0.5"
)

.fromTo(
  '.mission-item-img',
  0.1,
  {scale: 0},
  {scale: 1}, 0.5
 )

.staggerFrom('.mission-item .sub-title .char',0.1, {opacity:0, ease:Power1.easeIn}, 0.05, "+=0.1")

.fromTo(
  '.mission-item p',
  0.2,
  {opacity: 0},
  {opacity: 1}
 )

 .fromTo('.mission-line1 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  mission_line1();
}})

.fromTo('.mission-line2 svg', 0.5,{display: "none"},{display: "block", onComplete:function(){
  mission_line2();
}})

 
var scene = new ScrollMagic.Scene({
  triggerElement: "#mission"
})
.setTween(t14)
.addTo(controller);
/*********** about page mission section animation close ****************/ 


/**************** SVG ANIMTION ***************/ 

//aboutTrangle1
function lazy1(){
  if (document.readyState === 'complete') {
    let el = document.querySelector('#aboutTrangle1');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeOutQuad","strokeWidth":20,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }
} 











function abouttriangle2(){
  if (document.readyState === 'complete') {

    let el = document.querySelector('#abouttriangle22');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":25,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
    myAnimation.paint(); 
  }
} 









function downtriangle(){

  if (document.readyState === 'complete') {                        
      let el = document.querySelector('#downtriangle');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":30,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
      myAnimation.paint(); 
  }
  
}    

function story_line(){ 

  if (document.readyState === 'complete') {

    let el = document.querySelector('#story-line');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10.7,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }
}

function story_pattern(){

  if (document.readyState === 'complete') {

    let el = document.querySelector('#story-pattern');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1}); 
    myAnimation.paint(); 
  }
}

function team_pattern(){

  if (document.readyState === 'complete') {

    let el = document.querySelector('#team-pattern');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1}); 
    myAnimation.paint(); 
  }
}

function team_line1() { 

  if (document.readyState === 'complete') {

    let el = document.querySelector('#teamline1');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":20.7,"strokeOpacity":1,"strokeColor":"#d61616","strokeCap":"square"}); 
    myAnimation.paint(); 
  }
}

function team_trangle1(){
  if (document.readyState === 'complete') {

    let el = document.querySelector('#team-trangle1');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeOutQuad","strokeWidth":20,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }
} 

function team_trangle2(){
  if (document.readyState === 'complete') {

    let el = document.querySelector('#team-trangle2');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeOutQuad","strokeWidth":20,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }
} 

function mission_line1(){ 

  if (document.readyState === 'complete') {

    let el = document.querySelector('#mission-line1');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10.7,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }
}

function mission_line2() { 

  if (document.readyState === 'complete') {

    let el = document.querySelector('#mission-line2');
    let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":10.7,"strokeOpacity":1,"strokeColor":"#d61616"}); 
    myAnimation.paint(); 
  }

};

/**************** SVG ANIMTION functions ***************/ 