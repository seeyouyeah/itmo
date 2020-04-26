//js2
"use strict";

var form = document.createElement('form'),
    inputCols = document.createElement('input'),
    inputRows = document.createElement('input'),
    labelCols = document.createElement('label'),
    labelRows = document.createElement('label'),
    button = document.createElement('button')
    ;

inputCols.type = 'text';
inputCols.id = 'cols';
inputCols.style.display = 'block';

labelCols.innerText = 'Количество столбцов';
labelCols.htmlFor = 'cols';
labelCols.style.display = 'block';

inputRows.type = 'text';
inputRows.id = 'rows';
inputRows.style.display = 'block';

labelRows.innerText = 'Количество строк';
labelRows.htmlFor = 'rows';
labelRows.style.display = 'block';

button.type = 'button';
button.innerText = 'Создать таблицу';
button.style.marginTop = '10px';

button.onclick = () => {
    form.style.display = 'none';
    createTable(
        inputRows.value,
        inputCols.value,
    );
    createFunctionPanel();
    form.reset();
};

form.append(labelCols, inputCols,
            labelRows, inputRows, button);
document.body.appendChild(form);

function createTable(cols, rows) {
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = createTableCell();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function createTableCell() {
    let td = document.createElement('td');
    td.style.minWidth = '200px';
    td.style.height = '80px';
    td.style.border = '1px solid black';
    td.appendChild(createTableCellContent(td));
    return td;
}

// 3
function createTableCellContent(td) {
    td.innerHTML = '';
    let form = document.createElement('form'),
        textarea = document.createElement('textarea'),
        button = document.createElement('button');
    button.innerText = 'Сохранить';
    button.type = 'button';
    button.style.display = 'block';
    button.onclick = () => {
        td.innerText = textarea.value;
        form.hidden = 'true';
    };
    form.append(textarea, button);
    return form;
}

function createFunctionPanel() {
    let divFunc = document.createElement('div');
    divFunc.className = 'funcblock';
    divFunc.append(borderChanger(),
        captionChanger(),
        rowDeleter(),
        divRandomContentCreator(),
        tableDeleter());
    document.body.appendChild(divFunc);
}

function createFunction() {
    let div = document.createElement('div');
    div.className = 'function';
    return div;
}

class defaultFunction {
    constructor(buttonName, withInput = true) {
        this.div = createFunction();
        this.form = document.createElement('form');
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerText = buttonName;
        if (withInput) {
            this.inputElement = document.createElement('input');
            this.inputElement.type = 'text';
            this.form.append(this.inputElement);
        }
        this.form.append(this.button);
        this.div.append(this.form);
    }

    getDiv() {
        return this.div;
    }

    getInputValue() {
        return this.inputElement.value;
    }

    addFormElement(HTMLElement) {
        this.form.prepend(HTMLElement);
    }

    addOnButtonListener(onClickFunction) {
        this.button.onclick = onClickFunction;
    }
};

function borderChanger() {
    let func = new defaultFunction(
        'Применить'
    );

    func.addOnButtonListener(() => {
        let tdList = document.querySelectorAll('td');
        tdList.forEach((td) =>
            td.style.border = `${func.getInputValue()}px ${select.value}`
        );
    });

    func.inputElement.oninput = () => {
        func.button.innerText = 'Применить' + ' ' + func.getInputValue() + ' px ';
            func.button.innerText += ' и рамка ' + select.value;
    };

    let select = createHTMLSelectElement(func);

    getBorderOptions().forEach((option) => select.appendChild(option));

    func.addFormElement(select);
    return func.getDiv();
}

function createHTMLSelectElement(func) {
    let select = document.createElement('select');

    select.onchange = () => {
        if (func.getInputValue() !== '') {
            func.button.innerText = button.innerText = 'Применить' + ' ' + func.getInputValue() + ' px ' +
                'и рамка ' + select.value;
        } else {
            func.button.innerText = 'Применить' + ' ' + 'рамка ' + select.value;
        }
    };
    return select;
}

function getBorderOptions() {
    let borderOptions = [];
    ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'].forEach(
        (borderOption) => {
            let option = document.createElement('option');
            option.innerText = borderOption;
            borderOptions.push(option);
        }
    );
    return borderOptions;
}

function captionChanger() {
    let func = new defaultFunction(
        'Добавить заголовок'
    );

    func.addOnButtonListener(() => {
        let caption = document.createElement('caption');
        caption.innerText = func.getInputValue();
        document.querySelector('table').appendChild(caption);
    });

    return func.getDiv();
}

function rowDeleter() {
    let func = new defaultFunction(
        'Удалить строку'
    );

    func.addOnButtonListener(() => {
        let tableRows = document.querySelectorAll('tr');
        if (func.getInputValue() < 1 || func.getInputValue() > tableRows.length
            || func.getInputValue().match(/([^0-9])/g)) {
            alert('Нет такой строки');
        } else {
            tableRows[func.getInputValue() - 1].remove();
        }
    });
    return func.getDiv();
}

function divRandomContentCreator() {
    let func = new defaultFunction(
        'Magic',
        false
    );

    func.addOnButtonListener(() => {
        magic(chooseRandomTableDataCell());
    });
    return func.getDiv();
}

function magic(td) {
    if (randomInteger(1, 15) === 2) {
        td.appendChild(createTableCellContent(td));
    } else {
        chooseRandomBgColor(td);
        chooseRandomFontStyle(td);
    }
}

function chooseRandomTableDataCell() {
    let tableRowList = document.querySelectorAll('tr');
    let tableRowIndex = randomInteger(0, tableRowList.length - 1);
    let tableDataCellIndex = randomInteger(0, tableRowList[tableRowIndex].cells.length - 1);
    return tableRowList[tableRowIndex].cells[tableDataCellIndex];
}

function setRandomColor() {
    let hexTable = "0123456789ABCDEF";
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
        newColor += hexTable[randomInteger(0, hexTable.length - 1)];
    }
    console.log(newColor);
    return newColor;
}

function chooseRandomBgColor(td) {
    td.style.backgroundColor = setRandomColor();
}

function chooseRandomFontStyle(td) {
    let newColor = setRandomColor();
    let newFontSize = randomInteger(15, 25) + 'pt';
    td.style.color = newColor;
    td.style.fontSize = newFontSize;
    if (typeof td.childNodes[0] !== 'undefined') {
        td.childNodes[0].childNodes.forEach((elem) => {
            elem.style.color = newColor;
            elem.style.fontSize = newFontSize;
        });
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function tableDeleter() {
    let func = new defaultFunction(
        'Удалить',
        false
    );

    func.addOnButtonListener(() => {
        document.querySelector('table').remove();
        document.querySelector('div.funcblock').remove();
    });
    return func.getDiv();
}
