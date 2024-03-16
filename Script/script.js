// SCROLL REVEAL
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true;
});

scrollReveal.reveal(".benefits, nav");
scrollReveal.reveal(".img", { origin: "right" });
scrollReveal.reveal(".img", { delay: 2000 });
scrollReveal.reveal(".title-section", { origin: "left" });
scrollReveal.reveal(".title-section", { delay: 1500 });
scrollReveal.reveal(".btn-cta", { origin: "left" });
scrollReveal.reveal(".btn-cta", { delay: 2000 });
scrollReveal.reveal(".parallelogram", { origin: "left" });
scrollReveal.reveal(".parallelogram", { delay: 1000 });
scrollReveal.reveal(".testimonial", { origin: "top" });
scrollReveal.reveal(".testimonial", { delay: 2500 });
scrollReveal.reveal(".benefits", { delay: 1000 });

ScrollReveal().reveal(".logo, .list, .link", { delay: 1000 });
ScrollReveal().reveal(
  ".ri-stethoscope-line, #logo, .link, .login, .book-now, .box",
  {
    interval: 200,
  }
);
