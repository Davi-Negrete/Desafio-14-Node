import express from 'express' // importacion del framework express.js para usar con mi servidor Node
import usuariosRouter from './routers/usuarios.router.js'
const app = express();
const PORT = 8000;

// Configuración de la aplicación // ? MIDDLEWARE 

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(express.static('public'))

// * Ruteo con el Router

app.use('/api/usuarios', usuariosRouter)

// ! Mensaje Error cuando no se encuentre el recurso.

app.all('*', (req, res) => {
  const {path, method} = req
  console.log(path)
  console.log(method)
  const Error =  {
    ok: false,
    status: 404,
    mensaje: `Lo sentimos, algo ha salido mal al acceder a la ruta: ${path}`
  }
  res.status(404).json(Error)
  console.log(Error.mensaje)
})


// ? Iniciar servidor

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})