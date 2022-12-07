function generate_cell(number) {
	let cell = document.createElement('div');
	cell.classList.add('grid-cell')
	cell.innerText = number;
	return cell
}

// 1 - creo un bottone che se cliccato genera una griglia con all'interno delle celle numerate
let generate_grid = document.getElementById('grid-generator');
generate_grid.addEventListener('click', function() {
	for (let i = 1; i <= 100; i++) {
		let grid = document.getElementById('container-grid');
		let grid_cell = generate_cell(i);
		grid.append(grid_cell);

		grid_cell.addEventListener('click', function(){
			console.log(this.innerText);
			this.classList.toggle('clicked')
		})
	}
});