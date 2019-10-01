import Figure from "./Figure.js";

class Pawn extends Figure {
	constructor () {
		super();
	}
	
	moveFirstMove () {
		//первый ход пешки - на две клетки
	}
	
	capture () {
		//переопределить родительский метод для пешки, т.к. она берёт фигуры по горизонтали
	}
	
	transform () {
		//превратить пешку в другую фигуру, если она достигла конца доски
	}
}