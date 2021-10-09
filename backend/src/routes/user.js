import express from 'express'; 
const router = express.Router(); 
// importar el modelo user 
import user from '../models/user'; 

// Agregar una user 
router.post('/nuevo-user', async(req, res) => { 
    const body = req.body; 
    try { 
        const userDB = await user.create(body); 
        res.status(200).json(userDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
}); 


// Get con parámetros 
router.get('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const userDB = await user.findOne({_id}); res.json(userDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        })
    } 
});


// Get con todos los documentos 
router.get('/user', async(req, res) => { 
    try { 
        const userDB = await user.find(); 
        res.json(userDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Delete eliminar una user 
router.delete('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const userDB = await user.findByIdAndDelete({_id}); 
        if(!userDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(userDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Put actualizar una user 
router.put('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const userDB = await user.findByIdAndUpdate(_id,body, {new: true}); 
        res.json(userDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error 
        }) 
    } 
});


// Exportamos la configuración de express app
module.exports = router;
