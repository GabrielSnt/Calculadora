function adicionarCaracter(caracter) {
    document.getElementById('display').value += caracter;
}

function limpar() {
    document.getElementById('display').value = '';
}

function apagar() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        var display = document.getElementById('display');
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}