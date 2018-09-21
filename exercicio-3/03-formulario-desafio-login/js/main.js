//capturar botao
let botao=document.querySelector("#btn");
//capturar evento do botao
    botao.addEventListener("click",function(event){
       //capturar dados usuario
       let nome= document.querySelector("#nome").value;
       let senha= document.querySelector("#senha").value;
       event.preventDefault();
        //validar dados e mensagem
       if(nome=="admin" && senha=="admin"){
           //alert('dados válidos')
           //document.querySelector("#msg").textContent='dados válidos'
           let mensagem=document.querySelector("#msg")
           mensagem.textContent="dados corretos"


       }else{
           //alert('digite seus dados corretamente')
           //document.querySelector("#msg").textContent='digite seus dados novamente'
           let mensagem=document.querySelector("#msg")
           mensagem.textContent='digite seus dados novamente'
       }


    })
