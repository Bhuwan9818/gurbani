gsap.registerPlugin(ScrollTrigger);

gsap.from(".image-box img", {
  scrollTrigger: {
    trigger: ".image-box",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".content h1", {
  scrollTrigger: {
    trigger: ".content h1",
    start: "top 80%",
  },
  opacity: 0,
  x: -50,
  duration: 1
});

gsap.from(".content p", {
  scrollTrigger: {
    trigger: ".content",
    start: "top 80%",
  },
  opacity: 0,
  x: 50,
  stagger: 0.3,
  duration: 1.2
});
