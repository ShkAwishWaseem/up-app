// import React, { useState } from 'react';

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index) => {
//     if (index === activeIndex) {
//       setActiveIndex(null);
//     } else {
//       setActiveIndex(index);
//     }
//   };

//   const getIcon = (isActive) => {
//     return isActive ? 'fas fa-minus' : 'fas fa-plus';
//   };

//   return (
//     <div className="w-[100%] m-auto accordion border border-gray-200 rounded-md">
//       {items.map((item, index) => (
//         <div key={index} className="accordion-item mb-2">
//           <h2 className="accordion-header px-4 py-2 cursor-pointer focus:bg-gray-100 transition duration-300 ease-in-out">
//             <button
//               className="accordion-button focus:outline-none w-full text-left flex items-center justify-between transition duration-300 ease-in-out"
//               onClick={() => handleClick(index)}
//             >
//               <span className='text-lg font-bold text-[#C89D1D]'>{item.title}</span>
//               <i className={getIcon(activeIndex === index)} />
//             </button>
//           </h2>
//           <div
//             className={`accordion-content px-4 py-4 bg-[#eaebed] transition duration-300 ease-in-out max-h-0 overflow-hidden ${activeIndex === index ? 'max-h-screen overflow-auto' : 'hidden'} text-[#515352]`}
//           >
//             {item.content}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;


import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Collapse } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const CustomAccordion = ({ items }) => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <motion.div
    initial={{opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{ type: "spring", stiffness: 100 , delay:0.5}}
    >
      {items.map((item, index) => (
        <div key={index} className="shadow-md rounded-md mb-4">
          <Accordion
            expanded={index === expanded}
            onChange={() => handleExpand(index)}
            className="border-none"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-content-${index}`}
              id={`panel-header-${index}`}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </motion.div>
  );
}

export default CustomAccordion;
