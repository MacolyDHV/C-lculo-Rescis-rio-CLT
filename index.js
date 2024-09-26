



/*//PROMPT INICIAL PARA COLETA DE QUANTAS NOTAS SERÃO UTILIZADAS NO CALCULO
var qtdNotas=prompt("Quantas notas serão avaliadas? ")
//CRIAÇÃO DO ACUMULADOR QUE VAI SOMAR TODAS AS NOTAS
var acumuladordeNotas= 0;
//ESTRUTURA DE REPEIÇAO QUE IRÁ RODAR UMA VEZ PRA CADA NOTA
for(var i = 1; i<= qtdNotas; i++){
   // PROMPT PARA PERGUNTAR A NOTA DO ALUNO ATUAL 
    var nota = prompt("Digite a nota " + i)
    //VARIAVEL RECEBE O VALO DELA MESMA MAIS A NOTA DO ALUNO ATUAL
    acumuladordeNotas = acumuladordeNotas + Number(nota)
}
//CRIAR UM ALERTA COM A DIVISAO DO VALOR ACUMULADO PELA QTDE DE NOTAS
alert("A média é " + (acumuladordeNotas / Number(qtdNotas)))*/




/*alert(listadeNomes[0] + " é aluno do curso de programação") 
alert(listadeNomes[1] + " é aluno do curso de programação") 
alert(listadeNomes[2] + " é aluno do curso de programação") 
alert(listadeNomes[3] + " é aluno do curso de programação") 
alert(listadeNomes[4]+ " é aluno do curso de programação") 
alert(listadeNomes[5] + " é aluno do curso de programação") 
alert(listadeNomes[6] + " é aluno do curso de programação") 
alert(listadeNomes[7] + " é aluno do curso de programação") 
alert(listadeNomes[8] + " é aluno do curso de programação")*/

//listadeNomes.forEach(nome => alert(nome + " é aluno do curso de programação"))

/*var listadeNomes= ["Maylon", "Arthur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly", "Dalton", "Patrick"]
var indiceescolhido = prompt("Digite o indice do aluno que deseja buscar")
var nomescolhido = listadeNomes[indiceescolhido]
alert(" O índice " + indiceescolhido + " é o aluno " + nomescolhido)*/

/*var numero1= prompt("Digite um numero")

for(var i=0 ; i<=10; i++){
    alert(i+ "X" + numero1 + "=" + (i * numero1))
}*/




/*var listadeNomes= ["Maylon", " Arthur", " Ryan", " Raphael", " Maria", " Gabriel", " Macoly", " Dalton", " Patrick"]

var curso = {
    nomeDoCurso: "Lógica de Programção",
    alunos: listadeNomes,
    cargaHoraria: 60,
    quantosPresentes: listadeNomes.length,
    professor: "Daniel"
}

alert("Os alunos do curso " + curso.nomeDoCurso + " são : " + curso.alunos + " onde há " + curso.quantosPresentes + " presentes no momemnto, com carga horária de " + curso.cargaHoraria + 
    " horas, juntamente com professor " + curso.professor )*/




/*var listadeNomes= ["Maylon", " Arthur", " Ryan", " Raphael", " Maria", " Gabriel", " Macoly", " Dalton", " Patrick"]

var curso ={
    nome: "Lógica de Programação",
    alunos:listadeNomes,
    cargaHoraria: 60,
    materia: "Javascript",
    dataInicio: "27/08/2024",
    dataFinal: " 29/09/2024",
}
alert(curso.nome + " é um curso com " + curso.cargaHoraria + " h de carga horaria tendo matéria de " + curso.materia + " iniciado no dia " + curso.dataInicio + " e finalizado no dia " + curso.dataFinal + " , com os alunos: " + curso.alunos )*/


/*var listadeNomes= ["Maylon", " Arthur", " Ryan", " Raphael", " Maria", " Gabriel", " Macoly", " Dalton", " Patrick"]

var curso ={
    nome: prompt("Digite o nome do curso"),
    alunos:listadeNomes,
    cargaHoraria: 60,
    materia: ("Digite a Materia"),
    dataInicio: "27/08/2024",
    dataFinal: " 29/09/2024",
    professor: prompt("Nome do Professor")
}
alert(curso.nome + " é um curso com " + curso.cargaHoraria + " h de carga horaria tendo matéria de " + curso.materia + " iniciado no dia " + curso.dataInicio + " e finalizado no dia " + curso.dataFinal + " , com os alunos: " + curso.alunos + ". Aprendendo a resistencia a cadeirada com professor " + curso.professor )*/



