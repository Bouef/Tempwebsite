function displayTime () {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    
    if (hour < 10){
        hour = "0" + hour;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
}
setInterval(displayTime, 1000);