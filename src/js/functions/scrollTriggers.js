import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const friendsScrollTrigger = () => {
  const mediaTrigger = (start, startScroll, end) => {
    gsap.from(".friends", {
      scale: 0.8,
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".friends",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  };
  
  ScrollTrigger.matchMedia({
    "(min-width: 320px)": () => {
      mediaTrigger();
    }
  });
};

export const inviteScrollTrigger = () => {
  const mediaTrigger = (id, start, startScroll, end) => {
    gsap.from(id, {
      y: 50,
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: id,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  };

  ScrollTrigger.matchMedia({
    "(min-width: 320px)": () => {
      mediaTrigger("#invite1");
    },
  });
};

export const timelineScrollTrigger = () => {
  const mediaTriggerTitle = () => {
    gsap.from(".timeline__title", {
      y: 30,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  };

  const mediaTriggerItems = (id) => {
    gsap.from(id, {
      y: 50,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: id,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  };

  ScrollTrigger.matchMedia({
    "(min-width: 320px)": () => {
      mediaTriggerTitle();
      mediaTriggerItems("#timeline1");
      mediaTriggerItems("#timeline2");
      mediaTriggerItems("#timeline3");
      mediaTriggerItems("#timeline4");
    },
  });
};

export const placeScrollTrigger = () => {
  const mediaTriggerWrap = () => {
    gsap.from(".place__wrap", {
      scale: 0.9,
      opacity: 0,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".place",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  };

  ScrollTrigger.matchMedia({
    "(min-width: 320px)": () => {
      mediaTriggerWrap();
    },
  });
};

export const timerScrollTrigger = () => {
  const mediaTrigger = (id) => {
    gsap.from(id, {
      scale: 0.8,
      opacity: 0,
      autoAlpha: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".counter",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  };

  ScrollTrigger.matchMedia({
    "(min-width: 320px)": () => {
      mediaTrigger("#timer-day");
      mediaTrigger("#timer-hour");
      mediaTrigger("#timer-min");
      mediaTrigger("#timer-sec");
    },
  });
};
