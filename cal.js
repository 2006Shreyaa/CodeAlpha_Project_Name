function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let input = document.getElementById('result').value;
    document.getElementById('result').value = input.substring(0, input.length - 1);
}

function appendToScreen(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        let input = document.getElementById('result').value;
        let result = eval(input);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
