let overlayAnimations = gsap.timeline();
overlayAnimations.fromTo('.overlay.two',{
     x: "100%"
},{
    duration: 3,
    opacity: 1,
    x: 0
})
.fromTo('.overlay.three',{
    
    x: "100%"
},{
    duration: 3,
    opacity: 1,
    x: 0
})
.fromTo('.overlay.four',{
    x: "100%"
},{
    duration: 2,
    x: 0
});

let controller = new ScrollMagic.Controller();

let overlayScene = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    triggerElement: '.overlays',
    duration: "400%"
})
.addIndicators()
.setPin('.overlays')
.setTween(overlayAnimations)
.addTo(controller)
