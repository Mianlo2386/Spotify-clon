import express from "express";
//import artistas from "../models/artistas.js";
import Artista from "../models/artistas.js"

const router=express.Router()

// apunta a artistas
router.post('/', async(req,res)=>{
    try {
 
    const artista= new Artista(req.body)
    await artista.save()
    res.status(201).json({mensaje:'artista creado'})

    }
    catch(error){
        
        console.log(error.mensaje)
        res.status(500).json({mensaje:'error interno del sistema'})

    }
    //prueba
    router.get('/',(req,res)=> {
        res.send('hola desde el router de artistas')
    })
    //todos
    router.get('/obtener-artistas', async(req,res)=>{
        try{
            const artista=await Artista.find();
            if(artista===null) {
                throw new Error('artista no encontrado')
            }
            res.status(200).json(artista)
        }catch(error) {
            console.log(error.mensaje)
            res.status(500).json({mensaje:'error interno del sistema'})
        }
    })
})


router.get('/mostrar-artista/:id', async(req,res)=> {
    try{

        const artista= await Artista.findById(req.params.id)
        res.status(200).json(artista)
    }catch(error) {
        console.log(error.mensaje)
        res.status(500).json({mensaje: 'error interno del sistema'})
    }

})
router.delete('/borrar-artista/:id', async(req,res)=> {
    try {
        const artista= await Artista.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:'artista eliminado'})
    }catch(error){
        console.log(error.mensaje)
        res.status(404).json({mensaje: 'error interno del sistema'})
    }
})
router.put('/modifica-artista/:id', async(req,res)=>{
    try {
        const artista= await Artista.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje:'artista actualizado'})
    }
    catch{
        console.log(error.mensaje) 
        res.status(404).json({mensaje:'error interno del sistema'})
    }
})

export default router
