const clock = document.getElementById('clock')
const button = document.getElementById('button')

let Time = document.createElement('div')
clock.appendChild(Time)

function changeTime() {
    let time = new Date()
    let hours = time.getHours()
    let hoursReduced = time.getHours() % 12
    let ampm = hours < 12 ? 'AM' : 'PM'
    var hours_ = hoursReduced < 10 ? `0${hoursReduced}` : hoursReduced
    var minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
    var seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()

    Time.innerHTML = `${hours_}:${minutes}:${seconds} ${ampm} `
}

const int = setInterval(changeTime, 1000)