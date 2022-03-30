
let prato, bebida, sobremesa;



function selecionarFrango(){

    document.getElementById("Frango").style.borderColor = "#32B72F";
    document.getElementById("Carne").style.borderColor = "white";
    document.getElementById("Peixe").style.borderColor = "white";
    document.getElementById("Veg").style.borderColor = "white";
    prato = "Frango";
}

function selecionarCarne(){

    document.getElementById("Carne").style.borderColor = "#32B72F";
    document.getElementById("Frango").style.borderColor = "white";    
    document.getElementById("Peixe").style.borderColor = "white";
    document.getElementById("Veg").style.borderColor = "white";
    prato = "Carne";
}

function selecionarPeixe(){

    document.getElementById("Peixe").style.borderColor = "#32B72F";
    document.getElementById("Frango").style.borderColor = "white";
    document.getElementById("Carne").style.borderColor = "white";
    document.getElementById("Veg").style.borderColor = "white";
    prato = "Peixe";
}

function selecionarVeg(){

    document.getElementById("Veg").style.borderColor = "#32B72F";
    document.getElementById("Frango").style.borderColor = "white";
    document.getElementById("Carne").style.borderColor = "white";
    document.getElementById("Peixe").style.borderColor = "white";
    prato = "Veg";
    }

    
function selecionarCoca(){

   document.getElementById("Coca").style.borderColor = "#32B72F";
   document.getElementById("Agua").style.borderColor = "white";
   document.getElementById("Refresco").style.borderColor = "white";
   bebida = "Coca";
}

function selecionarAgua(){

    document.getElementById("Coca").style.borderColor = "white";
    document.getElementById("Agua").style.borderColor = "#32B72F";
    document.getElementById("Refresco").style.borderColor = "white";
    bebida = "Agua";
 }

 function selecionarRefresco(){

    document.getElementById("Coca").style.borderColor = "white";
    document.getElementById("Agua").style.borderColor = "white";
    document.getElementById("Refresco").style.borderColor = "#32B72F";
    bebida = "Refresco";
 }

 function selecionarPudim(){

    document.getElementById("Pudim").style.borderColor = "#32B72F";
    document.getElementById("Brigadeiro").style.borderColor = "white";
    document.getElementById("Maca").style.borderColor = "white";
    sobremesa = "Pudim";
 }

 function selecionarBrigadeiro(){

    document.getElementById("Pudim").style.borderColor = "white";
    document.getElementById("Brigadeiro").style.borderColor = "#32B72F";
    document.getElementById("Maca").style.borderColor = "white";
    sobremesa = "Brigadeiro";
 }

 function selecionarMaca(){

    document.getElementById("Pudim").style.borderColor = "white";
    document.getElementById("Brigadeiro").style.borderColor = "white";
    document.getElementById("Maca").style.borderColor = "#32B72F";
    sobremesa = "Maca";
 }
