import React from "react";
import "../styles/Skills.css";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    {
      name: "Next.js",
      image: require("../assets/Next.png"),
    },
    {
      name: "React.js",
      image: require("../assets/React.png"),
    },
    {
      name: "Node.js",
      image: require("../assets/Node.png"),
    },
    {
      name: "Express.js",
      image: require("../assets/Express.png"),
    },
    {
      name: "MongoDB",
      image: require("../assets/Mongodb.png"),
    },
    {
      name: "HTML",
      image: require("../assets/Html.png"),
    },
    {
      name: "CSS",
      image: require("../assets/Css.png"),
    },
    {
      name: "JavaScript",
      image: require("../assets/Javascript.png"),
    },

    {
      name: "Python",
      image: require("../assets/Python.png"),
    },
    {
      name: "Java",
      image: require("../assets/Java.png"),
    },
    {
      name: "C",
      image: require("../assets/C.png"),
    },
    {
      name: "C++",
      image: require("../assets/C++.png"),
    },
    {
      name: "Firebase",
      image: require("../assets/Firebase.png"),
    },
    {
      name: "Linux",
      image: require("../assets/Linux.png"),
    },
    {
      name: "Git",
      image: require("../assets/Github.png"),
    },
    {
      name: "Postman",
      image: require("../assets/Postman.png"),
    },
    {
      name: "Tailwind",
      image: require("../assets/Tailwind.png"),
    },
  ];
  return (
    <div className="section3 absolute flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">
      <h3 className="absolute top-[2rem] uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Skill skill={skill} image={skill.image} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
