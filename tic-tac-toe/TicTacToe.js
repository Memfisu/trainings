class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    //старт игры - инициализировать матрицу 3х3 со значениями null и как-то привязать координаты к инпутам
    //новая игра - всё очистить

    getInput (x, y) { // получить инпут
        let input = document.getElementById(`input${x}${y}`);
        return input;
    }

    gamerTurn(rowIndex, columnIndex) { // ход игрока
        if (this.matrix[rowIndex][columnIndex] != null) return; // проверить, нет ли чего по данным координатам
        else {
            let input = this.getInput(rowIndex, columnIndex);
            this.matrix[rowIndex][columnIndex] = "x"; // если нет, запомнить крестик в координаты 
            input.value="x"; // и отобразить крестик в инпуте
        }
        
        input.disabled=true; // и заблокировать поле
        computerTurn (); // и вызвать computerTurn ();
    }

    computerTurn () { // ход компьютера - поставить нолик на оставшееся свободное место, запомнить координаты
        for (let i=0; i<this.matrix.length; i++){
            for (let j=0; j<this.matrix.length; j++) {
                if (this.matrix[i][j] === null) {
                    matrix[i][j] = "o"; // поставить нолик
                    let input = this.getInput(i, j);
                    input.value="o"; // отобразить нолик в инпуте
                    input.disabled=true; // заблокировать тот инпут, куда поставили нолик
                    return;
                };
            }
        }
    }

    isFinished() { //если игра окончена, возвращает победителя
        let count_o = 0;
        let count_x = 0;
        for (let i=0; i<this.matrix.length; i++){  //если по диагонали-1 заполнено одинаковыми символами
            for (let j=0; j<this.matrix.length; j++) {
                if ((i=j)&&(matrix[i][j] = "o")) {count_o++;}
                else if ((i=j)&&(matrix[i][j] = "x")) {count_x++;}
            }
        }
        if (count_o===3) return "o";
        else if (count_x===3) return "x";

        count_o = 0;
        count_x = 0;

        for (let i=0; i<this.matrix.length; i++){  //если по диагонали-2 заполнено одинаковыми символами
            for (let j=2; j>=0; j--) {
                if (matrix[i][j] = "o") {count_o++;}
                else if (matrix[i][j] = "x") {count_x++;}
            }
        }
        if (count_o===3) return "o";
        else (count_x===3) return "x";

        if (this.isDraw()) return "-"; // если ничья
        return false;
    }

    getWinner() { 
        // if(this.isFinished())
        // return x, o, -
        // иначе ничего не возвращать
        // + в зависимости от победителя отобразить правильную надпись:
        // p.classList.remove("end-game"); - при старте новой игры надпись про выигрыш скрывается
        // p.classList.toggle("end-game"); - при выигрыше появляется (причём должны быть разные в зависимости от того, кто выиграл)
        // p.classList.toggle("end-game"); - при ничьей появляется
    }

    noMoreTurns() { // true, если всё поле уже заполнено
        let result = true;
        for (let i=0; i<this.matrix.length; i++){
            for (let j=0; j<this.matrix.length; j++) {
                if (this.matrix[i][j] === null) {result = false;};
            }
        }
        return result;
    }

    isDraw() { // true, если поле заполнено, а победителя нет
        if (this.noMoreTurns() && (this.getWinner()==="-")) return false;
        else return true;
    }
}

export default TicTacToe;