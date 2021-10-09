import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const userSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    email: {type: String, required: [true, 'Email obligatorio']}, 
    pasword: String, 
    date:{
        type: Date, default: Date.now
    }, 
    activo: {
        type: Boolean, default: true
    } 
});

// Convertir a modelo 
const user = mongoose.model('user', userSchema); 

export default user;