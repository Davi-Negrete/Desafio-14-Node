import controlador from '../controllers/usuarios.controller.js'

import express from 'express'
const usuariosRouter = express.Router()

usuariosRouter.get('/', controlador.getAll)

usuariosRouter.get('/:id', controlador.getOne)

usuariosRouter.post('/', controlador.createUsuario)

usuariosRouter.put('/:id', controlador.updateUsuario)

usuariosRouter.delete('/:id', controlador.deleteUsuario)


export default usuariosRouter