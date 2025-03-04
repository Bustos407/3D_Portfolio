import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = SectionWrapper(function Tech() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I know?</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("right", "spring", 0.375 * index, 0.75)}
          >
            <div
              className="w-28 h-28 p-1 bg-white rounded-xl flex justify-center items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.img
                className={`cursor-pointer w-full h-full object-contain transition-all ${
                  hoveredIndex === index ? "animate-tremble" : ""
                }`}
                src={tech.icon}
                alt={tech.name}
              />
            </div>

            <p className="text-black text-center text-[14px] font-semibold mt-2">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}, "technologies");

export default Tech;
