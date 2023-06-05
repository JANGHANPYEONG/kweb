const MIN_ROW = 0;
const MAX_ROW = 6;
const MIN_COL = 0;
const MAX_COL = 7;
const startPosition = { row: 5, col: 0 };

function getElementByPosition(position) {
    return document.getElementsByClassName("cells")[position.row].getElementsByClassName("cell")[position.col];
}

function getNewPositionByKey(key) {
    let row = startPosition.row;
    let col = startPosition.col;

    switch (key) {
        case "ArrowUp":
            row--;
            break;
        case "ArrowDown":
            row++;
            break;
        case "ArrowLeft":
            col--;
            break;
        case "ArrowRight":
            col++;
            break;
        default:
            return startPosition;
    }

    return { row: row, col: col };
}

function isPositionInRange(position) {
    const { row, col } = position;
    return row >= MIN_ROW && row <= MAX_ROW && col >= MIN_COL && col <= MAX_COL;
}

// Step 5: 위치가 벽인지 확인하는 함수
function isPositionWall(position) {
    return getElementByPosition(position).classList.contains("wall");
}

// Step 6: 키를 떼었을 때의 이벤트 리스너
document.addEventListener("keyup", function (event) {
    const currentPositionElement = getElementByPosition(startPosition);
    currentPositionElement.classList.remove("current");

    const newPosition = getNewPositionByKey(event.key);
    if (isPositionInRange(newPosition) && !isPositionWall(newPosition)) {
        startPosition.row = newPosition.row;
        startPosition.col = newPosition.col;
    }

    const newPositionElement = getElementByPosition(startPosition);
    newPositionElement.classList.add("current");

    if (getElementByPosition(newPosition).classList.contains("target")) {
        alert("You Escaped!");
    }
});