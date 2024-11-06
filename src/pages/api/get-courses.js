// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
     import dbConnection from "../../config";
     import Course from "../../models/course";


     dbConnection();
// export  default async function handler(req,res ) {
//      try {
//                const courses = await Course.find({});
//                // console.log(courses)
//                return res.status(200).json(courses);

               
//           } catch (error) {
//           console.log(error)
          
//      }

// return new Response("Good")

// }
const handler = async (req,res) => {
  // res.status(200).json({ name: "Aawish waseem" });
  try { 
                   const courses = await Course.find({});
                   // console.log(courses)
                   if(courses) {
                        return res.status(200).json(courses);
                    }
                    else{
                         return res.status(500).json({error:"Alert"});
                    }
    
                   
              } catch (error) {
              console.log(error)
              
         }
}
export default handler
