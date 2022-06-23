const mainButton = document.querySelector('div.main-button');
const mainText = document.querySelector('div.main-button h1');

let status = '';
start()

let playStatus = 0;

mainButton.addEventListener('click', () => {
  if (status == 'start') {
    progress()
  } else if (status == 'progressing') {
    play()
  } else if (status == 'now') {
    if (playStatus == 1) {
      playStatus += 1
      const end = Date.now()
      const total = end - started;
      mainText.textContent = `${total}ms`;
    } else if (playStatus == 2) {
      start();
      playStatus = 0;
    }
  }
})

// Random seconds
function randomSecs() {
  let tenSecsInMillis = 10000;
  return Math.floor(Math.random() * tenSecsInMillis) + 1;
}

// Full start
function start() {
  mainButton.style.backgroundColor = 'lightgrey';
    mainText.textContent = 'Start'
    status = 'start';
    console.log(status)
}

// Progressing
function progress() {
  mainButton.style.backgroundColor = '#d9534f';
    mainText.textContent = '...'
    status = 'progressing';
    console.log(status)

  setTimeout(() => {
    play();
  }, randomSecs())
}

// Game timer going
let started;
function play() {
  mainButton.style.backgroundColor = '#5cb85c';
  mainText.textContent = 'PRESS NOW!'
  status = 'now';
  console.log(status)
  started = Date.now()
  playStatus = 1;

  /* 
  when button is press now again,
  start get new time and calculate how long it took
  */

  // setTimeout(() => {
  //   const end = Date.now()
  //   const total = end - started

  //   console.log(total)
  // }, 1000)

  // console.log(start)
}

/*
when green is on, start timer

when start click to turn red
when red, start timer for random time(within 10 secs)
  after time is up, turn green
when green, start timer
  press and get timer amount and stop timer
    display timer on bottom
  press again return to start
press 
*/