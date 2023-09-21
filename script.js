var team = document.querySelector("#team");
var teamp = document.querySelector("#team p");
team.addEventListener("mouseenter", function () {
  team.style.backgroundColor = "white";
  teamp.style.color = "black";
});
team.addEventListener("mouseleave", function () {
  team.style.backgroundColor = "transparent";
  teamp.style.color = "white";
});

gsap.to("#container", {
  y: 272,
  stagger: 0.2,
  duration: 2,
  scrollTrigger: {
    scroll: "#main",
    trigger: "#page1 ",
    start: "top -20%",
    end: "top -100%",
    scrub: 1,
  },
});
gsap.to("#page2 h1", {
  scrollTrigger: {
    scroll: "main",
    trigger: "#page1",
    pin: true,
  },
});

gsap.to("#textanim1,#textanim3", {
  x: -700,
  stagger: 0.1,
  duration: 10,
  scrollTrigger: {
    scroll: "main",
    trigger: "#page2",
    start: "top 120%",
    end: "top -100%",
    scrub: 1,
  },
});
gsap.to("#textanim2", {
  x: 1000,
  stagger: 0.2,
  duration: 10,
  scrollTrigger: {
    scroll: "main",
    trigger: "#page2",
    start: "top 80%",
    end: "top -100%",
    scrub: 1,
  },
});
