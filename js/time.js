var time = new Date();
var h,m,dform;
var clock = () => {
    h = time.getHours();
    m = time.getMinutes();
    dform = (h <= 12)? 'AM': 'PM'
    m = (m < 10)? `0${m}`: m
    h = (h % 12 < 10)? `0${h}`: h % 12
};

function loopClock() {
    clock();
    document.getElementById('clock').innerText = `${h}:${m} ${dform}`;
    //setTimeout(loopClock, 1000)
}