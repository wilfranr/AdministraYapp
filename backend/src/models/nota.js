import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const notaSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    descripcion: String, 
    usuarioId: String,
    image: String, 
    date:{
        type: Date, default: Date.now
    }, 
    activo: {
        type: Boolean, default: true
    } 
});

// Convertir a modelo 
const nota = mongoose.model('nota', notaSchema); 

export default nota;