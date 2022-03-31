
let prato, bebida, sobremesa;
let nomePrato, nomeBebida, nomeSobremesa;



function selecionarFrango(){

    document.getElementById("Frango").style.borderColor = "#32B72F";
    document.getElementById("Carne").style.borderColor = "white";
    document.getElementById("Peixe").style.borderColor = "white";
    document.getElementById("Veg").style.borderColor = "white";
    document.getElementById("iconsF").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsC").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsP").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsV").style.color= "rgba(50, 183, 47, 0)";
    prato = "Frango";
}

function selecionarCarne(){

    document.getElementById("Carne").style.borderColor = "#32B72F";
    document.getElementById("Frango").style.borderColor = "white";    
    document.getElementById("Peixe").style.borderColor = "white";
    document.getElementById("Veg").style.borderColor = "white";
    document.getElementById("iconsC").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsF").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsP").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsV").style.color= "rgba(50, 183, 47, 0)";
    prato = "Carne";
}

function selecionarPeixe(){

    document.getElementById("Peixe").style.borderColor = "#32B72F";
    document.getElementById("Frango").style.borderColor = "white";
    document.getElementById("Carne").style.borderColor = "white";
    document.getElementById("Veg").style.borderColor = "white";
    document.getElementById("iconsP").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsC").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsF").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsV").style.color= "rgba(50, 183, 47, 0)";
    prato = "Peixe";
}

function selecionarVeg(){

    document.getElementById("Veg").style.borderColor = "#32B72F";
    document.getElementById("Frango").style.borderColor = "white";
    document.getElementById("Carne").style.borderColor = "white";
    document.getElementById("Peixe").style.borderColor = "white";
    document.getElementById("iconsV").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsC").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsP").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsF").style.color= "rgba(50, 183, 47, 0)";
    
    prato = "Veg";
    }

    
function selecionarCoca(){

   document.getElementById("Coca").style.borderColor = "#32B72F";
   document.getElementById("Agua").style.borderColor = "white";
   document.getElementById("Refresco").style.borderColor = "white";
   document.getElementById("iconsCoca").style.color= "rgba(50, 183, 47, 1)";
   document.getElementById("iconsAgua").style.color= "rgba(50, 183, 47, 0)";
   document.getElementById("iconsRef").style.color= "rgba(50, 183, 47, 0)";
   bebida = "Coca";
}

