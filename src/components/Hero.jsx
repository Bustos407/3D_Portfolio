import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center overflow-hidden">

      {/* Decorative gradient blobs */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full flex flex-row items-center gap-5 sm:gap-10`}>

        {/* Left accent line */}
        <div className="flex flex-col justify-center items-center self-start mt-5 shrink-0">
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-500 to-violet-600" />
          <div className="w-1 sm:h-40 h-24 violet-gradient" />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className="gradient-text">Santiago</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 max-w-2xl text-justify`}>
            Systems Engineer focused on full-stack and backend development —
            building robust, scalable software with microservices, RESTful APIs,
            and agile practices. Driven by clean code and continuous improvement.
          </p>
        </div>

        {/* Code window — visible only on large screens */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="glass-card rounded-xl p-5 w-full max-w-sm font-mono text-[13px] shadow-lg">
            {/* Window bar */}
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/40 text-xs">portfolio.ts</span>
            </div>
            {/* Code */}
            <div className="space-y-[5px] leading-relaxed">
              <p>
                <span className="text-violet-400">const </span>
                <span className="text-blue-300">developer</span>
                <span className="text-white/60"> = {"{"}</span>
              </p>
              <p className="pl-5">
                <span className="text-green-300">name</span>
                <span className="text-white/60">: </span>
                <span className="text-orange-300">"Santiago Bustos"</span>
                <span className="text-white/60">,</span>
              </p>
              <p className="pl-5">
                <span className="text-green-300">role</span>
                <span className="text-white/60">: </span>
                <span className="text-orange-300">"Developer"</span>
                <span className="text-white/60">,</span>
              </p>
              <p className="pl-5">
                <span className="text-green-300">languages</span>
                <span className="text-white/60">: [</span>
                <span className="text-orange-300">"Java"</span>
                <span className="text-white/60">, </span>
                <span className="text-orange-300">"Go"</span>
                <span className="text-white/60">, </span>
                <span className="text-orange-300">"C#"</span>
                <span className="text-white/60">, </span>
                <span className="text-orange-300">"TypeScript"</span>
                <span className="text-white/60">, </span>
                <span className="text-orange-300">"Python"</span>
                <span className="text-white/60">],</span>
              </p>
              <p className="pl-5">
                <span className="text-green-300">frameworks</span>
                <span className="text-white/60">: [</span>
                <span className="text-orange-300">"Spring Boot"</span>
                <span className="text-white/60">, </span>
                <span className="text-orange-300">"React"</span>
                <span className="text-white/60">, </span>
                <span className="text-orange-300">"ASP.NET"</span>
                <span className="text-white/60">, </span>
                <span className="text-orange-300">"Nest.js"</span>
                <span className="text-white/60">],</span>
              </p>
              <p className="pl-5">
                <span className="text-green-300">available</span>
                <span className="text-white/60">: </span>
                <span className="text-blue-400">true</span>
                <span className="text-white/60">,</span>
              </p>
              <p>
                <span className="text-white/60">{"}"}</span>
              </p>
              <p className="mt-3">
                <span className="text-violet-400">export default </span>
                <span className="text-blue-300">developer</span>
                <span className="text-white/60">;</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
