import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

//Estado de cuenta
const accountstatusShema = new Schema({ 
    email: {type: String, required: [true, 'Email obligatorio']}, 
    descripcion: String,
    valor: Number,
    date:{
        type: Date, default: Date.now
    }, 
    activo: {
        type: Boolean, default: true
    } 
});

// Convertir a modelo 
const accountstatus = mongoose.model('accountstatus', accountstatusShema); 

export default accountstatus;