import Board from "./Board.js";

class Figure {
	constructor (color, position, captured) {
        this._color = color; //цвет клетки
		this._position = position; //позиция фигуры - цифры + буквы из координат конструктора Board
		this._captured = captured; //жива ли фигура
	}

	get color () {
		//достать из конструктора свойство _color
	}

	set color (color) {
		//установить указанный в параметре цвет color для свойства _color
	}

    get position () {
        //достать из конструктора свойство _position
    }

    set position (position) {
        //установить указанные в параметре координаты position для свойства _position
    }

    get captured () {
        //достать из конструктора свойство _captured
    }

    set captured (captured) {
        //установить указанный в параметре статус captured для свойства _captured
    }

    static someStatic () {

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

}

export default Figure;