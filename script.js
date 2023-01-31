//::::::::::-----locomotive---:::::::

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

$('.head').textillate({ in: { effect: 'flash' } });
$('#page_2_top>h4').textillate({ in: { effect: 'bounce' } });

// nav_bar
gsap.from("#top_nav_bar", {
    y:-100,
    opacity:0,
    duration:1,
    delay:0.2,
    ease: "bounce.out",
    onStart:function(){
      $('.head').textillate({ in: { effect: 'flash' } });
    },
  
})

// // page_1_images

gsap.from(".pg_1_img_1",{
    y:200,
    opacity:0,
    duration:1,
    delay:0.3
})
gsap.from(".pg_1_img_2",{
  x:100,
  opacity:0,
  duration:1,
  delay:0.3
})
gsap.from(".pg_1_img_3",{
  y:-100,
  opacity:0,
  duration:1,
  delay:0.3
})

// // page_1_content_wrapper

gsap.from("#page_1_content_wrapper", {
  opacity:0,
  duration:1,
  delay:0.3,
})

// // page_2_gsap

gsap.from("#page_2_top",  {
  y:100,
  opacity:0,
  duration:1,
  delay:0.3,
  onStart:function(){
    $('#page_2_top>h4').textillate({ in: { effect: 'bounce' } });
  },
  scrollTrigger:{
    trigger:".page_2",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_2_content_wrapper>h5",  {
  y:100,
  opacity:0,
  duration:1,
  delay:0.3,
  ease: "circ.out",
  scrollTrigger:{
    trigger:".page_2",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_2_btn_wrapper",  {
  y:100,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:"#page_2_content_wrapper>h5",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

// // page_3

gsap.from("#page_3_img_1",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:".page_3",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_3_img_2",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:".page_3",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_3_img_3",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger:".page_3",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_3_img_4",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger:".page_3",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_3_right>h1",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.4,
  scrollTrigger:{
    trigger:".page_3",
    scroller:"#main",
    // markers:true,
    start: "top 30%"
  }
})

gsap.from("#page_3_right>p",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.4,
  ease: "bounce.out",
  // onStart:function(){
  //   $('#page_3_right>p').textillate({ in: { effect: 'flash' } });
  // },
  scrollTrigger:{
    trigger:".page_3",
    scroller:"#main",
    // markers:true,
    start: "top 30%"
  }
})

gsap.from("#page_3_btn_text_wrapper",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.4,
  scrollTrigger:{
    trigger:"#page_3_right>p",
    scroller:"#main",
    // markers:true,
    start: "top 60%"
  }
})

// // page_4

gsap.from("#page_4_heading",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:".page_4",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_4_img_wrapper",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:"#page_4_heading",
    scroller:"#main",
    // markers:true,
    start: "top 60%"
  }
})

// // page_5

gsap.from(".box_hover_img_content_left",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:".page_5",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})
gsap.from(".box_hover_img_content_right",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:".page_5",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_5_btn_text_wrapper",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.3,
  ease: "bounce.out",
  scrollTrigger:{
    trigger:".box_hover_img_content_right",
    scroller:"#main",
    // markers:true,
    start: "top 40%"
  }
})

// // page_6

gsap.from(".mySwiper",{
  y:100,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:".page_6",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

// // page_7

gsap.from("#page_7_box_img_txt_wrapper",{
  scale:0,
  opacity:0,
  duration:1,
  delay:0.3,
  scrollTrigger:{
    trigger:".page_7",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#page_7_top_black_bgc>h1",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.2,
  scrollTrigger:{
    trigger:"#page_7_top_black_bgc",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from("#pg_7_btm_ul_1",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.4,
  scrollTrigger:{
    trigger:"#page_7_top_black_bgc",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})
gsap.from("#pg_7_btm_ul_2",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger:"#page_7_top_black_bgc",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})
gsap.from("#pg_7_btm_ul_3",{
  y:200,
  opacity:0,
  duration:1,
  delay:0.6,
  scrollTrigger:{
    trigger:"#page_7_top_black_bgc",
    scroller:"#main",
    // markers:true,
    start: "top 50%"
  }
})

gsap.from(".pg_7_btm-img1", {
  y:200,
  opacity:0,
  duration:1,
  delay:0.6,
  scrollTrigger:{
    trigger:"#page_7_top_black_bgc",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
  }
})
gsap.from(".pg_7_btm-img2", {
  y:200,
  opacity:0,
  duration:1,
  delay:0.6,
  scrollTrigger:{
    trigger:"#page_7_top_black_bgc",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
  }
})
gsap.from(".pg_7_btm-img3", {
  y:200,
  opacity:0,
  duration:1,
  delay:0.6,
  scrollTrigger:{
    trigger:"#page_7_top_black_bgc",
    scroller:"#main",
    // markers:true,
    start:"top 40%",
  }
})

gsap.from("footer", {
  opacity:0,
  duration:1,
  delay:0.6,
  scrollTrigger:{
    trigger:".pg_7_btm-img1",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
  }
})


// :::::::::::::::------gsap_end----::::::::::::::::


// :::::::::::----cursor----:::::::

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(move){
    // console.log(move.clientX)
    // console.log(move.clienty)
     let x = move.clientX
     let y = move.clientY
     cursor.style.left = x + "px";
     cursor.style.top = y + "px";
})

// const page_1_center_head =documnet.querySelector("#page_1_center_head");

// page_1_center_head.addEventListener("mouseenter", function(){
//   cursor.style.transform = "scale(2)"  
// })

// ::::::::::::::--service_menu:::::::::::

const service_li = document.querySelector("#service_li");
const service_li_menu = document.querySelector("#service_menu");
const nav_li = document.querySelector("#nav_li");

service_li.addEventListener("mouseenter", function(){
    service_li_menu.style.display = "flex"
})
service_li_menu.addEventListener("mouseleave", function(){
    service_li_menu.style.display = "none"
})
nav_li.addEventListener("mouseleave", function(){
    service_li_menu.style.display = "none"
})


//::::::::---hamburger_menu_btn//cross~~btn:::----:::::::

const menu_icon = document.querySelector("#menu_icons")
const hamburger = document.querySelector("#hamburger")
const cross_wrapper = document.querySelector("#cross_wrapper")
const line1 = document.querySelector(".box1")
const line2 = document.querySelector(".box2")
const menu_overlay = document.querySelector("#menu_overlay");
 
var flag = 0;
menu_icon.addEventListener("click", function(){
    if(flag===0){
        hamburger.style.display = "none";
        menu_overlay.style.transform = "translatey(0)";
        cross_wrapper.style.opacity = "1"
        line1.style.transform = "rotate(48deg)"
        line2.style.transform = "rotate(-48deg)"
        flag=1;
    }
    else{
        line1.style.transform = "rotate(0deg)"
        line2.style.transform = "rotate(0deg)"
        menu_overlay.style.transform = "translatey(100%)";
        setTimeout(function(){
            cross_wrapper.style.opacity = "0"
            hamburger.style.display = "initial";
        },500)
        flag=0;
    }
})


// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
