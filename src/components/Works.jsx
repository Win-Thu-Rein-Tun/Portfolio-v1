import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  tags,
  repoLink,
  demoLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[80px] lg:h-[500px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <div className="absolute items-center bottom-0 lg:h-[200px] h-[0] p-[25px] flex w-full flex-col bg-[rgba(0,0,0,0.5)] lg:rounded-b-[24px] lg:rounded-[0px] rounded-[24px]">
          <h3 className="font-semibold sm:text-[25px] text-[18px] text-white absolute z-0 lg:bottom-10 bottom-3.5 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="flex flex-row items-center justify-between">
            <div
              onClick={() => window.open(repoLink, "_blank")}
              className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism hover:bg-slate-500 mb-[10px]`}
            >
              <img
                src={github}
                alt="Github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <button
              onClick={() => window.open(demoLink, "_blank")}
              className="glassmorphism hover:bg-slate-500 text-white font-bold py-2 mb- px-4 rounded-full"
            >
              View
            </button>
          </div>

          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="font-normal text-[16px] text-white uppercase"
              >
                #{tag.name}
              </p>
            ))}
          </div>
          <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

const Works = () => {
  const [active, setActive] = useState("project-3");

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText} own-text-gradient`}>
            Projects
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. Interested in
            working together? We should queue up a time to chat. I'll buy the
            coffee.
          </motion.p>
        </div>

        <div className="mt-[50px] flex lg:flex-row flex-col lg:min-h-[50vh] min-h-[70vh] gap-5 glassmorphism2 rounded-2xl py-4 px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");
