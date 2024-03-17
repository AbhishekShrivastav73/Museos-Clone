
//Mouse Follower
function mouseFollower() {
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.3, 1, 0.320, 8)",
        duration: 0.3,
      });
}
mouseFollower();

function heroAnimation() {
let tl = gsap.timeline();
tl.to('#loader',{
    y:-1000,
    opactiy:0,
    delay : 1,
    duration : 3,
    onStart: function () {
        let time = document.querySelector("#time");
        let grow = 0;
        setInterval(function () {
          grow++;
          if (grow <= 100) {
            time.textContent = grow;
          } else {
            time.textContent = 100;
          }
        }, 5);
      },
    
})
tl.to('#loader',{
    display : 'none'
})


tl.from('.elem h1',{
    y : 200,
    opactiy : 0,
    duration : 1,
    // delay : 0.2,
    stagger : 0.1
},'-=1.8')

tl.from('nav',{
    y : -200,
    opactiy : 0,
    duration : 1.5,
    // delay : 0.5
},
"-=2")

tl.to('.overlayImg #img2',{
    x:-400,
    duration : 0,
    // delay : 0.5
})

tl.to('.heroImage img,.overlayImg #img2',{
    scale  : 1,
    x:0,
    delay : 0.5,
    stagger : 0.1,
    duration : 1,
    scrollTrigger :{
        trigger : '#heroSection',
        scroller :"body",
        // markers: true,
        scrub : 5,
        start :"18%",
        end:"8%"
     }
})
}

heroAnimation()
const tl2 = gsap.timeline();

tl2.to('#intro .content',{
    // pin : true,
    marginTop : "-30%",
    scrollTrigger : {
        trigger : '#intro',
        scroller :"body",
        // markers: true,
        pin : true,
        scrub : 1,
        start :"top center",
        end:"50%"
    }
})

tl3 = gsap.timeline();
const number1=  tl3.to('#ones',{
    transform : 'translate(0px, -254vh)',
    duration : 2,
    delay : 0.5,
})
const number2 = tl3.to('#tens',{
    transform : 'translate(0px, -284vh)',
    duration : 2
},'-=1.8')
const number3 =tl3.to('#hundred',{
    transform : 'translate(0px, -254vh)',
    duration : 2
},'-=1.8')
const number4 =tl3.to('#thousand',{
    transform : 'translate(0px, -44vh)',
    duration : 2
},'-=1.8')
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#thousand",
  // markers : true,
  start: "-40%",
  end: "bottom center",
  animation: number1
});

ScrollTrigger.create({
  trigger: "#hundred",
  start: "top center",
  end: "bottom center",
  animation: number2
});

ScrollTrigger.create({
  trigger: "#tens",
  start: "top center",
  end: "bottom center",
  animation: number3
});

ScrollTrigger.create({
  trigger: "#ones",
  start: "top center",
  end: "bottom center",
  animation: number4
});


gsap.timeline({
  scrollTrigger: {
    trigger: '.masking',
    scroller: "body",
    // markers: true,
    pin: true,
    scrub: 3,
    start: "top",
    end: "+=2500"
  }
})
.to('#text1', {
  y: 0,
  opacity: 0,
  duration: 0.2
}, 0)
.to('.masking img', {
  clipPath: 'circle(120px at 53% 64%)',
  duration: 0.3
}, 0)

