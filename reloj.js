let horas    = 0;
let minutos  = 0;
let segundos = 0;
let dias     = 0;

const LIMITES = [59,59,23];

function contador(){
    segundos++;
    if(segundos > LIMITES[0]){
        minutos++;
        segundos = 0;
    }
    if(minutos > LIMITES[1]){
        horas++;
        minutos = 0;
        segundos = 0;
    }
    if(horas > LIMITES[2]){
        horas = 0;
        dias++;
    }
    console.log(`${horas}:${minutos}:${segundos}`)
}

for(dias = 0; horas <= LIMITES[2] && dias < 2 ; dias){
    contador();
}