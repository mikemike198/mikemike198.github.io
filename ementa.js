var total = 0;
var preco = 0;
var quantidade = 0;

function comprar(number){
    valor = Number(document.getElementById("precoproduto" + number).value);
    preco += Number(valor);
    quantidade++;
    calcular();
}

function calcular() {
    document.getElementById("quantidades").innerText = quantidade;
    document.getElementById("total").innerText = preco.toFixed(2);
}

function validar(){
    if (quantidade == 0) {
        alert("Não foram adicionados produtos.");
        return false;
    }
    return true;
}

function limpar() {
    document.getElementById("total").innerText = '0.00';
    document.getElementById("quantidades").innerText = '0';

    quantidade = 0;
    preco = 0;
}

$(document).ready( function() {
    $('button#submit').click( function() {
        $('button#submit').attr('href', 'pagamento.html');
    });
});
