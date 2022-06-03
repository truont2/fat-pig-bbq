import mongoose from "mongoose";

const HomepageSchema = new mongoose.Schema({
    title: {
        type:  String, 
        required: true,
        maxlength: 60
    },
    desc: {
        type:  String, 
        required: true,
        maxlength: 60
    },
    font: {
        type:  String, 
        maxlength: 60
    }, 
    jumboIMG: {
        type: String, 
        required: true,
    },
    menuIMG: {
        type: String, 
        required: true,
    },
    menuCardTitle: {
        type: String, 
        required: true,
    },
    menuCardDesc: {
        type: String, 
        required: true,
    },
    orderDesc: {
        type: [{
            name: { type: String, required: true },
            text: { type: String, required: true }
            }], 
        required: true
    },
    hours: {
        type: [{
                day: { type: String, required: true },
                start: { type: String, required: true }, 
                end: { type: String, required: true }
                }], 
        required: true
    },
    alert: {
        type: {
            text: {type: String, required: true}, 
            status: {type: Boolean, required: true}
        }, 
        required: true
    },

    }, 
    {timestamps: true}
);

export default mongoose.models.Homepage || mongoose.model("Homepage", HomepageSchema);