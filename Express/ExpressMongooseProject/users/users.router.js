const express = require('express');
const router = express.Router();
const User = require("../mongoose/models/user.schema");

router.get("/", (req, res)=> {
    User.find({}, (err, data)=> {
        if(err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(data);
        }
        
    });
})

router.get("/:_id", (req, res)=> {
    console.log(req.params);

    User.findById(req.params._id)
    .then(data=> {
        console.log(data);
        // checking if data is null
        if(data)
            res.send(data);
        else
            res.status(404).send();
    })
    .catch(err=> {
        res.status(400);
        res.send({"message": "Invalid id!", "id": req.params._id});
    })
})

router.post("/", (req, res)=> {

    console.log(req.body);
    const user = new User({name: req.body.name, age: req.body.age});

    /* __v field that is only generated when a document(s) is inserted through mongoose.

    The __v field is called the version key. It describes the internal revision of a 
    document. This __v field is used to track the revisions of a document. By default, its 
    value is zero.
     */
    user.save().then((savedDoc)=> {
        console.log(savedDoc);
        res.send(savedDoc);
    })
    .catch(err=> {
        if(err.errors["name"]) {
            console.log(err.errors["name"]);
            res.status(400);
            res.send({"message": err.errors["age"]});
        }
        else if(err.errors["age"]) {
            console.log(err.errors["age"]);
            res.status(400);
            res.send({"message": err.errors["age"]});
        }
    })
})

router.put("/", (req, res)=> {
    console.log(req.body);
    
    User.findOneAndUpdate({_id: req.body._id}, 
        {$set: {name: req.body.name, age: req.body.age}}, 
        { runValidators: true })
    .then(data=> {
        console.log(data);

         // checking if data is null
        if(data)
            res.send(data);
        else
            res.status(400).send();
    })
    .catch(err=> {
        if(err.errors && err.errors["age"]) {
            console.log(err.errors["age"]);
            res.status(400);
            res.send(err.errors["age"].message);
        }
        else {
            console.log(err);
            res.status(400).send();
        }
    })
})

router.delete("/:_id", (req, res)=> {
    User.deleteOne({_id: req.params._id}, (err, data)=> {
        if(err) {
            res.status(400);
            res.send({"message": "Invalid id!", "_id": req.body._id});
        }
        else {
            console.log(data);
            if(data.deletedCount > 0)
                res.send(data);
            else
                res.status(400).send();
        }
    })
})

module.exports = router;






