document.getElementById("addButton").addEventListener('click', addRow)
document.getElementById("deleteButton").addEventListener('click', removeRow)
document.getElementById("changeRowButton").addEventListener('click', changeRow)
document.getElementById("changeCellButton").addEventListener('click', changeCell)

let table = document.getElementById('table');
console.log(table)

function addRow() {
    let curRow = table.appendChild(document.createElement("tr"));

    let newTD = document.createElement("td");
    newTD.textContent = document.getElementById("animal").value;
    curRow.appendChild(newTD);

    newTD = document.createElement("td");
    newTD.textContent = document.getElementById("description").value;
    curRow.appendChild(newTD);

    newTD = document.createElement("td");
    newTD.textContent = document.getElementById("reason").value;
    curRow.appendChild(newTD);

    newTD = document.createElement("td");
    newTD.textContent = document.getElementById("amount").value;
    curRow.appendChild(newTD);

    console.log(curRow);
}


function removeRow() {
    let rowNumber = document.getElementById('rowNumber').value;
    let rowAmount = table.getElementsByTagName("tr").length;
    if (rowAmount < 2) {
        alert("Нельзя удалить шапку таблицы!")
        return
    }
    if (rowNumber < 1 || rowNumber > rowAmount) {
        alert("Некорректный номер строки");
        return;
    }
    let currTR = table.getElementsByTagName("tr")[rowNumber];
    currTR.parentNode.removeChild(currTR);
}

function changeRow() {
    let rowNumber = document.getElementById('rowNumber').value;
    let rowAmount = table.getElementsByTagName("tr").length;
    if (rowNumber > rowAmount || rowNumber === "0" || rowNumber.length < 1) {
        alert("Некорректный номер строки");
        return;
    }
    let allTD = table.rows[rowNumber].cells;
    if (document.getElementById("animal").value !== "") {
        allTD[0].innerText = document.getElementById("animal").value;
    }
    if (document.getElementById("description").value !== "") {
        allTD[1].innerText = document.getElementById("description").value;
    }
    if (document.getElementById("reason").value !== "") {
        allTD[2].innerText = document.getElementById("reason").value;
    }
    if (document.getElementById("amount").value !== "") {
        allTD[3].innerText = document.getElementById("amount").value;
    }
}

function changeCell() {
    let rowNumber = document.getElementById('TDRowNumber').value;
    let colNumber = document.getElementById('TDColNumber').value;
    let rowAmount = table.getElementsByTagName("tr").length;
    if (rowNumber > rowAmount || rowNumber === "0" || rowNumber.length < 1 || colNumber < 1 || colNumber > 4) {
        alert("Некорректный номер ячейки");
        return;
    }
    table.rows[rowNumber].cells[colNumber - 1].innerText = document.getElementById("newText").value;
}