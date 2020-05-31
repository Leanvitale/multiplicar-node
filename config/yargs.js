const optBasic = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imrpime en consola la tabla de multiplicar', optBasic)
    .command('crear', 'Crea la tabla de miltiplicar que necesites!', optBasic)
    .help()
    .argv;

module.exports = {
    argv
}