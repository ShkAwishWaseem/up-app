import mongoose from "mongoose"

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const FreeTrialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    studentGender: {
      type: String,
      required: true,
    },
    studentAge: {
      type: Number,
      required: true,
    },
    preferredDays: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
  },
  
  { timestamps: true }
);


// export default const courses = mongoose.model('courses' , courseSchema);


const Trial = mongoose.models.freeTrial || mongoose.model('freeTrial', FreeTrialSchema);
export default Trial;
