import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.8)}
        className="mt-12"
      >
        <div
          onClick={() => window.open("https://github.com/Bustos407?tab=repositories", "_blank")}
          className="relative cursor-pointer group p-[1px] green-pink-gradient rounded-2xl"
        >
          <div className="glass-card rounded-2xl p-5 xs:p-8 sm:p-10 md:p-14 flex flex-col items-center text-center gap-4 sm:gap-6 overflow-hidden">

            {/* Decorative blobs */}
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

            {/* GitHub icon */}
            <div className="relative z-10 w-14 h-14 sm:w-20 sm:h-20 black-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img src={github} alt="GitHub" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
            </div>

            {/* Text */}
            <div className="relative z-10 flex flex-col gap-3">
              <h3 className="text-white font-black text-[22px] xs:text-[28px] sm:text-[42px] leading-tight">
                See all my projects
              </h3>
              <p className="text-secondary text-[15px] sm:text-[17px] max-w-xl leading-relaxed">
                All my work is available on GitHub — from fullstack apps and
                REST APIs to mobile projects and personal experiments.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-1 sm:mt-2 flex items-center gap-2 px-5 xs:px-8 py-2 xs:py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-[13px] xs:text-[15px] group-hover:opacity-90 transition-opacity duration-200">
              <span>github.com/Bustos407</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "works");