.to('.masking img', {
  clipPath: 'circle(120px at 35% 60%)',
  duration: 0.3
}, 0.5)
.to('#text2', {
  y: 0,
  opacity: 1,
  duration: 0.2
}, 0.1)
.to('.masking img', {
  clipPath: 'circle(120px at 26% 60%)',
  duration: 0.3
}, 0.5)
.to('#text2', {
  y: 0,
  opacity: 0,
  duration: 0.2
}, 0.6)
.to('#text3', {
  y: 0,
  opacity: 1,
  duration: 0.2
}, 0.6)
.to('.masking img', {
  clipPath: 'circle(120px at 60% 68%)',
  duration: 0.3
}, 1)
.to('#text3', {
  y: 0,
  opacity: 0,
  duration: 0.2
}, 1.1)
.to('#text4', {
  y: 0,
  opacity: 1,
  duration: 0.2
}, 1.1)
.to('.masking img', {
  clipPath: 'circle(80px at 44% 40%)',
  duration: 1
}, 1.5)
.to('#text4', {
  y: 0,
  opacity: 0,
  duration: 0.2
}, 1.5)
.to('#text5', {
  y: 0,
  opacity: 1,
  duration: 0.2
}, 1.8)
.to('.masking img', {
  clipPath: 'circle(80px at 13% 60%)',
  duration: 1
}, 2)
.to('#text5', {
  y: 0,
  opacity: 0,
  duration: 0.2
}, 2.5)
.to('#text6', {
  y: 0,
  opacity: 1,
  duration: 0.2
}, 2.4)
.to('.masking img', {
  clipPath: 'circle(200% at 13% 60%)',
  duration: 1
}, 2.7)
.to('#text6', {
  y: 0,
  opacity: 0,
  duration: 0.2
}, 2.4)
;


const tl5 = gsap.timeline();

tl5.to('#contextContainer .content',{
    // pin : true,
    marginTop : "-40%",
    scrollTrigger : {
        trigger : '#contextContainer',
        scroller :"body",
        // markers: true,
        pin : true,
        scrub : 1,
        start :"top center",
        end:"50%"
    }
})
gsap.to('#juanContainer .content',{
    // pin : true,
    marginTop : "-30%",
    scrollTrigger : {
        trigger : '#juanContainer',
        scroller :"body",
        // markers: true,
        pin : true,
        scrub : 1,
        start :"top center",
        end:"50%"
    }
})
gsap.to('#initiativeContainer .content',{
    // pin : true,
    marginTop : "-35%",
    scrollTrigger : {
        trigger : '#initiativeContainer',
        scroller :"body",
        // markers: true,
        pin : true,
        scrub : 1,
        start :"top center",
        end:"50%"
    }
})
gsap.from('#elem2 h1',{
  y : 200,
  opactiy : 0,
  duration : 1,
  // delay : 0.2,
  stagger : 0.1,
  scrollTrigger : {
    trigger : '#context',
    scroller :"body",
    // markers: true,
    // pin : true,
    // scrub : 1,
    start :"-20%",
    end:"-21%"
  }
})
gsap.from('#elem3 h1',{
  y : 200,
  opactiy : 0,
  duration : 1,
  // delay : 0.2,
  stagger : 0.1,
  scrollTrigger : {
    trigger : '#juan',
    scroller :"body",
    // markers: true,
    // pin : true,
    // scrub : 1,
    start :"-20%",
    end:"-21%"
  }
})
gsap.from('#elem4 h1',{
  y : 200,
  opactiy : 0,
  duration : 1,
  // delay : 0.2,
  stagger : 0.1,
  scrollTrigger : {
    trigger : '#initiative',
    scroller :"body",
    // markers: true,
    // pin : true,
    // scrub : 1,
    start :"-18%",
    end:"-21%"
  }
})
gsap.to('.imgWrapper img',{
  scale : 1.5,
  duration : 2,
  delay : 0.2,
  scrollTrigger : {
    trigger : '.imgWrapper',
    scroller :"body",
    // markers: true,
    // pin : true,
    scrub : 3,
    start :"-15%",
    end:"-60%"
  }
})
gsap.to('.ploygon',{
  // clipPath :'polygon(100% 0%, 0% 1%, 34% 61%, 33% 99%, 61% 99%, 59% 60%)',
  clipPath :'polygon(0px 0px, 100% 0px, 58.0866% 70%, 58.0866% 100%, 41.9134% 100%, 41.9134% 70%)',
  duration : 0.1,
  scrollTrigger : {
    trigger : '.ploygon',
    scroller :"body",
    // markers: true,
    // pin : true,
    scrub : 3,
    start :"-35%",
    end:"-30%"
  }
})


