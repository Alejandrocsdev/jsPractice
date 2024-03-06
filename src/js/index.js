// <<<DOM>>>
const aside = document.querySelector('aside')
const link = aside.querySelectorAll('.link')

function init() {
  // return to top when refresh
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // <<<EVENT LISTENER>>>
  aside.addEventListener('click', asideClick)
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
