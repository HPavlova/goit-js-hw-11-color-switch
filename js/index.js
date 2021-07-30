const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const backgroundChange_DELAY = 1000;
let timeoutId = null;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

// console.log(refs);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onBackgroundChangeClick);
refs.stopBtn.addEventListener('click', onBackgroundStopClick);

function onBackgroundStopClick() {
  stopBackground();
  clearTimeout(timeoutId);
}

function onBackgroundChangeClick() {
  refs.startBtn.disabled = true;

  timeoutId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, backgroundChange_DELAY);
}

function stopBackground() {
  // refs.body.style.backgroundColor = '';
  refs.startBtn.disabled = false;
}
