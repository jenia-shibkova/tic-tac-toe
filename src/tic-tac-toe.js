class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.gameState = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameState[rowIndex][columnIndex] === null) {
            this.gameState[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {
        const cell_0 = this.getFieldValue(0, 0);
        const cell_1 = this.getFieldValue(0, 1);
        const cell_2 = this.getFieldValue(0, 2);
        const cell_3 = this.getFieldValue(1, 0);
        const cell_4 = this.getFieldValue(1, 1);
        const cell_5 = this.getFieldValue(1, 2);
        const cell_6 = this.getFieldValue(2, 0);
        const cell_7 = this.getFieldValue(2, 1);
        const cell_8 = this.getFieldValue(2, 2);

        // horizontal
        if (cell_0 === cell_1 && cell_0 === cell_2) {
            return cell_0;
        }

        if (cell_3 === cell_4 && cell_3 === cell_5) {
            return cell_3;
        }

        if (cell_6 === cell_7 && cell_6 === cell_8) {
            return cell_6;
        }

        // vertical
        if (cell_0 === cell_3 && cell_0 === cell_6) {
            return cell_0;
        }

        if (cell_1 === cell_4 && cell_1 === cell_7) {
            return cell_1;
        }

        if (cell_2 === cell_5 && cell_2 === cell_8) {
            return cell_2;
        }

        //diagonal \
        if (cell_0 === cell_4 && cell_0 === cell_8) {
            return cell_0;
        }

        //diagonal /
        if (cell_2 === cell_4 && cell_2 === cell_6) {
            return cell_2;
        }
        
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            if (this.gameState[i].includes(null)) {
                return false;
            }            
        }

        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameState[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
