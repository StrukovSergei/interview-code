// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set()
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (rowSet.has(board[i][j])) {
                    return false
                }
                rowSet.add(board[i][j])
            }
        }
    }

    for (let j = 0; j < 9; j++) {
        const colSet = new Set()
        for (let i = 0; i < 9; i++) {
            if (board[i][j] !== '.') {
                if (colSet.has(board[i][j])) {
                    return false
                }
                colSet.add(board[i][j])
            }
        }
    }

    for (let block = 0; block < 9; block++) {
        const boxSet = new Set()
        for (let i = Math.floor(block / 3) * 3; i < Math.floor(block / 3) * 3 + 3; i++) {
            for (let j = (block % 3) * 3; j < (block % 3) * 3 + 3; j++) {
                if (board[i][j] !== '.') {
                    if (boxSet.has(board[i][j])) {
                        return false
                    }
                    boxSet.add(board[i][j])
                }
            }
        }
    }

    return true
}