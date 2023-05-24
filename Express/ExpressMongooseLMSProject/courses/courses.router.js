const express = require('express');
const router = express.Router();
const Course = require("../mongoose/models/course.schema");

async function getCourses() {
    const courses = await Course.find({});
    return courses;
}

async function enrollForCourse(id) {
    const data = await Course.updateOne({_id: id}, {$set: {isApplied: true}})
    return data;
}

async function dropFromCourse(id) {
    const data = await Course.updateOne({_id: id}, {$set: {isApplied: false}})
    return data;
}

async function rateCourse(id, body) {
    const courseInfo = await Course.findOne({_id: id}, {isApplied:1, noOfRatings:1, rating: 1, isRated: 1, _id: 0});
    console.log(courseInfo);

    const {isApplied, noOfRatings:prevNoOfRatings, rating:prevRating, isRated} = courseInfo;
    console.log("isApplied: " + isApplied);
    console.log("prevNoOfRatings: " + prevNoOfRatings);
    console.log("prevRating: " + prevRating);
    console.log("givenRating: " + body["rating"]);
    console.log(typeof(body["rating"]));
    console.log("isRated: " + isRated);

    let data = {
        flag: null
    };

    if(!isApplied) {
        data.flag = 0;
        return data;
    }

    if(isRated) {
        data.flag = 1;
        return data;
    }

    const newRating = ((prevNoOfRatings*prevRating + +(body["rating"]))/(prevNoOfRatings+1)).toFixed(1);
    console.log("newRating: " + newRating);

    const fetchedData = await Course.updateOne({_id: id}, {$set: {isRated: true, noOfRatings: prevNoOfRatings+1, rating: newRating}});
    data.flag = 2;
    return data;
}

router.get("/get", (req, res)=> {
    console.log("Inside callback for 'courses/'");
    getCourses().then(courses => {
        console.log(courses);
        res.send(courses);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(400);
    });
})

router.post("/enroll/:id", (req, res)=> {
    console.log("Inside callback for 'courses/enroll:id'");
    const id = req.params.id;
    console.log(id);
    enrollForCourse(id).then(data => {
        console.log("Data after course enrollment:");
        console.log(data);

        if(data.modifiedCount == 1) {
            res.status(200).send({message: "You have successfully enrolled for the course"});
        }
        else if(data.matchedCount == 1) {
            res.status(403).send({message: "You have already applied for this course"})
        }
        else {
            res.sendStatus(400);
        }
    })
    .catch(err => {
        console.log("Error after course enrollment:");
        console.log(err);
        res.sendStatus(400);
    });
})

router.delete("/drop/:id", (req, res)=> {
    console.log("Inside callback for 'courses/drop:id'");
    const id = req.params.id;
    console.log(id);

    dropFromCourse(id).then(data => {
        console.log("Data after dropping from course:");
        console.log(data);

        if(data.modifiedCount == 1) {
            res.status(200).send({message: "You have dropped the course"});
        }
        else if(data.matchedCount == 1) {
            res.status(403).send({message: "You have not enrolled for this course"});
        }
        else {
            res.status(400).send();
        }
    })
    .catch(err => {
        console.log("Error after dropping from course:");
        console.log(err);
        res.sendStatus(400);
    });
})

router.patch("/rating/:id", (req, res)=> {
    console.log("Inside callback for 'courses/rating:id'");
    console.log(req.body);
    const id = req.params.id;
    console.log(id);

    rateCourse(id, req.body).then(data => {
        console.log("Data after rating course:");
        console.log(data);

        if(data.flag === 0) {
            res.status(403).send({message: "You have not enrolled for this course"});
        }
        else if(data.flag === 1) {
            res.status(403).send({message: "You have already rated this course"});
        }
        else if (data.flag === 2) {
            res.send({message: "You have rated this course"});
        }
        else {
            res.status(400).send();
        }
    })
    .catch(err => {
        console.log("Error after rating course");
        console.log(err);
        res.sendStatus(400);
    });
})

module.exports = router;