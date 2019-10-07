class TicTacToe {
    constructor() {
        let matrix = [][];
    }

    getCurrentPlayerSymbol() { // возвращает символ игрока - это видимо если давать ему выбрать, за кого играть, но пусть пока что всё время крестиками играет

    }

    nextTurn(rowIndex, columnIndex) { // сделать ход
        // на ход игрока - при потере фокуса заблокировать поле, полученное от getFieldValue(rowIndex, colIndex), запомнить координаты
        // ход компьютера - поставить нолик на оставшееся свободное место, запомнить координаты

    }

    isFinished() { //если по вертикали, горизонтали или диагонали заполнено одинаковыми символами, либо всё поле заполнено - игра окончена и возвращает true 
        // либо isDraw() === true, либо кто-то выиграл
    }

    getWinner() { // если игра окончена, назвать победителя
        // isFinished() === true
        // в зависимости от победителя отобразить правильную надпись:
        //  p.classList.remove("end-game"); - при старте новой игры надпись про выигрыш скрывается
        // p.classList.toggle("end-game"); - при выигрыше появляется (причём должны быть разные в зависимости от того, кто выиграл)
    }

    noMoreTurns() { // true, если всё поле уже заполнено

    }

    isDraw() { // true, если поле заполнено, а победителя нет
        // noMoreTurns() === true И getWinner() возвращает не победителя
    }

    getFieldValue(rowIndex, colIndex) { //matrix[row][col] либо null

    }

    // старт игры - инициализировать матрицу 3х3 и привязать координатык инпутам
    //новая игра - всё очистить
}

export default TicTacToe;