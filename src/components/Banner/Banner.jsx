import React from "react";
import bannerImg from "../../assets/book.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Banner Image */}
      <img
        src={bannerImg}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-4">Box Office News!</h1>

        <p className="max-w-xl mb-6 text-gray-200">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>

        <button className="btn bg-[#26CCC2] text-white">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
