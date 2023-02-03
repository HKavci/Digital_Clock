// getFullYear() => Get the year as a four digit number (yyyy)

// getMonth() => Get the month as a number (0-11)

// getDate() => Get the day as a number (1-31)

// getHours() => Get the hour (0-23)

// getMinutes() => Get the minute (0-59)

// getSeconds() => Get the second (0-59)

// getDay() => Get the weekday as a number (0-6)

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

