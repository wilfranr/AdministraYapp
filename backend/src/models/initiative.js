import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

//Emprendimientos
const initiativeSchema = new Schema({ 
    email: {type: String, required: [true, 'Email obligatorio']}, 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    descripcion: String, 
    contacto: String, 
    url: String, 
    imagen: String,
    date:{
        type: Date, default: Date.now
    }, 
    activo: {
        type: Boolean, default: true
    } 
});

// Convertir a modelo 
const initiative = mongoose.model('initiative', initiativeSchema); 

export default initiative;