const declOfNum = (n, titles) =>
  titles[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];

const createEndTimerDesc = (lang) => {
  const desc = document.createElement("p");
  desc.classList.add("counter__end-timer");
  if (lang === 'uz') {
    desc.innerHTML = `
      Ushbu ajoyib oqshomni biz bilan baham ko'rganingiz uchun tashakkur&nbsp;!
    `;
  } else {
    desc.innerHTML = `
      Спасибо, Вам, что были с нами в этот прекрасный вечер&nbsp;!
    `;
  }

  return desc;
};

export const timer = (deadline) => {
  const counter = document.querySelector(".counter"),
    counterWrap = document.querySelector(".counter__wrap"),
    unitDay = document.querySelector(".timer__unit_day"),
    unitHour = document.querySelector(".timer__unit_hour"),
    unitMin = document.querySelector(".timer__unit_min"),
    unitSec = document.querySelector(".timer__unit_sec"),
    descDay = document.querySelector(".timer__unit_day-desc"),
    descHour = document.querySelector(".timer__unit_hour-desc"),
    descMin = document.querySelector(".timer__unit_min-desc"),
    descSec = document.querySelector(".timer__unit_sec-desc");

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime(),
      dateNow = new Date(),
      timeRemaining = (dateStop - dateNow) / 1000;

    const seconds = Math.max(0, Math.floor(timeRemaining % 60)),
      minutes = Math.max(0, Math.floor((timeRemaining / 60) % 60)),
      hours = Math.max(0, Math.floor((timeRemaining / 60 / 60) % 24)),
      days = Math.max(0, Math.floor((timeRemaining / 60 / 60 / 24) % 365));

    return { timeRemaining, seconds, minutes, hours, days };
  };

  const startTimer = () => {
    const timerData = getTimeRemaining();
    const lang = document.body.getAttribute('data-lang') || 'ru';

    unitSec.textContent = timerData.seconds;
    unitMin.textContent = timerData.minutes;
    unitHour.textContent = timerData.hours;
    unitDay.textContent = timerData.days;

    if (lang === 'uz') {
      descSec.textContent = "soniya";
      descMin.textContent = "daqiqa";
      descHour.textContent = "soat";
      descDay.textContent = "kun";
    } else {
      descSec.textContent = declOfNum(timerData.seconds, [
        "секунда",
        "секунды",
        "секунд",
      ]);
      descMin.textContent = declOfNum(timerData.minutes, [
        "минута",
        "минуты",
        "минут",
      ]);
      descHour.textContent = declOfNum(timerData.hours, ["час", "часа", "часов"]);
      descDay.textContent = declOfNum(timerData.days, ["день", "дня", "дней"]);
    }

    if (timerData.timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      if (counterWrap) {
        counterWrap.remove();
      }
      // Clear counter elements to avoid duplicates
      const existingEnd = counter.querySelector(".counter__end-timer");
      if (!existingEnd) {
        counter.append(createEndTimerDesc(lang));
      }
    }
  };

  startTimer();
};
