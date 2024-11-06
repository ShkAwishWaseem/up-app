import React from 'react';

const CourseCategories = () => {
  return (
    <section className="bg-[#256A41] py-12 mt-[100px]">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold mb-8 text-center">Explore Inspiring Online Courses</h2>
        <div className="flex justify-center items-center flex-wrap gap-2">
          <CourseCategory title="Featured" color="green" />
          <CourseCategory title="Music" />
          <CourseCategory title="Drawing & Painting" />
          <CourseCategory title="Marketing" />
          <CourseCategory title="Animation" />
          <CourseCategory title="Social Media" />
          <CourseCategory title="UI/UX Design" />
          <CourseCategory title="Creative Writing" />
          <CourseCategory title="Digital Illustration" />
          <CourseCategory title="Film & Video" />
          <CourseCategory title="Crafts" />
          <CourseCategory title="Freelance & Entrepreneurship" />
          <CourseCategory title="Graphic Design" />
          <CourseCategory title="Photography" />
          <CourseCategory title="Productivity" />
          <CourseCategory title="Productivity" />
        </div>
      </div>
    </section>
  );
};

const CourseCategory = ({ title, color = "gray" }) => {
  return (
    <div className={`bg-white rounded-3xl p-3 flex items-center justify-center border border-${color}-500 shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1 hover:bg-[#C89D1D]  hover:border-transparent cursor-pointer hover:text-[#eaebed]`}>
      <p className="text-[16px] font-semibold ">{title}</p>
    </div>
  );
};

export default CourseCategories;
