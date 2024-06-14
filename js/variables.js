const box = document.querySelector('.box') 
const button = document.querySelector('.button_arrow')
const deleteButton = document.querySelector('.delete')
const thead = document.querySelectorAll('.thead')
const addButton = document.querySelector('.add-component')
const myTable = document.getElementById('my-table')


const th = `<th class="th">
						<form class="form">
							<select name="" id="" class="select">
								<option value="SFRN-4204" class="option">
									SFRN-4204
								</option>
								<option value="SFRN-4204" class="option">
									SFRN-4204
								</option>
								<option value="SFRN-4204" class="option">
									SFRN-4204
								</option>
							</select>
						</form>
					</th>
					`
const thForDelete = `<th class="delete_row">
						<button class="delete">
							<img src="./img/icons.svg" alt="delete" class="delete_img">
						</button>
					</th>`

export  {box, button, deleteButton, thead, addButton, th, myTable, thForDelete}
