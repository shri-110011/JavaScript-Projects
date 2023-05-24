const mongoose = require('mongoose');
require("../connect_db/mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        validate(value) {
            if(!value.match(/^[a-zA-Z0-9 .]{3,}$/)) {
                throw new Error(
                    "Course name can contain only alphabets, number, spaces, and dots. The length of the course should be greater than 3 letters."
                );
            }
        }
    },
    courseDept: {
        type: String,
        required: true,
        validate(value) {
            const courseDepts = ["WD", "AI", "DS", "CS", "CC", "UI", "GD"];
            if(courseDepts.indexOf(value) === -1) {
                throw new Error("Please enter a valid department name");
            }
        }
    },
    description: {
        type: String,
        required: true,
        validate(value) {
            const courseDepts = value.split(" ");
            if(courseDepts.length >= 3) {

            }
        }
    },
    duration: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    isApplied: {
        type: Boolean,
        required: false,
    },
    isRated: {
        type: Boolean,
        required: false,
    },
    noOfRatings: {
        type: Number,
        required: 0,
    },
    rating: {
        type: Number,
        required: 0.0,
    }
});

// setting up a foreign key
courseSchema.virtual("courseId", {
    ref: "AppliedCourses",
    localField: "id",
    foreignField: "courseID"
})

/* The first argument is the singular name of the collection your model is for. Mongoose 
automatically looks for the plural, lowercased version of your model name. 
 */
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;