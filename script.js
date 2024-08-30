function calcularMedia() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById('resultado').innerText = 'Por favor, insira todos os números.';
        return;
    }

    var media = (num1 + num2 + num3 + num4) / 4;
    document.getElementById('resultado').innerText = 'Média: ' + media.toFixed(2);
}