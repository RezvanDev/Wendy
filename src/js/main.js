import "lazysizes";
import { gsap } from "gsap";
import {
  friendsScrollTrigger,
  inviteScrollTrigger,
  placeScrollTrigger,
  timelineScrollTrigger,
  timerScrollTrigger,
} from "./functions/scrollTriggers";
import { timer } from "./functions/timer";

// Language Switching logic
const initLanguageSwitcher = () => {
  const switchBtns = document.querySelectorAll('.lang-switch__btn');
  
  const setLanguage = (lang) => {
    if (lang === 'uz') {
      document.body.classList.add('lang-uz');
      document.body.classList.remove('lang-ru');
      document.body.setAttribute('data-lang', 'uz');
    } else {
      document.body.classList.add('lang-ru');
      document.body.classList.remove('lang-uz');
      document.body.setAttribute('data-lang', 'ru');
    }
    
    switchBtns.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    localStorage.setItem('wedding-lang', lang);
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  };

  const savedLang = localStorage.getItem('wedding-lang') || 'ru';
  setLanguage(savedLang);

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
};

// Run initializers
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  
  inviteScrollTrigger();
  friendsScrollTrigger();
  timelineScrollTrigger();
  placeScrollTrigger();
  timerScrollTrigger();

  timer("2026/06/27 15:30");
});

