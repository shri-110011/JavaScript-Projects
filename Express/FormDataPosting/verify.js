const Joi = require('joi');
const fss =require('fs');

// const schema = Joi.array().min(3).has({
//     Name: Joi.string().required(),
//     Type: Joi.string().required(),
//     Price: Joi.number().required(),
// });

const schema = Joi.object().keys({
  "Foods": Joi.array().items(Joi.object().keys({
  	Name: Joi.string().required(),
  	Type: Joi.string().required(),
    Price: Joi.number().required()
    }))
});

var data;

try{
 data = require("./data.json");
}catch(e)
{
 data={};
}

// data = JSON.parse(data);
console.log(JSON.parse(data));

var check = Joi.attempt(data, schema);

console.log(check);

console.log("Valid Data");

// You can also pass a callback which will be called synchronously with the validation result.
// Joi.validate(data, schema, function (err, value) {
// if(err==null)
// { console.log("JSON is valid.");

// }else{
//     console.log("JSON schema is not correct. Enter specified JSON scehma.");
// }

// });

