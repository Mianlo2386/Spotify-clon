import express from "express";
const app=express();
import morgan from "morgan";
import config from "./config/index.js";
import './mongodb.js'
import artistasRoutes from './routes/artistas.routes.js'

//middleware
app.use(morgan('dev'))
app.use(express.json())

//rutas
//ruta principal
app.get('/',(req,res)=> {
    res.send('Hola mundo fffcruel')
})

app.use('/artistas',artistasRoutes)

app.all('/*',(req,res)=>{
    res.status(404).send('la pagina no funciona')
})

/* app.listen(3030,()=> {
    console.log('servidor ejecutandose')
})
 */
app.listen(config.PORT,()=> {
    console.log(`servidor ejecutandose en el puerto  ${config.PORT}`)
})