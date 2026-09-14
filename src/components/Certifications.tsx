import { useState } from "react";
import { motion } from "framer-motion";

const certs = [
  {
    name: "Python 101 for Data Science",
    org: "IBM Cognitive Class",
    type: "Certification",
  },
  {
    name: "Introduction to Internet of Things",
    org: "Cisco Networking Academy",
    type: "Certification",
  },
  {
    name: "SQL for Data Analytics",
    org: "Self Learning",
    type: "Self Taught",
  },
  {
    name: "Power BI Fundamentals",
    org: "Self Learning",
    type: "Self Taught",
  },
];

export default function Certifications() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-black py-24 md:py-40">
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
            06 / Certifications
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tightest">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                LEARNING
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
                IN PUBLIC.
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Cert rows */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          {certs.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onMouseEnter={() => setHover(idx)}
              onMouseLeave={() => setHover(null)}
              data-cursor="hover"
              className={`group relative flex cursor-default items-center justify-between gap-6 border-b border-white/[0.06] px-6 py-6 transition-all duration-500 last:border-b-0 md:px-8 md:py-8 ${
                hover === idx ? "bg-white/[0.04] pl-10 md:pl-12" : ""
              }`}
            >
              {/* Hover glass highlight */}
              <motion.div
                animate={{
                  opacity: hover === idx ? 1 : 0,
                  x: hover === idx ? 0 : -10,
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-2 top-1/2 h-12 w-px -translate-y-1/2 bg-white md:left-4"
              />

              <div className="flex items-center gap-6">
                <span className="font-display text-sm font-medium text-[#86868B] transition-colors duration-500 group-hover:text-white">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                    {c.name}
                  </div>
                  <div className="mt-1 text-[12px] font-light text-[#86868B] md:text-[13px]">
                    {c.org}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#D2D2D7] md:inline-flex">
                  {c.type}
                </span>
                <motion.span
                  animate={{
                    x: hover === idx ? 4 : 0,
                    opacity: hover === idx ? 1 : 0.4,
                  }}
                  className="text-lg text-white"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
