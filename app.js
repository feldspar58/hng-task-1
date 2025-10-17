const timeStamp = document.getElementById("time");

function updateTime() {
  timeStamp.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
