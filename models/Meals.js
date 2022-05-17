import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
    title: {
        type:  String, 
        required: true,
        maxlength: 60
    }, 
    desc: {
        type:  String, 
        maxlength: 60
    }, 
    img: {
        type: String, 
        required: false,
    },
    price: {
        type: Number, 
        required: true
    },
    }, 
    {timestamps: true}
);

export default mongoose.models.Meals || mongoose.model("Meals", MealSchema);