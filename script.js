let lapArr = [];

let millisecond = 0;
let second = 0;
let minute = 0;

let timeId = null;
stopBtn.disabled = true;
resetBtn.disabled = true;
lapBtn.disabled = true;
stopBtn.style.cursor = "not-allowed";
resetBtn.style.cursor = "not-allowed";
lapBtn.style.cursor = "not-allowed";

startBtn.addEventListener("click", () => {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  lapBtn.disabled = false;
  startBtn.style.cursor = "not-allowed";
  stopBtn.style.cursor = "pointer";
  lapBtn.style.cursor = "pointer";

  if (timeId !== null) {
    clearInterval(timeId);
  }
  timeId = setInterval(startWatch, 10);
});

stopBtn.addEventListener("click", () => {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  lapBtn.disabled = false;
  resetBtn.disabled = false;
  stopBtn.style.cursor = "not-allowed";
  startBtn.style.cursor = "pointer";
  resetBtn.style.cursor = "pointer";
  lapBtn.style.cursor = "pointer";
  clearInterval(timeId);
});

resetBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  lapBtn.disabled = true;
  resetBtn.disabled = true;

  startBtn.style.cursor = "pointer";
  stopBtn.style.cursor = "not-allowed";
  lapBtn.style.cursor = "not-allowed";
  resetBtn.style.cursor = "not-allowed";
  clearInterval(timeId);
  time.innerHTML = `00:00:00`;
});

function startWatch() {
  millisecond++;
  if (millisecond == 100) {
    millisecond = 0;
    second++;
    if (second == 60) {
      second = 0;
      minute++;
    }
  }
  let millisecondStr = millisecond < 10 ? `0${millisecond}` : millisecond;
  let secondStr = second < 10 ? `0${second}` : second;
  let minuteStr = minute < 10 ? `0${minute}` : minute;
  time.innerHTML = `${minuteStr}:${secondStr}:${millisecondStr}`;
}

lapBtn.addEventListener("click", () => {
  lapArr.push(time.innerText);
  lapRender();
});

function lapRender() {
  timerList.innerHTML = lapArr
    .map((item, index) => {
      return `<li class="timer_list_item">${index + 1}. ${item}</li>`;
    })
    .join("");
}
