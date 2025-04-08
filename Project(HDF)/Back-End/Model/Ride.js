const mongoose=require('mongoose');
const RideSchema = new  mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    dateTime: { type: Date, required: true },
}, { timestamps: true });
const Ride=mongoose.model('Ride',RideSchema);
module.exports =Ride;