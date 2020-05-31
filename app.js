const argv = require('./config/yargs').argv;
const colors = require('colors');
const { creatArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Call listarTabla');
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        creatArchivo( argv.base, argv.limite )
            .then( archivo => console.log('Archivo creado: ' + `${ archivo }`.green) )
            .catch( err => console.log(err) );
    break;

    default:
        console.log('comando no reconocido');
    break;
}

