function getTime(deadline){
  let currentTime = new Date()
  let remainTime = (new Date(deadline) - currentTime + 1000) / 1000
  let seconds = Math.floor(remainTime % 60)
  let minutes = Math.floor(remainTime / 60 % 60)
  let hour = Math.floor(remainTime / 3600 % 24)
  let day = Math.floor(remainTime /(3600 * 24))

  let getSeconds = seconds < 10 ? `0${seconds}`: seconds
  let getMinutes = minutes < 10 ? `0${minutes}` : minutes
  let getHours = hour < 10 ? `0${hour}` : hour
  let getDays = day < 10 ? `0${day}` : day

  return {
    remainTime,
    getSeconds,
    getMinutes,
    getHours,
    getDays
  }
}

const countDown = (deadline, ele, message) => {
  const ele = document.querySelector('.day-number')
  const $hour = document.querySelector('.hour-number')
  const $minute = document.querySelector('.minute-number')
  const $second = document.querySelector('.second-number')

  const timer = setInterval( () => {
    const time = getTime(deadline)

    $day.innerHTML = `time.${getDays}`
  }, 1000)
}



countDown('jul 19 2022 23:59:59 GMT-0500', '.countdown', 'feliz año')

