// <<<DOM>>>
const aside = document.querySelector('aside')
const link = aside.querySelectorAll('.link')
const section = document.querySelectorAll('section')

function init() {
  // return to top when refresh
  // document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // <<<EVENT LISTENER>>>
  aside.addEventListener('click', asideClick)
  document.addEventListener('keydown', asideKey)
  document.addEventListener('wheel', asideWheel)
}

init()

// <<<EVENT FUNCTION>>>
function asideClick(event) {
  link.forEach((e) => e.classList.remove('clicked'))
  const target = event.target
  const id = target.dataset.id
  const sec = document.querySelector(`#${id}`)
  if (target.classList.contains('link')) {
    target.classList.toggle('clicked')
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
function asideKey(event) {
  if (event.key === 'ArrowDown') {
    handleScroll('down')
  } else if (event.key === 'ArrowUp') {
    handleScroll('up')
  }
}

function asideWheel(event) {
  if (event.deltaY > 0) {
    handleScroll('down')
  } else if (event.deltaY < 0) {
    handleScroll('up')
  }
}

function handleScroll(type) {
  const last = section.length
  const clicked = aside.querySelector('.clicked')
  const id = clicked.dataset.id
  let targetId = Number(id.split('-')[1])

  if (type === 'down' && id !== `sec-${last}`) {
    targetId = `sec-${targetId + 1}`
    scroll(clicked, targetId)
  } else if (type === 'up' && id !== 'sec-1') {
    targetId = `sec-${targetId - 1}`
    scroll(clicked, targetId)
  }
}

// <<<OTHER FUNCTION>>>
function scroll(clicked, targetId) {
  clicked.classList.remove('clicked')
  const targetLink = aside.querySelector(`[data-id="${targetId}"]`)
  targetLink.classList.toggle('clicked')
  const sec = document.querySelector(`#${targetId}`)
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
