import { thead } from './variables.js'

function removeString() {
	thead.forEach(item => {
		item.addEventListener('click', function (evt) {
			if (evt.target.closest('.delete_row')) {
				evt.target.closest('thead').remove()
			}
		})
	})
	
}
export {removeString}