/*
function rotinaDiaria(){
    alert("Acordar")
    alert("Arrumar a cama")
    alert("Escovar os dentes")
    alert("Colocar uniforme")
    alert("Dar ração pro cachorro")
    alert("Ir trabalhar")
} 

rotinaDiaria()*/

/*function somarNumeros(num1, num2){
    var resultado = num1 + num2
    alert(resultado)
}
somarNumeros(10, 50)*/

//ou

/*function somarNumeros(){
    var num1 = Number(prompt("Digite o primeiro numero"))
    var num2 = Number(prompt("Digite o segundo numero"))
    var resultado = num1 + num2
    alert(resultado)
}
somarNumeros()*/


/*function saudacao(nome) {
    alert("Seja bem vindo, " + nome)
    alert("Gigite a operação: \n1- Tal \n2- Tal")
}

saudacao("Macoly")*/

/*function multiplicar(){
    var num1= Number(prompt("Digite o primeiro numero"))
    var num2= Number(prompt("Digite o segundo numero"))
    var num3= Number(prompt("Digite o terceiro numero"))
    var resultado= num1 * num2 * num3
    alert(resultado)

}
multiplicar()*/



/*function classificador(){
var numero= (prompt("Digite o número"))
if (numero >10){
    alert(numero + " é maior que 10")
}
else if(numero==10){
    alert(numero + " é igual a dez")
}
else {
    alert(numero + " é menor que 10")
    
}

}
classificador()*/



/*var cep = "12345678910"
//alert( cep.substring(0,5) + "-" + cep.substring(5,8))
//ou pode criar var
var cepFormatado = ( cep.substring(0,3) + "." + cep.substring(3,6) + "." + cep.substring(6,9) + "-" + cep.substring(9,11))
alert(cepFormatado)*/





function contas(){

alert("Seja bem-vindo ao seu novo sistema de Cálculos Recisórios")



var operacao=0
var acumulador=0
while(operacao!=5){
operacao= prompt(" O que o senhor(a) deseja ? \n1- Calcular Salário do mês \n2- Calcular Saldo de Férias \n3- Calcular Décimo Terceiro \n4- Saldo Total \n5- Sair do Sistema")
if(operacao == 1){
    
    var valorSalario=Number(prompt("Digite o valor do seu salário."))
    var diasTrabalahdos=Number(prompt("Digite quantos dias você trabalhou durante o mês."))
    var diasMes=Number(prompt("Digite quantos dias tem o mês atual."))
    var resultado= (valorSalario/diasMes*diasTrabalahdos).toFixed(2)
    alert("O seu saldo de sálario dos dias trabalhados referente a esse mês será de: R$ " + resultado)
    acumulador= acumulador + Number(resultado)

}

else if(operacao == 2){
    var valorSalario=Number(prompt("Digite o valor do seu salário."))
    var mesesTrabalahdos=Number(prompt("Digite quantos meses foram trabalhados após o mês das suas férias ou, após a data de inicio do seu contrato de trabalho caso ainda não tenha tirado férias."))
    var mesesFerias=(((valorSalario/12)*mesesTrabalahdos)*1.33).toFixed(2)
    alert("Seu saldo de férias será de: R$" + mesesFerias)
    acumulador= acumulador + Number(mesesFerias)

}
else if(operacao == 3){
    var valorSalario=Number(prompt("Digite o valor do seu salário."))
    var mesesTrabalahdos=Number(prompt("Digite quantos meses foram trabalhados esse ano."))
    var mesesDecimo=((valorSalario/12)*mesesTrabalahdos).toFixed(2)
    alert("Seu décimo terceiro é de: R$" + mesesDecimo)
    acumulador= acumulador + Number(mesesDecimo)
}
else if(operacao == 4){
    alert("\nDetalhes: \nSaldo de dias trabalhados a receber: R$" + Number(resultado).toLocaleString('pt-BR') + "\nSaldo das Férias a receber: R$" + Number(mesesFerias).toLocaleString('pt-BR') + "\nSaldo do Decimo Terceiro a receber: R$" + Number(mesesDecimo).toLocaleString('pt-BR') + "\nTotaliziando saldo de: R$ " + Number(acumulador).toLocaleString('pt-BR'))
    
}

else if(operacao == 5){
alert("Obrigado por usar o sistema, espero ter ajudado ^^")


}

else {
    alert("Opção inválida! Por favor, escolha uma opção válida.");
}
}
}




