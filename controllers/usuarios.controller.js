import {usuarios} from '../src/constants/usuarios.js'
import modelos from '../models/usuarios.model.js'

const getAll = (req, res) => {
    const usuarios = modelos.leerUsuarios()
    res.status(200).json(usuarios)
}

const getOne = (req, res) => {
    const id = req.params.id
    const usuario = modelos.leerUsuario(id)
    res.status(200).json(usuario)
}

const createUsuario = (req, res) => {
    const usuario = req.body
    const usuarioCreado = modelos.crearUsuario(usuario)
    res.status(201).json(usuarios)
}

const updateUsuario = (req, res) => {
    const id = req.params.id
    const usuarioEditado = req.body
    const usuarioActualizado = modelos.actualizarUsuario(id, usuarioEditado)
    res.status(200).json(usuarioActualizado) 
}


const deleteUsuario = (req, res) => {
    const id = req.params.id
    try {
        const usuarioEliminado = modelos.eliminarUsuario(id)
        res.status(200).json(usuarioEliminado)
    } catch (errorDelete) {
        res.status(404).json(errorDelete) // ? me dice el obj errorDelete:  que tiene el status 404, el ok faLSE, Y el mensaje de ID No encontrado.
    }
}

export default {
    getAll,
    getOne,
    createUsuario,
    updateUsuario,
    deleteUsuario
}