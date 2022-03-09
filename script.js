function Converter() {
	var valorEmDolar = parseFloat(document.getElementById("valor").value);

	var precoDoDolar = 5;
	var valorEmReal = valorEmDolar * precoDoDolar;

	var mensagem = "O valor em real é: R$" + valorEmReal;
	elementoH2 = document.getElementById("valorConvertido");
	elementoH2.innerHTML = mensagem;
}