
const currentTime = document.getElementById("current-time")
const meridiem = document.getElementById("am-pm")

const getCurrentTime = () => {
    let time = Date().split(" ")[4]
    currentTime.innerHTML = time;
    new Date().getHours() < 12
        ? meridiem.innerHTML = "AM"
        : meridiem.innerHTML = "PM"
}

setInterval(getCurrentTime, 1000)

