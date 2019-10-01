import Figure from "./Figure.js";
import Pawn from "./Pawn.js";
import Bishop from "./Bishop.js";
import Horse from "./Horse.js";
import Rook from "./Rook.js";
import Queen from "./Queen.js";
import King from "./King.js";

class Board {
	constructor() {
		this.coordinate_x = ["1", "2", "3", "4", "5", "6", "7", "8"]; //координаты - цифры
		this.coordinate_y = ["a", "b", "с", "d", "e", "f", "g", "h"]; //координаты - буквы
		this.color = ["white", "black"]; //цвет клетки
	}
	
	start () {
		// расставить фигуры для начала игры
        let pawn = new Pawn("white", ['1', 'b'], false); // пример создания пешки
    }
	
	end () {
		//закончить игру, установив winner в цвет победителя или в пат
	}
}

export default Board;