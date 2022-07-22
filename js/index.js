  const $day = document.querySelector('.day-number')
  const $hour = document.querySelector('.hour-number')
  const $minute = document.querySelector('.minute-number')
  const $second = document.querySelector('.second-number')


const transformNumber = (number) => {
  return number < 10 ? `0${number}` : number;
}

const deadline = new Date("Dec 25 2022");

function calculate() {
  let currentTime = new Date()
  let remainTime = (deadline.getTime() - currentTime.getTime() + 1000) / 1000

  let days = transformNumber(Math.floor(remainTime / (3600 * 24)))
  let hours = transformNumber(Math.floor(remainTime / 3600 % 24))
  let minutes = transformNumber(Math.floor(remainTime / 60 % 60))
  let seconds = transformNumber(Math.floor(remainTime % 60))

  $day.textContent = days;
  $hour.textContent = hours;
  $minute.textContent = minutes;
  $second.textContent = seconds;

  if (remainTime < 0) {
    console.log("Feliz Navidad!");
    clearInterval(countDown);
  }

}

const countDown = setInterval(calculate, 1000)





