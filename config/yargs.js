const descripcion = {
  demand: true,
    alias: 'd',
      desc: 'Descripcion de la tarea por hacer'
}

const completado = {
  demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca la tarea como completado'
}

const optCrear = {
  descripcion
}

const optActualizar = {
  descripcion,
  completado
}

const optBorrar = {
  descripcion
}

const argv = require('yargs')
  .command('crear', 'Crea un elemento por hacer', optCrear)
  .command('actualizar', 'Actualiza el estado completado de una tarea', optActualizar)
  .command('borrar', 'Borra una tarea', optBorrar)
  .help()
  .argv

module.exports = {
  argv
}