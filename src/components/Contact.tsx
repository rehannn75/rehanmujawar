import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-black py-24 md:py-40"
    >
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div className="gradient-radial pointer-events-none absolute inset-0" />
      <div className="gradient-radial-blue pointer-events-none absolute inset-0" />

      <div className="section-pad relative mx-auto w-full max-w-[1400px]">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            09 / Contact
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* Main heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-display text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.85] tracking-tightest">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                LET'S
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-text-silver"
              >
                TALK
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                DATA.
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl text-balance text-[16px] font-light leading-[1.55] text-[#D2D2D7] md:text-[19px]"
        >
          Open to Data Analyst, Business Analyst, Business Intelligence and Data
          Science internship opportunities.
        </motion.p>

        {/* Email display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            Email
          </div>
          <a
            href="mailto:rehanmujawar073@gmail.com"
            data-cursor="hover"
            className="mt-2 block break-all font-display text-[clamp(1.5rem,4vw,3rem)] font-light leading-tight tracking-tight text-white transition-all duration-300 hover:text-[#D2D2D7] md:text-[3.5rem]"
          >
            rehanmujawar073@gmail.com
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-16"
        >
          <a
            href="mailto:rehanmujawar073@gmail.com"
            data-cursor="hover"
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-[14px] font-semibold tracking-tight text-black transition-all duration-300 hover:bg-[#D2D2D7] sm:w-auto"
          >
            Email Me
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </motion.div>

        {/* Final signature line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="mt-24 flex flex-col items-center gap-3 border-t border-white/[0.08] pt-12 text-center md:mt-32"
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
              Available for opportunities
            </span>
          </div>
          <p className="font-display text-lg font-light italic tracking-tight text-[#D2D2D7] md:text-xl">
            Looking forward to building something meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
