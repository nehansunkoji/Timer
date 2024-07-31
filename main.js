
let isRunning = false;
let interval;
let totalSeconds;

function setTimer() {
    var days = document.getElementById("daysIn").value;
    var hrs = document.getElementById("hoursIn").value;
    var min = document.getElementById("minsIn").value;
    var sec = document.getElementById("secsIn").value;
    days = (days < 10 ? "0" : "") + days;
    hrs = (hrs < 10 ? "0" : "") + hrs;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hrs;
    document.getElementById("mins").textContent = min;
    document.getElementById("secs").textContent = sec;
}

function start() {
    if (isRunning) {
        stop();
    } else {
        var days = parseInt(document.getElementById("daysIn").value);
        var hrs = parseInt(document.getElementById("hoursIn").value);
        var min = parseInt(document.getElementById("minsIn").value);
        var sec = parseInt(document.getElementById("secsIn").value);

        if (totalSeconds === undefined) { // Initialize totalSeconds only once
            totalSeconds = (days * 24 * 60 * 60) + (hrs * 60 * 60) + (min * 60) + (sec);
        }

        startTimer();
    }
}

function startTimer() {
    interval = setInterval(() => {
        var d = Math.floor(totalSeconds / (24 * 60 * 60));
        var h = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        var m = Math.floor((totalSeconds % (60 * 60)) / 60);
        var s = Math.floor(totalSeconds % 60);
        console.log(d, h, m, s);
        d = (d < 10 ? "0" : "") + d;
        h = (h < 10 ? "0" : "") + h;
        m = (m < 10 ? "0" : "") + m;
        s = (s < 10 ? "0" : "") + s;
        document.getElementById("days").textContent = d;
        document.getElementById("hours").textContent = h;
        document.getElementById("mins").textContent = m;
        document.getElementById("secs").textContent = s;

        if (totalSeconds <= 0) {
            clearInterval(interval);
            alert("Timer Ended");
            isRunning = false;
        }

        totalSeconds--;
    }, 1000);
    isRunning = true;
}

function stop() {
    clearInterval(interval);
    isRunning = false;
}

function reset() {
    document.getElementById("daysIn").value = "0";
    document.getElementById("hoursIn").value = "0";
    document.getElementById("minsIn").value = "0";
    document.getElementById("secsIn").value = "0";
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("mins").textContent = "00";
    document.getElementById("secs").textContent = "00";
    clearInterval(interval);
    totalSeconds = undefined; // Reset totalSeconds
    isRunning = false;
}