const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator: function(val) {
                return val > 18;
            },
            message: "Age has to be greater than 18"
        }
    }
});

/* The first argument is the singular name of the collection your model is for. Mongoose 
automatically looks for the plural, lowercased version of your model name. 
 */
const User = mongoose.model("user", userSchema);
module.exports = User;