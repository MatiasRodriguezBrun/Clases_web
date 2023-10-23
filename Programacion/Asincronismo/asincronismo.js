console.log('iniciando');
obtenerDatoAsincronico();
console.log('finalizando');

function obtenerDatoAsincronico(){
	setTimeout(()=>console.log('Dato: Jorge'), 1000);
}