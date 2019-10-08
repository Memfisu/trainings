class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

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
        if (!this.isFinished()) {computerTurn ();} // проверить, не закончилась ли игра и вызвать computerTurn (), если нет
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
        this.isFinished();
    }

    isFinished() { //если игра окончена, возвращает победителя
        let array = [
            [[0,0],[0,1],[0,2]],
            [[1,0],[1,1],[1,2]],
            [[2,0],[2,1],[2,2]],
            [[0,0],[1,0],[2,0]],
            [[0,1],[1,1],[2,1]],
            [[0,2],[1,2],[2,2]],
            [[0,0],[1,1],[2,2]],
            [[0,2],[1,1],[2,0]]
        ];
        
        for (let i=0; i<array.length; i++) {
            let line = array[i];
            let count_o = 0;
            let count_x = 0;
             for (let j=0; j<line.length; j++) {
                let point = line[j];
                let x = point[0];
                let y = point[1];
                if (this.matrix[x][y] = "o") {count_o++;}
                else if (this.matrix[x][y] = "x") {count_x++;}
             }
            if (count_o===3) return "o"; // если есть строка с тремя ноликами
            else if (count_x===3) return "x"; // если есть строка с тремя крестиками
        }

        if (this.isDraw()) return "-"; // если ничья

        getWinner(); //объявить победителя в любом из случаев

        return false; // игра не окончена
    }

    getWinner() { 
        if (this.isFinished()==="x") { // если игра окончена и победили крестики
            document.getElementById("win").classList.remove("end-game"); // отобразить надпись о выигрыше (т.е. убрать скрытие надписи)
        }
        
        if (this.isFinished()==="o") { // если игра окончена и победили нолики
            document.getElementById("loose").classList.remove("end-game"); // отобразить надпись о проигрыше (т.е. убрать скрытие надписи)
        }

        if (this.isFinished()==="-") { // если игра окончена и ничья
            document.getElementById("draw").classList.remove("end-game"); // отобразить надпись о ничьей (т.е. убрать скрытие надписи)
        }
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

    restart() {  //новая игра - по клику на кнопку очистить матрицу + p.classList.toggle("end-game");
        if (this.isFinished()==="x") {
            document.getElementById("win").classList.toggle("end-game");
        }
        if (this.isFinished()==="o") {
            document.getElementById("loose").classList.toggle("end-game");
        }
        if (this.isFinished()==="-") {
            document.getElementById("draw").classList.toggle("end-game");
        }

        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
}

export default TicTacToe;