import Board from "./Board.js";

class Figure extends Board {
	constructor () {
		super();
		this.position = [][]; //позиция фигуры - цифры + буквы из координат конструктора Board
		this.captured = false; //жива ли фигура
	}
	moveVertical () {
		//передвинуть фигуру вверх или вниз на одну клетку
	}
	
	moveHorizontal () {
		//передвинуть фигуру влево или вправо на одну клетку
	}
	
	moveDiagonal () {
		//передвинуть фигуру по горизонтали на одну клетку
	}
	
	capture () {
		//взять фигуру
	}
	
	//куда-то нужны наверное шах и мат?
}

export default Figure;