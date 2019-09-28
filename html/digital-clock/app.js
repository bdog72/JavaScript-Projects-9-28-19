function clock(parms) {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  document.querySelector('#hour').innerHTML = `${hours}`;
  document.querySelector('#minute').innerHTML = `:${minutes}`;
  document.querySelector('#second').innerHTML = `:${seconds}`;
}

setInterval(clock, 1000);
