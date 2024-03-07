// <<<DOM>>>
const checkPrime = document.querySelector('.check-prime')
const getOrdinal = document.querySelector('.get-ordinal')
const getByOrdinal = document.querySelector('.get-by-ordinal')
const getRange = document.querySelector('.get-range')
const taskC1 = document.querySelector('.c-1')

function init() {
  // <<<EVENT LISTENER>>>
  checkPrime.addEventListener('click', task1)
  getOrdinal.addEventListener('click', task2)
  getByOrdinal.addEventListener('click', task3)
  getRange.addEventListener('click', task4)
  taskC1.addEventListener('click', sec1Reset)
}

init()

// <<<EVENT FUNCTION>>>
function task1(event) {
  const target = event.target
  const input = checkPrime.querySelector('.i-1')
  const answer = checkPrime.querySelector('.a-1')
  const value = Number(input.value)
  if (target.classList.contains('s-1')) {
    if (value > 0 && value <= 1000 && value !== NaN) {
      answer.classList.remove('err')
      answer.innerText = chkPrime(value)
    } else {
      answer.classList.add('err')
      answer.innerText = 'error'
    }
  }
}
function task2(event) {
  const target = event.target
  const input = getOrdinal.querySelector('.i-1')
  const answer = getOrdinal.querySelector('.a-1')
  const value = Number(input.value)
  if (target.classList.contains('s-1')) {
    if (value > 0 && value <= 1000 && value !== NaN && chkPrime(value)) {
      answer.classList.remove('err')
      answer.innerText = ordinal(value)
    } else {
      answer.classList.add('err')
      answer.innerText = 'error'
    }
  }
}
function task3(event) {
  const target = event.target
  const input = getByOrdinal.querySelector('.i-1')
  const answer = getByOrdinal.querySelector('.a-1')
  const value = Number(input.value)
  if (target.classList.contains('s-1')) {
    if (value > 0 && value <= 1000 && value !== NaN) {
      answer.classList.remove('err')
      answer.innerText = byOrdinal(value)
    } else {
      answer.classList.add('err')
      answer.innerText = 'error'
    }
  }
}
function task4(event) {
  const target = event.target
  const ini = getRange.querySelector('.ini')
  const end = getRange.querySelector('.end')
  const answer = getRange.querySelector('.a-1')
  const iniValue = Number(ini.value)
  const endValue = Number(end.value)
  if (target.classList.contains('s-1')) {
    if (
      iniValue > 0 &&
      iniValue <= 1000 &&
      iniValue !== NaN &&
      endValue > 0 &&
      endValue <= 1000 &&
      endValue !== NaN &&
      iniValue < endValue
    ) {
      answer.classList.remove('err')
      answer.innerText = range(iniValue, endValue)
    } else {
      answer.classList.add('err')
      answer.innerText = 'error'
    }
  }
}
function sec1Reset(event) {
  const target = event.target
  const reset = taskC1.querySelectorAll('.reset')
  if (target.classList.contains('r-1')) {
    reset.forEach((e) => {
      e.value = ''
      e.innerText = ''
      e.classList.remove('err')
    })
  }
}

// <<<OTHER FUNCTION>>>
function chkPrime(prime) {
  let count = 0
  for (let i = 1; i <= prime; i++) {
    count = prime % i === 0 ? count + 1 : count
  }
  return count === 2 ? true : false
}
function ordinal(prime) {
  if (chkPrime(prime)) {
    let ordinal = 0
    while (byOrdinal(ordinal) !== prime) {
      ordinal++
      if (byOrdinal(ordinal) === prime) {
        return ordinal
      }
    }
  } else {
    console.log(`${prime} is not a prime number.`)
  }
}
function byOrdinal(ordinal) {
  let count = 0
  let prime = 0
  while (count !== ordinal) {
    prime++
    if (chkPrime(prime)) {
      count++
    }
  }
  return prime
}
function range(ini, end) {
  let result = ''
  for (let i = ini; i <= end; i++) {
    if (chkPrime(i)) {
      result = result.concat(`${i}, `)
    }
  }
  return result.slice(0, -2)
}
