const consertos = require ('./conserto');

const status = (consertos) => {
    console.log('aparelhos True:');
    for(item of consertos){
     if (item.pronto == true){
            console.log(item.aparelho)
        }
    }
    console.log(' aparelhos False:');
    if (item.pronto == false){
        console.log(item.aparelho)
    }
}

function ListaProntos(consertos) {
    consertos.forEach(item => {
        console.log (`Aparelho >>>> ${item.aparelho}`);
        item.itensconsertados.forEach(pronto => {
            console.log(` ** ${pronto}`);

        });
        console.log(`valor: R$ ${item.valores.reduce((valores,total) => {
            return valores + total},0)
        },00`)       
    })
}

status (consertos)
ListaProntos (consertos)