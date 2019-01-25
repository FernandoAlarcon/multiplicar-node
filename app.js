
const argv = require('./config/yargs').argv;
const colors  = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];
		
	switch (comando) {

		case 'listar':
			listarTabla(argv.base, argv.limite);
			  break;

		case 'crear':
			crearArchivo(argv.base, argv.limite)
			    .then(archivo => console.log(`Archivo creado : ${ archivo.green } `))
			    .catch(e => console.log(e));	
			  break;

		default:
			console.log('Comando no reconocido');	    

	}




//console.log( 'Limite', argv.limite);
// console.log(argv2);

// let paramt = argv[2];
// let base   = paramt.split('=')[1];


 
//        crearArchivo(base)
				// .then( erick => console.log(`Archivo creado : ${erick} `) )
				// .catch( e => console.log(e));

