function AnkitClock() {
  const clock = new Date();
  const hour = clock.getHours();
  const min = clock.getMinutes();
  const sec = clock.getSeconds();
  const day = clock.getDay();
  const month = clock.getMonth();
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric"
  }
  const intlDate = Intl.DateTimeFormat("en-GB", options).format(clock);
  const day__el = document.querySelector('.day');
  const month__el = document.querySelector('.month');
  const hour__el = document.querySelector('.hours');
  const min__el = document.querySelector('.min');
  const sec__el = document.querySelector('.sec');
  const am_pm__el = document.querySelector('.pm_am')

  month__el.textContent = intlDate;
  hour__el.textContent = hour;
  min__el.textContent = `${min}`.padStart(2,0);
  sec__el.textContent = `${sec}`.padStart(2,0);
  am_pm__el.textContent =  hour < 12 ? "AM" : "PM";
  // const age = 18;
  // console.log(age>= 18 ? "You can have driving lisence" : "NO you can't drive");

};
setInterval(AnkitClock, 1000);


