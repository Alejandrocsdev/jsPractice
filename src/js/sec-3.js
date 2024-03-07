const startBtn = document.querySelector('.start-btn')
const player = document.querySelector('#player')
const opponent = document.querySelector('#opponent')
const countDownText = document.querySelector('.countDown')
const resultText = document.querySelector('.result-text')

startBtn.addEventListener('click', start)
player.addEventListener('click', guessing)

function start() {
  startBtn.remove()
  let countNum = 3
  const countDown = setInterval(() => {
    countDownText.innerText = countNum
    countNum -= 1
    if (countNum === -1) {
      clearInterval(countDown)
      countDownText.innerText = ''
      player.classList.add('player')
      player.innerHTML = renderPlayerGuess()
    }
  }, 1000)
}

function guessing(event) {
  const target = event.target
  if (Object.keys(target.dataset)[0] === 'guess') {
    opponent.classList.add('opponent')
    const oppNum = opponentGuessNum()
    const oppGuess = numToGuess(oppNum)
    const guess = target.dataset.guess
    if (result(oppGuess, guess)) {
      resultText.innerText = 'Win'
    } else if (result(oppGuess, guess) === false) {
      resultText.innerText = 'Lose'
    } else {
      resultText.innerText = 'Tie'
    }
    opponent.innerHTML = guessToIcon(oppGuess)
  }
}

function renderPlayerGuess() {
  return `<button class="guess-btn" data-guess="paper">
  <i class="fa-regular fa-hand" data-guess="paper"></i>
</button>
<button class="guess-btn" data-guess="scissor">
  <i class="fa-regular fa-hand-peace" data-guess="scissor"></i>
</button>
<button class="guess-btn" data-guess="stone">
  <i class="fa-regular fa-hand-back-fist" data-guess="stone"></i>
</button>`
}

function opponentGuessNum() {
  return Math.ceil(Math.random() * 3)
}

function numToGuess(num) {
  if (num === 1) {
    return 'paper'
  } else if (num === 2) {
    return 'scissor'
  } else {
    return 'stone'
  }
}

function guessToIcon(guess) {
  if (guess === 'paper') {
    return `<button class="guess-btn">
        <i class="fa-regular fa-hand"></i>
      </button>`
  } else if (guess === 'scissor') {
    return `<button class="guess-btn">
    <i class="fa-regular fa-hand-peace"></i>
  </button>`
  } else {
    return `<button class="guess-btn">
    <i class="fa-regular fa-hand-back-fist"></i>
  </button>`
  }
}

function result(opp, pla) {
  if (
    (opp === 'paper' && pla === 'scissor') ||
    (opp === 'scissor' && pla === 'stone') ||
    (opp === 'stone' && pla === 'paper')
  ) {
    return true
  } else if (
    (opp === 'paper' && pla === 'stone') ||
    (opp === 'scissor' && pla === 'paper') ||
    (opp === 'stone' && pla === 'scissor')
  ) {
    return false
  } else {
    return null
  }
}
