import Contact from "../../models/contact"
import dbConnection from "../../config"



// dbConnection("mongodb://localhost:27017/panelll")
dbConnection();

const handler = async (req,res) => {
     const {email, subject, message} = req.body;
     console.log(email, subject,message)
     try {
          let data = await Contact.create({
               email,
               subject,
               message
          })
          return res.status(200).json(data)
     } catch (error) {
          console.log(`New Error is happening ${error}`);
          return res.status(500).json({error});
     }
     
}

export default handler