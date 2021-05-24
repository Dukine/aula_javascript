
function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!!");
}

function redirecionar(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com";
}

function trocar(coiso){
    coiso.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto");
}

function voltar(coiso){
    coiso.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    console.log("Olá!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var validar;
var idade = prompt("Qual sua idade?");

console.log(soma(5,10));
console.log(setReplace("Arroz é legal", "Arroz", "Batata"));
console.log(validaIdade(idade));
*/

/*
var d = new Date();
alert(d.getDay()+1);
alert(d.getHours() + ":" + d.getMinutes());
*/

/*
for(var count=0; count<=5; count++){
console.log(count);
}
*/

/*
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
*/

/* 
var idade = prompt ("Qual sua idade?");
if (idade >= 18){
    alert("Você é maior de idade!");
}else{
    var diferenca = 18 - idade;
    if (diferenca == 1){
        alert("Você é menor de idade! Volte em 1 ano!")
    }else{
        alert("Você é menor de idade! Volte em " + diferenca + " anos!")
    }
} 
*/

//var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"},{nome:"laranja", cor:"laranja"}];
//console.log(frutas)
/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta)
*/
//var lista = ["maça", "pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" & "));

//var nome = "Gabriel Werneck";
//var idade = 26;
//var idade2 = 10;
//var frase= "Pizza é top"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//alert (frase.replace("Pizza", "Lasanha"));
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());