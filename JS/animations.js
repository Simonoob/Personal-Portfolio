//disabling on small screens
function isSmallScreen(x) {
  if (x.matches) {
    return;
  } else {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".S",
        toggleActions: "restart pause resume reverse",
      },
    });

    tl.fromTo(
      "#S",
      { opacity: 0, y: -500 },
      { opacity: 0.05, y: 0, duration: 1.5 }
    );
    tl.fromTo(
      "#f",
      { opacity: 0, x: 500 },
      { opacity: 0.05, x: 0, duration: 1.5 },
      "-=1"
    );

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project",
        toggleActions: "restart pause resume reverse",
      },
    });

    tl2.from("#projects", { opacity: 0, y: 200, duration: 0.5 }).from(
      ".project",
      {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.5,
      },
      "-=0.2"
    );

    const projectsCards = document.querySelectorAll(".project");

    projectsCards.forEach((project) => {
      project.addEventListener("mouseenter", changeYup);
      project.addEventListener("mouseleave", changeYdown);
    });

    function changeYup(e) {
      projectsCards.forEach((element) => {
        gsap.to(element, {
          opacity: 0.2,
          duration: 0.1,
        });
      });

      gsap.to(e.target, {
        opacity: 1,
        duration: 0.1,
      });
    }

    function changeYdown(e) {
      projectsCards.forEach((element) => {
        gsap.to(element, {
          opacity: 1,
          duration: 0.1,
        });
      });
    }

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".carousel-item",
        toggleActions: "restart none none reverse",
      },
    });

    tl4.from(".carousel", {
      y: 200,
      opacity: 0,
      duration: 2,
    });
  }

  gsap.from(".nav", {
    y: 20,
    opacity: 0,
    stagger: 0.5,
    duration: 4,
    ease: "power3.out",
  });
}

var x = window.matchMedia("(max-width: 700px)");
isSmallScreen(x);
x.addListener(isSmallScreen);
