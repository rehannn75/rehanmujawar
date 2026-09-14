import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-black py-24 md:py-40"
    >
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div className="gradient-radial pointer-events-none absolute inset-0" />

      <div className="section-pad relative mx-auto w-full max-w-[1400px]">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            01 / About
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Big heading */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-bold leading-[0.88] tracking-tightest">
              <div className="overflow-hidden">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  DATA
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="gradient-text"
                >
                  MEETS
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  DECISIONS.
                </motion.div>
              </div>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="lg:col-span-5 lg:pt-8">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-[17px] font-light leading-[1.55] text-[#D2D2D7] md:text-[19px]"
            >
            BSc. Computer Science graduate with a strong foundation in Data Analytics, SQL, Python, Excel, Power BI, and Machine Learning. 
            Skilled in data cleaning, EDA, visualization, dashboarding, and predictive analysis to transform data into actionable insights. 
            Passionate about solving real-world problems through data-driven decision-making.

            </motion.p>

            {/* Glass divider */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />

            {/* Quick facts grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-baseline justify-between gap-6 border-b border-white/[0.06] pb-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                  Based in
                </span>
                <span className="text-right text-[15px] font-medium text-white">
                  Mumbai, India
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-white/[0.06] pb-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                  Education
                </span>
                <span className="text-right text-[15px] font-medium text-white">
                  BSc. Computer Science
                </span>
              </div>
              <div className="pt-2">
                <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                  Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Data Analytics", "Business Analytics", "Business Intelligence", "Machine Learning"].map((t) => (
                    <span
                      key={t}
                      className="glass-soft rounded-full px-3 py-1.5 text-[12px] font-medium text-[#D2D2D7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
