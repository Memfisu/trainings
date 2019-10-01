class Board {
	constructor() {
		this.coordinate_x = [1, 2, 3, 4, 5, 6, 7, 8]; //координаты - цифры
		this.coordinate_y = [a, b, с, d, e, f, g, h]; //координаты - буквы
		this.color = [white, black]; //цвет клетки
	}
	
	start () {
		// расставить фигуры для начала игры
	}
	
	end () {
		//закончить игру, установив winner в цвет победителя или в пат
	}
}

export default Board;