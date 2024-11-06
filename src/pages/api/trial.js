import dbConnection from "../../config";
import Trial from "../../models/trial";

dbConnection();

const handler = async (req,res) => {
     const {name,email,phone,courseTitle,studentGender,studentAge,preferredDays,message} = req.body
     try {
                      const trialUsers = await Trial.create({
                         name,
                         email,
                         phone,
                         courseTitle,
                         studentGender,
                         studentAge,
                         preferredDays,
                         message
                      });
                      console.log(trialUsers)
                      return res.status(200).json(trialUsers)
                 } catch (error) {
                 console.log(error)
                 
            }
   }
   export default handler