function selecionarAgua(){

    document.getElementById("Coca").style.borderColor = "white";
    document.getElementById("Agua").style.borderColor = "#32B72F";
    document.getElementById("Refresco").style.borderColor = "white";
    document.getElementById("iconsAgua").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsCoca").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsRef").style.color= "rgba(50, 183, 47, 0)";
    bebida = "Agua";
 }

 function selecionarRefresco(){

    document.getElementById("Coca").style.borderColor = "white";
    document.getElementById("Agua").style.borderColor = "white";
    document.getElementById("Refresco").style.borderColor = "#32B72F";
    document.getElementById("iconsRef").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsCoca").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsAgua").style.color= "rgba(50, 183, 47, 0)";
    bebida = "Refresco";
 }

 function selecionarPudim(){

    document.getElementById("Pudim").style.borderColor = "#32B72F";
    document.getElementById("Brigadeiro").style.borderColor = "white";
    document.getElementById("Maca").style.borderColor = "white";
    document.getElementById("iconsPu").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsBri").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsMa").style.color= "rgba(50, 183, 47, 0)";
    sobremesa = "Pudim";
 }

 function selecionarBrigadeiro(){

    document.getElementById("Pudim").style.borderColor = "white";
    document.getElementById("Brigadeiro").style.borderColor = "#32B72F";
    document.getElementById("Maca").style.borderColor = "white";
    document.getElementById("iconsBri").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsPu").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsMa").style.color= "rgba(50, 183, 47, 0)";
    sobremesa = "Brigadeiro";
 }

 function selecionarMaca(){

    document.getElementById("Pudim").style.borderColor = "white";
    document.getElementById("Brigadeiro").style.borderColor = "white";
    document.getElementById("Maca").style.borderColor = "#32B72F";
    document.getElementById("iconsMa").style.color= "rgba(50, 183, 47, 1)";
    document.getElementById("iconsPu").style.color= "rgba(50, 183, 47, 0)";
    document.getElementById("iconsBri").style.color= "rgba(50, 183, 47, 0)";
    sobremesa = "Maca";
 }


 function fechar(){
    if( (prato === "Frango" || prato === "Carne" || prato === "Peixe" || prato === "Veg") && (bebida ==="Coca" || bebida === "Agua" || bebida === "Refresco") && (sobremesa === "Pudim" || sobremesa === "Brigadeiro" || sobremesa === "Maca")){
      const elemento = document.querySelector(".finalizar");
      elemento.classList.remove("escondido");
    }

 }




 function confirmar(){
   const elemento = document.querySelector(".teladeconfirm");
   elemento.classList.remove("escondido");

    let total = 0;
    let precoPrato = 0;
    let precoBebida = 0;
    let precoSobremesa = 0;

   if(prato === "Frango"){
      total = total + 18.90;
      nomePrato = "Frango Yin Yang";
      precoPrato = 18.90;
   }
   if(prato === "Carne"){
      total = total + 19.90;
      nomePrato = "Carne Qualitè";
      precoPrato = 19.90;
   }
   if(prato === "Peixe"){
      total = total + 20;
      nomePrato = "Peixe Top";
      precoPrato = 20;
   }
   if(prato === "Veg"){
      total = total + 17.90;
      nomePrato = "Vegetariano";
      precoPrato = 17.90;
   }

   if(bebida === "Coca"){
      total = total + 4.9;
      nomeBebida = "Coquinha Gelada";
      precoBebida = 4.90;
   }
   if(bebida === "Agua"){
      total = total + 2.9;
      nomeBebida = "Água Mineral";
      precoBebida = 2.90;
   }
   if(bebida === "Refresco"){
      total = total + 3.9;
      nomeBebida = "Refresco";
      precoBebida = 3.90;
   }

   if(sobremesa === "Pudim"){
      total = total+ 7.0;
      nomeSobremesa = "Pudim";
      precoSobremesa = 7.0;
   }
   if(sobremesa === "Brigadeiro"){
      total = total+ 10.0;
      nomeSobremesa = "Brigadeiro";
      precoSobremesa = 10.0;
   }
   if(sobremesa === "Maca"){
      total = total;
      nomeSobremesa = "Maça";
      precoSobremesa = 0.0;
   }


   
   let valueDish = document.querySelector(".value-dish");
   let pricedish = document.querySelector(".pricedish");
   let valueDrink = document.querySelector(".value-drink");
   let pricedrink = document.querySelector(".pricedrink");
   let valueDessert = document.querySelector(".value-dessert");
   let pricedessert = document.querySelector(".pricedessert");
   let pay = document.querySelector(".pay");



   valueDish.innerHTML = nomePrato;
   pricedish.innerHTML = ("R$ " + parseFloat(precoPrato).toFixed(2).replace(".",","));;

   valueDrink.innerHTML = nomeBebida;
   pricedrink.innerHTML = ("R$ " + parseFloat(precoBebida).toFixed(2).replace(".",","));;

   valueDessert.innerHTML = nomeSobremesa;
   pricedessert.innerHTML = (" R$ " + (parseFloat(precoSobremesa)).toFixed(2).replace(".",","));
  
   pay.innerHTML = (" R$ " + (parseFloat(precoBebida) + parseFloat(precoPrato) + parseFloat(precoSobremesa)).toFixed(2).replace(".",","));

  
 }

 function conta(){

   let total = 0;
    let precoPrato = 0;
    let precoBebida = 0;
    let precoSobremesa = 0;
    
   if(prato === "Frango"){
      total = total + 18.90;
      nomePrato = "Frango Yin Yang";
      precoPrato = 18.90;
   }
   if(prato === "Carne"){
      total = total + 19.90;
      nomePrato = "Carne Qualitè";
      precoPrato = 19.90;
   }
   if(prato === "Peixe"){
      total = total + 20;
      nomePrato = "Peixe Top";
      precoPrato = 20;
   }
   if(prato === "Veg"){
      total = total + 17.90;
      nomePrato = "Vegetariano";
      precoPrato = 17.90;
   }

   if(bebida === "Coca"){
      total = total + 4.9;
      nomeBebida = "Coquinha Gelada";
      precoBebida = 4.90;
   }
   if(bebida === "Agua"){
      total = total + 2.9;
      nomeBebida = "Água Mineral";
      precoBebida = 2.90;
   }
   if(bebida === "Refresco"){
      total = total + 3.9;
      nomeBebida = "Refresco";
      precoBebida = 3.90;
   }

   if(sobremesa === "Pudim"){
      total = total+ 7.0;
      nomeSobremesa = "Pudim";
      precoSobremesa = 7.0;
   }
   if(sobremesa === "Brigadeiro"){
      total = total+ 10.0;
      nomeSobremesa = "Brigadeiro";
      precoSobremesa = 10.0;
   }
   if(sobremesa === "Maca"){
      total = total;
      nomeSobremesa = "Maça";
      precoSobremesa = 0.0;
   }

   const contaFormatada = total.toFixed(2);
   

   let teste;

   let nome = prompt("Qual seu nome?");
   let endereco = prompt("Qual o endereço?");

   teste = "Olá, gostaria de fazer o pedido: \n" +"- Prato: "+ nomePrato + "\n- Bebida: "+ nomeBebida + "\n- Sobremesa: "+nomeSobremesa + "\nTotal: R$ "+ contaFormatada+ "\nNome: "+nome+"\nEndereço: "+endereco;
   
  

   
      let UrlPronto = encodeURIComponent(teste);
      
      window.location.href = "https://wa.me/5532984512533?text="+UrlPronto;
      
   
 }
 
 function reload(){
    location.reload();
 }