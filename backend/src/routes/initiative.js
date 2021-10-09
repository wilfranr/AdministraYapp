import express from 'express'; 
const router = express.Router(); 
// importar el modelo initiative 
import initiative from '../models/initiative'; 

// Agregar una initiative 
router.post('/nuevo-initiative', async(req, res) => { 
    const body = req.body; 
    try { 
        const initiativeDB = await initiative.create(body); 
        res.status(200).json(initiativeDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
}); 


// Get con parámetros 
router.get('/initiative/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const initiativeDB = await initiative.findOne({_id}); res.json(initiativeDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        })
    } 
});


// Get con todos los documentos 
router.get('/initiative', async(req, res) => { 
    try { 
        const initiativeDB = await initiative.find(); 
        res.json(initiativeDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Delete eliminar una initiative 
router.delete('/initiative/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const initiativeDB = await initiative.findByIdAndDelete({_id}); 
        if(!initiativeDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(initiativeDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Put actualizar una initiative 
router.put('/initiative/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const initiativeDB = await initiative.findByIdAndUpdate(_id,body, {new: true}); 
        res.json(initiativeDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Exportamos la configuración de express app
module.exports = router;
