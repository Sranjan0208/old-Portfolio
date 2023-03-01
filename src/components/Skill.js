import React from "react";

const Skill = ({ image }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        src={image}
        className="rounded-full border border-gray-500 object-cover w-17 h-17 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default Skill;
