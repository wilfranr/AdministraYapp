import express from 'express'; 
const router = express.Router(); 
// importar el modelo classified 
import classified from '../models/classified'; 
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

// Agregar una classified 
router.post('/nuevo-classified', upload, async(req, res) => { 
    const body = req.body;
    const imagename = req.file.filename
    body.image = imagename 
    try { 
        const classifiedDB = await classified.create(body); 
        res.status(200).json(classifiedDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
}); 


// Get con parámetros 
router.get('/classified/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const classifiedDB = await classified.findOne({_id}); res.json(classifiedDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        })
    } 
});


// Get con todos los documentos 
router.get('/classified', async(req, res) => { 
    try { 
        const classifiedDB = await classified.find(); 
        res.json(classifiedDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Delete eliminar una classified 
router.delete('/classified/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const classifiedDB = await classified.findByIdAndDelete({_id}); 
        if(!classifiedDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        }
        console.log(classifiedDB.image)
        if(classifiedDB.image != ''){
            try {
                fs.unlinkSync('./uploads/'+classifiedDB.image)
            } catch (error) {
                console.log(error)
            }
        }
        res.json(classifiedDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Put actualizar una classified 
router.put('/classified/:id', upload, async(req, res) => { 
    const _id = req.params.id;
    let new_image = ''
    //console.log(req.file)
    console.log(req.body.old_image)
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
        const classifiedDB = await classified.findByIdAndUpdate(_id,body, {new: true}); 
        res.json(classifiedDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Exportamos la configuración de express app
module.exports = router;
