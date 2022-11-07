const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackgroundColor = {
  intervalId: null,
  start() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.setAttribute('disabled', '');
    this.intervalId = setInterval(() => {
      console.log('start');
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    refs.startBtn.removeAttribute('disabled', '');
    console.log('stop');
  },
};

refs.startBtn.addEventListener(
  'click',
  bodyBackgroundColor.start.bind(bodyBackgroundColor)
);
refs.stopBtn.addEventListener(
  'click',
  bodyBackgroundColor.stop.bind(bodyBackgroundColor)
);
