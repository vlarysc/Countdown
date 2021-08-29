const newYear = '1 Jan 2022';
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function countdown () {
  setInterval(() => {
  const newYearDate = new Date(newYear)
  const currentYear = new Date()

  const totalSeconds = (newYearDate - currentYear) / 1000;

  const days = Math.round(totalSeconds / 3600 / 24);
  const hours = Math.round(totalSeconds / 3600 ) % 24;
  const minutes = Math.round(totalSeconds / 60) % 60; 
  const seconds = Math.round(totalSeconds) % 60;
  
daysEl.innerHTML = days - 1
hoursEl.innerHTML = hours
minutesEl.innerHTML = minutes
secondsEl.innerHTML = seconds

}, 1000);
}

countdown()