import React from "react";
import lmsImg from '../../assets/img/lms1.png';
import Carousel from "../Main/Carousel";

const Home = () => {
  return (
    <>
      <div className="mt-5 mx-4 md:mx-16 lg:mx-16">
        <div className="md:my-8">
          <div className="text-2xl my-3 font-semibold flex justify-between">
            <div>
              Latest Courses
            </div>
            <div className="text-blue-700 underline cursor-pointer">
              See All
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="w-full md:w-1/3 lg:w-[23%]">

              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-[23%] xl:w-[25%]">

              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-[23%]">

              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-[23%]">

              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl my-3 font-semibold flex justify-between">
            <div>
              Popular Courses
            </div>
            <div className="text-blue-700 underline  cursor-pointer">
              See All
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <div className="w-full md:w-1/3 lg:w-[23%]">
              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-[23%]">

              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-[23%]">

              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 lg:w-[23%]">

              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg w-[200px] h-[200px] mx-auto my-3 object-contain" src={lmsImg} alt="learning_Img" />
                <div className="p-5">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Course Title
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mx-4 md:mx-16 lg:mx-16">
        <Carousel />
      </div>
    </>
  );
};

export default Home;
