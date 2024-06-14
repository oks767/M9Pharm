import { box, button } from './variables.js'

function boxHandler(e) {
	e.preventDefault() // сбрасываем стандартное поведение
	box.classList.toggle('active') // присваиваем ему активный класс
	if (box.classList.contains('active')) {
		// если класс активный ..
		box.style.maxHeight = 100 + '%' // открываем контент
		button.style.transform = 'rotate(180deg)'
	} else {
		// в противном случае
		box.style.maxHeight = 0 // скрываем контент
		button.style.transform = 'rotate(0deg)'
	}
}

function clickButtonBox () {
	button.addEventListener('click', boxHandler)
}
export { clickButtonBox }
