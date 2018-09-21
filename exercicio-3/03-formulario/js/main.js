
//capturar botao:
let btn=document.getElementById('botao');

//criar evento de click:
//colocar acao do click:

btn.addEventListener('click',function(event){
   
//validacao de dados:
let nome= document.getElementById('nome').value;
let senha=document.getElementById('senha').value;
event.preventDefault();
//mensagem:
if(nome=='Monique' && senha.length < 7){
    alert('Sucesso')
    
}else{
    alert('Digite novamente')

}

})












