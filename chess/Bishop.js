import Figure from "./Figure.js";

class Bishop extends Figure {
	constructor () {
		super();
	}
	
	moveHorizontal () {
		//переопределить родительский метод для слона - можно ходить на любое заданное число клеток
	}
}

export default Bishop;