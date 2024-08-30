# calcula-media-aritimetica

Um pequeno trabalho que o professor passou no 2° ano do Ensino médio, gerado por I.A mas feito algumas alterações por mim, abaixo a emplicação de cada coisa no código

<HTML>
<div class="container"> <--Criou a divisão "Container"
        <h1>Calculadora de Média Aritimética</h1> <--Mostra na tela essa frase
        <input type="number" id="num1" placeholder="Número 1">
        <input type="number" id="num2" placeholder="Número 2">
        <input type="number" id="num3" placeholder="Número 3">
        <input type="number" id="num4" placeholder="Número 4">
         Esses são inputs que são mostrados na tela, são do tipo number e cada um tem seu próprio ID
        
        <br>
        <button onclick="calcularMedia()">Calcular Média</button> <--Botão na tela que chama o script "Calcular Média"
        <div class="result" id="resultado"></div> <--Uma pequena divisão de Resultado, ela não está sendo mostrada pois não há nenhum elemento dela, somente depois do calculo ela vai aparecer
    </div> <--Fechou a Divisão

    <a href="https://www.youtube.com/watch?v=uHgt8giw1LY" target="_blank" id="footer-button">Não clique aqui</a>  <-- Um botão que está levando você para um vídeo do Youtube. Você nunca viu ele, ok? -_-

    <Javascript>
    
    function calcularMedia() {  <--A função "Calcular Média
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    Esses 4 pegam os valores digitados na tela pelos seus IDs e definem esse valor em cada variável


    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById('resultado').innerText = 'Por favor, insira todos os números.';
        return;
    } Esse código verifica se tem algum valor em branco, se tiver vai mostrar na tela uma mensagem de erro


    var media = (num1 + num2 + num3 + num4) / 4;
    document.getElementById('resultado').innerText = 'Média: ' + media.toFixed(2);
} ^------ Esse código vai pegar os valores e fazer o cálculo, vai pegar o ID "Resultado" Que está branco no HTML e adicionar nele a frase e o resultado (EX= Média: X)
