import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { scaleIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = SectionWrapper(function Tech() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I know</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      <div className="mt-8 sm:mt-10 flex flex-row flex-wrap justify-center gap-3 xs:gap-5 sm:gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={scaleIn(0.05 * index, 0.4)}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(139,92,246,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 p-2 sm:p-3 glass-card rounded-xl flex justify-center items-center cursor-pointer"
            >
              <img
                className="w-full h-full object-contain"
                src={tech.icon}
                alt={tech.name}
              />
            </motion.div>
            <p className="text-secondary text-center text-[13px] font-medium">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}, "technologies");

export default Tech;
