import {usuarios} from '../src/constants/usuarios.js'
 
// ? Variable Importante:

let idUsuario = usuarios.length

const leerUsuarios = () => {
    return usuarios
}

const leerUsuario = (id) => {
    const usuario = usuarios.find(usuario => usuario.id == id) || {}
    return usuario
}

const crearUsuario = (usuario) => {
    usuario.id = ++idUsuario
    usuarios.push(usuario)
    return usuario
}

const actualizarUsuario = (id, usuarioEditado) => {
    usuarioEditado.id = id
    let index = usuarios.findIndex(usuario => usuario.id == id)
    usuarios.splice(index, 1, usuarioEditado)
    return usuarioEditado
}


const eliminarUsuario = (id) => {
    let index = usuarios.findIndex(usuario => usuario.id == id)
    if (index >= 0) {
        const array = usuarios.splice(index, 1)
        const usuarioEliminado = array[0]
        return usuarioEliminado
    } else {
        const errorDelete =  {
            ok: false,
            status: 404,
            mensaje: `Lo sentimos, no se pudo hacer la petición, porque no se encuentra el usuario con el id ${id}`
        }
        return errorDelete
    }
}

export default {
    leerUsuarios,
    leerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}