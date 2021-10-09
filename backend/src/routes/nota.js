import express from 'express'; 
const router = express.Router(); 
// importar el modelo nota 
import Nota from '../models/nota'; 
const multer = require('multer')
const fs = require('fs')

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"_"+Date.now()+''+file.originalname)
    },
})

let upload = multer({
    storage: storage,    
}).single("image")

// Agregar una nota 
router.post('/nueva-nota', upload, async(req, res) => {     
    const body = req.body;
    const imagename = req.file.filename
    body.image = imagename     
    try {
        const notaDB = await Nota.create(body); 
        res.status(200).json(notaDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
}); 


// Get con parámetros 
router.get('/nota/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const notaDB = await Nota.findOne({_id}); res.json(notaDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        })
    } 
});


// Get con todos los documentos 
router.get('/nota', async(req, res) => { 
    try { 
        const notaDB = await Nota.find(); 
        res.json(notaDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Delete eliminar una nota 
router.delete('/nota/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const notaDB = await Nota.findOneAndDelete ({_id}); 
        if(!notaDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        if(notaDB.image != ''){
            try {
                fs.unlinkSync('./uploads/'+notaDB.image)
            } catch (error) {
                console.log(error)
            }
        }
        res.json(notaDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Put actualizar una nota 
router.put('/nota/:id', upload, async(req, res) => { 
    const _id = req.params.id;
    let new_image = ''
    if(req.file){
        new_image = req.file.filename
        try {
            fs.unlinkSync('./uploads/'+ req.body.old_image)
        } catch (error) {
            console.log(error)
        }
    }else{
        new_image = req.body.old_image
    }
    const body = req.body; 
    body.image = new_image
    try { 
        const notaDB = await Nota.findByIdAndUpdate(_id,body, {new: true}); 
        res.json(notaDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});

// Exportamos la configuración de express app
module.exports = router;
