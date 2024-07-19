AOS.init();
// new WOW().init();

// Custom script to re-trigger animations on scroll
// function animateOnScroll(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.remove("animate__animated");
//       void entry.target.offsetWidth; // Trigger reflow to restart animation
//       entry.target.classList.add("animate__animated");
//     }
//   });
// }

// const observer = new IntersectionObserver(animateOnScroll, {
//   threshold: 0.1,
// });

// document.querySelectorAll(".wow").forEach((element) => {
//   observer.observe(element);
// });

//
// var tl = gsap.timeline();
// // navbar
// gsap.from(".navbar-brand ", {
//   y: -30,
//   duration: 1,
// });
// gsap.from(".navbar-nav li  ", {
//   y: -80,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3,
// });

// gsap.from(".login-btn  ", {
//   y: -30,
//   duration: 1,
// });
// // header banner
// gsap.from(".text-banner h1", {
//   x: -1200,
//   duration: 0.9,
//   delay: 1,
//   stagger: 0.5,
// });

// gsap.from(".img-block img", {
//   x: 1200,
//   duration: 0.8,
//   delay: 1,
//   rotate: 360,
// });

// // about us

// gsap.from(".continuous-rotate img", {
//   y: -200,
//   duration: 1,
//   delay: 1,
//   // rotate : 360
// });

// gsap.from(".title h2", {
//   x: -1000,
//   duration: 0.8,
//   delay: 1,
//   // rotate : 360
// });

// // text section

// gsap.from(".text-font  h1", {
//   opacity: 0,
//   duration: 0.5,
//   delay: 1,
//   scale: 0,
// });
