import Course from "../../../models/course";
import dbConnection from "../../../config";
import mongoose from "mongoose";


dbConnection();



   
const handler = async (req,res) => {
     const { id } = req.query
     console.log(id);


  try {
//     const course = await Course.findOne({ _id: mongoose.Types.ObjectId(slug) });
const course = await Course.findOne({ _id: new mongoose.Types.ObjectId(id) });


    if (course) {
      console.log(course);
      return res.status(200).json({ course });
    } else {
      // If no course is found, you might want to return an appropriate response
      return res.status(404).json({ error: "Course not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    // Handle any errors that occurred during the database query
    return res.status(500).json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export default handler