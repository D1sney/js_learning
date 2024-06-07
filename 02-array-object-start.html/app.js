const inputValue = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')



const notes = [
  {
    title: 'досмотреть Docker',
    isDone: false
  },
  {
    title: 'сделать кофе',
    isDone: true
  },
  {
    title: 'китайский',
    isDone: false
  },
]

function render(values) {
  listElement.innerHTML = ''
  if (notes.length === 0) {
    listElement.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
      <span>Заметок пока нет</span>
    </li>`
  }
  for (let i = 0; i < values.length; i++) {
    listElement.insertAdjacentHTML('afterbegin', `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="${values[i].isDone ? 'text-decoration-line-through' : ''}">${values[i].title}</span>
    <span>
      <span class="btn btn-small btn-${values[i].isDone ? 'warning' : 'success'}" data-index=${i} data-type="toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-index=${i} data-type="remove"}>&times;</span>
    </span>
    </li>`)}
}

render(notes)


createBtn.onclick = function () {
  if (inputValue.value.length === 0) {
    return
  }
  newNote = {
    title: inputValue.value,
    isDone: false
  }
  notes.push(newNote)
  render(notes)
  inputValue.value = ''
}


listElement.onclick = function(event) {
  if (event.target.dataset.index) {
    const eventData = event.target.dataset
    if (eventData.type === 'toggle') {
      notes[eventData.index].isDone = !notes[eventData.index].isDone
    } else if (eventData.type === 'remove') {
      notes.splice(eventData.index, 1)
    }
    render(notes)
  }
}
