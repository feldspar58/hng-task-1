const timeStamp = document.getElementById("time");

function updateTime() {

  timeStamp.textContent = `${Date.now()} ms`;
}

updateTime();
setInterval(updateTime, 1000);
