// <<<DOM>>>
const aside = document.querySelector('aside')
const link = aside.querySelectorAll('.link')
const section = document.querySelectorAll('section')

function init() {
  // return to top when refresh
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // <<<EVENT LISTENER>>>
  aside.addEventListener('click', asideClick)
  document.addEventListener('keydown', asideKey)
}

init()

// <<<EVENT FUNCTION>>>
function asideClick(element) {
  link.forEach((e) => e.classList.remove('clicked'))
  const target = element.target
  const id = target.dataset.id
  const sec = document.querySelector(`#${id}`)
  if (target.classList.contains('link')) {
    target.classList.toggle('clicked')
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
function asideKey(element) {
  const last = section.length
  const clicked = aside.querySelector('.clicked')
  const id = clicked.dataset.id
  let targetId = Number(id.split('-')[1])
  if (element.key === 'ArrowDown' && clicked.dataset.id !== `sec-${last}`) {
    targetId = `sec-${targetId + 1}`
    keySwitch(clicked, targetId)
  } else if (element.key === 'ArrowUp' && clicked.dataset.id !== 'sec-1') {
    targetId = `sec-${targetId - 1}`
    keySwitch(clicked, targetId)
  }
}
// <<<OTHER FUNCTION>>>
function keySwitch(clicked, targetId) {
  clicked.classList.remove('clicked')
  const targetLink = aside.querySelector(`[data-id="${targetId}"]`)
  targetLink.classList.toggle('clicked')
  const sec = document.querySelector(`#${targetId}`)
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
