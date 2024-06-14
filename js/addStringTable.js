import { addButton, myTable, th, thForDelete} from './variables.js'

function addStringForTable () {
	addButton.addEventListener('click', function() {
		const thead = document.createElement('thead')
		myTable.appendChild(thead)
		const trItem = document.createElement('tr')
		thead.appendChild(trItem)
		for (let i = 0; i < 4; i++){
			trItem.innerHTML += th
			if (i === 3) {
				trItem.innerHTML += thForDelete			
			}
		}
		
	})
}

export {
	addStringForTable
}

// $('#addColumnChild').click(function(){
//    $('#my-table tr').each(function(){
//       $(this).append(`<td></td>`);
//    });
// });