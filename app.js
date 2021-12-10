const intro = document.getElementById('intro')
const video =intro.querySelector('video')
const text=intro.querySelector('h1')
const anmoljenner =document.getElementById('anmoljenner')
var scroller=document.getElementById("keepscrolling")
let threethings=document.getElementById("threethings")
let boxone=document.getElementById("one")
let boxtwo=document.getElementById("two")
let boxthree=document.getElementById("three")
let boxfour=document.getElementById("four")
let boxfive=document.getElementById("five")
let boxsix=document.getElementById("six")

//end section
const section =document.querySelector('section')
const end =section.querySelector('h1')
//scroll anim
const controller =new ScrollMagic.Controller();
//scenes
const scene = new ScrollMagic.Scene({
    duration:33000,
    triggerElement:intro,
    triggerHook:0
})
.setPin(intro)
.addTo(controller)
;

//Video Animation
let accelamount=0;
let scrollpos=0;
let delay=0;
 
scene.on('update', e=>{
scrollpos=e.scrollPos/1000;
},33.33)
setInterval(()=>{
    delay+=(scrollpos-delay)*accelamount
    video.currentTime=scrollpos
    console.log(scrollpos)
    //manentia ai
    if (scrollpos>1 &&scrollpos<2 ) {
        anmoljenner.classList.add("hide");  
    };
    if (scrollpos>4 ) {
        anmoljenner.classList.add("hide");  
    };
    if (scrollpos<1) {
        anmoljenner.classList.remove("hide");  
    };



    if (scrollpos>5 ) {
        boxone.classList.add("reveal")
    };
    if (scrollpos>7 ) {
        boxtwo.classList.add("reveal")
    };
    if (scrollpos> 9) {
        boxthree.classList.add("reveal")
    };

    if (scrollpos<5 ) {
        boxone.classList.remove("reveal")
    };
    if (scrollpos<7 ) {
        boxtwo.classList.remove("reveal")
    };
    if (scrollpos<9) {
        boxthree.classList.remove("reveal")
    };

    if (scrollpos> 11.5) {
        boxone.classList.remove("reveal")
    };
    if (scrollpos>11.5 ) {
        boxtwo.classList.remove("reveal")
    };
    if (scrollpos>11.5) {
        boxthree.classList.remove("reveal")
    };

// last text // last text // last t// last textext // last text// last text// last text// last text// last text// last text
// last text// last text// last text// last text// last text// last text
    if (scrollpos>17 ) {
        boxfour.classList.add("show")
    };
    if (scrollpos>19 ) {
        boxfive.classList.add("show")
    };
    if (scrollpos> 21) {
        boxsix.classList.add("show")
    };

    if (scrollpos<17 ) {
        boxfour.classList.remove("show")
    };
    if (scrollpos<19 ) {
        boxfive.classList.remove("show")
    };
    if (scrollpos<21) {
        boxsix.classList.remove("show")
    };

    if (scrollpos> 30) {
        boxfour.classList.remove("show")
    };
    if (scrollpos>30 ) {
        boxfive.classList.remove("show")
    };
    if (scrollpos>30) {
        boxsix.classList.remove("show")
    };
    //keep scrolling
    
//keepscrolling
if (scrollpos>14) {
    console.log("pochigya")
    scroller.classList.add("aaja");  
};
if (scrollpos>15 ) {
    scroller.classList.remove("aaja");  
};
if (scrollpos<14) {
    scroller.classList.remove("aaja");  
};

})

