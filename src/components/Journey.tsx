import { motion } from "framer-motion";

const events = [
  {
    year: "2022 — 2025",
    title: "BSc. Computer Science",
    org: "University Of Mumbai",
    detail: "CGPA: 7.18 / 10",
  },
  {
    year: "2020 — 2022",
    title: "Higher Secondary Certificate",
    org: "Maharashtra State Board",
    detail: "Grade: B",
  },
  {
    year: "2020",
    title: "Secondary School Certificate",
    org: "Maharashtra State Board",
    detail: "Grade: A",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative w-full overflow-hidden bg-[#050505] py-24 md:py-40">
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
            05 / Journey
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* Heading */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-tightest">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                THE
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-text"
              >
                FOUNDATION.
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-20">
            {events.map((e, idx) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`grid gap-8 md:grid-cols-2 ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`pl-6 md:pl-0 ${idx % 2 === 1 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"}`}>
                  <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                    {e.year}
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tightest text-white md:text-4xl">
                    {e.title}
                  </h3>
                  <div className="mt-2 text-[14px] font-medium text-[#D2D2D7]">
                    {e.org}
                  </div>
                  <div className="mt-2 text-[13px] font-light text-[#86868B]">
                    {e.detail}
                  </div>
                </div>
                <div className={`relative hidden md:block ${idx % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  {/* Node dot */}
                  <div
                    className={`absolute top-6 h-2 w-2 rounded-full bg-white ${
                      idx % 2 === 1 ? "right-0 -mr-px" : "left-0 -ml-px"
                    }`}
                  />
                  {/* Glass card */}
                  <div className="glass-soft ml-0 rounded-2xl p-6 md:ml-0">
                    <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                      Milestone
                    </div>
                    <div className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#D2D2D7]">
                      {idx === 0 ? "Degree" : idx === 1 ? "Higher Secondary" : "Secondary"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
