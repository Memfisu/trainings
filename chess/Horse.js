import Figure from "./Figure.js";

class Horse extends Figure {
	constructor () {
		super();
	}
	
	moveVertical () {
		//переопределить родительский метод для коня - одно поле по вертикали, если было два поля по горизонтали, и наоборот
	}
	
	moveHorizontal () {
		//переопределить родительский метод для коня - - одно поле по горизонтали, если было два поля по вертикали, и наоборот
	}
}

export default Horse;