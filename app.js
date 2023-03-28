function AnkitClock() {
  const clock = new Date();
  const hour = clock.getHours();
  const min = clock.getMinutes();
  const sec = clock.getSeconds();
  const hour__el = document.querySelector('.hours');
  const min__el = document.querySelector('.min');
  const sec__el = document.querySelector('.sec');

  hour__el.textContent = hour;
  min__el.textContent = `${min}`.padStart(2,0);
  sec__el.textContent = `${sec}`.padStart(2,0);
};
setInterval(AnkitClock, 1000);



