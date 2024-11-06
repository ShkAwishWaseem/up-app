import mongoose from "mongoose"

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const ContactSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    subject: {
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


const Contact = mongoose.models.contact || mongoose.model('contact', ContactSchema);
export default Contact;
