import express from 'express'; 
const router = express.Router(); 
// importar el modelo accountstatus 
import accountstatus from '../models/accountstatus'; 

// Agregar una accountstatus 
router.post('/nuevo-accountstatus', async(req, res) => { 
    const body = req.body; 
    try { 
        const accountstatusDB = await accountstatus.create(body); 
        res.status(200).json(accountstatusDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
}); 


// Get con parámetros 
router.get('/accountstatus/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const accountstatusDB = await accountstatus.findOne({_id}); res.json(accountstatusDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        })
    } 
});


// Get con todos los documentos 
router.get('/accountstatus', async(req, res) => { 
    try { 
        const accountstatusDB = await accountstatus.find(); 
        res.json(accountstatusDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Delete eliminar una accountstatus 
router.delete('/accountstatus/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const accountstatusDB = await accountstatus.findByIdAndDelete({_id}); 
        if(!accountstatusDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(accountstatusDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Put actualizar una accountstatus 
router.put('/accountstatus/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const accountstatusDB = await accountstatus.findByIdAndUpdate(_id,body, {new: true}); 
        res.json(accountstatusDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Exportamos la configuración de express app
module.exports = router;
