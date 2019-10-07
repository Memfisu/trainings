class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null]
            [null, null, null]
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

    isFinished() { //если по вертикали, горизонтали или диагонали заполнено одинаковыми символами, либо всё поле заполнено - игра окончена и возвращает true 
        // либо isDraw() === true, либо кто-то выиграл
    }

    getWinner() { 
        // isFinished() === true
        // return x, o, -
        // в зависимости от победителя отобразить правильную надпись:
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

    //старт игры - инициализировать матрицу 3х3 со значениями null и как-то привязать координаты к инпутам
    //новая игра - всё очистить
}

export default TicTacToe;