import { motion } from "framer-motion";

const statements = [
  "Built multiple end-to-end Data Analytics projects.",
  "Created interactive dashboards to analyze business performance.",
  "Worked across Data Analytics, Computer Vision and Full Stack Web Development.",
  "Continuously improving technical skills through self-learning and practical implementation.",
];

export default function Progress() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-24 md:py-40">
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div className="gradient-radial pointer-events-none absolute inset-0" />

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
            07 / Progress
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {statements.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-4 md:grid-cols-12"
            >
              <div className="md:col-span-2">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-display text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-[1.15] tracking-tightest text-white md:col-span-10">
                {s}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
