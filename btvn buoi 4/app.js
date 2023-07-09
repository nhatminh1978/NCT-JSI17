
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var pause = document.getElementById("pause");
var start = document.getElementById("start");
var stop = document.getElementById("stop")
var myInterval;
start.addEventListener("click",()=>{
  myInterval = setInterval(setTime, 100)

})
pause.addEventListener("click",()=>{
  clearInterval(myInterval)
})
stop.addEventListener("click",()=>{
  clearInterval(myInterval)
  secondsLabel.innerHTML = "00"
  minutesLabel.innerHTML = "00"
  totalSeconds = 0
})
var totalSeconds = 0;


function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}