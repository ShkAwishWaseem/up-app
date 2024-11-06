import mongoose from "mongoose"

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const courseSchema = new Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
      
    },
    image: {
      type: String,
      required: true,
    },
  },
  
  { timestamps: true }
);



const Course = mongoose.models.courses || mongoose.model('courses', courseSchema);
export default Course;
