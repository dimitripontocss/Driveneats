
let prato, bebida, sobremesa;



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
       document.getElementById("finalizar").style.display = "flex";
    }

 }