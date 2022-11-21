const mongoose = require('mongoose');

const reSchema = mongoose.Schema({

    username: { type: String, require: true },
    email: { type: String, require: true },
    birthday: { type: String},
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true } 

});

const Reg = mongoose.model("register", reSchema);

module.exports = Reg;