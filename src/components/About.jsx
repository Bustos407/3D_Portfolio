import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover-glow"
    >
      <div
        className="glass-card rounded-[20px] py-5 px-6 xs:px-10 sm:px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
      >
        Systems Engineer with experience in full-stack and backend development,
        focused on building robust, scalable, and maintainable software solutions.
        I've worked on real projects with microservices architectures, RESTful APIs,
        and agile methodologies, always applying best practices like SOLID and design
        patterns. I'm driven by solving real problems for users and organizations
        through technology, with a constant focus on quality, innovation, and
        continuous improvement.
      </motion.p>

      <div className="mt-12 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
