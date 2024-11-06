import React from 'react';
import NoSSR from 'react-no-ssr';

const Spinner = () => {
  return (

    <NoSSR>
    <div class="flex justify-center items-center h-screen">
    <div class="rounded-full h-20 w-20 bg-[#256A41] animate-ping"></div>
  </div>
  </NoSSR>
  );
};

export default Spinner;
