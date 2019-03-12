let mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/trainingmodel');

let Schema = mongoose.Schema;

let studentSchema = new Schema(
    { 
        Name: {type: String, required: true}, 
        Password: String
        //SchoolName: {type: String, required: true} //MandatoryField
    });

let StudentSchema = mongoose.model('student', studentSchema);
module.exports = StudentSchema;