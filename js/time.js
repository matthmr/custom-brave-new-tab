var h,m,dform;
var loopClock = () => {
    var time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    dform = (h < 12)? 'AM': 'PM'
    m = (m < 10)? `0${m}`: m;
    h = (h == 12)? h: h % 12;
    h = (h < 10)? `0${h % 12}`: h;
    document.getElementById('clock').innerText = `${h}:${m} ${dform}`;
    setTimeout(loopClock, 1000)
};
