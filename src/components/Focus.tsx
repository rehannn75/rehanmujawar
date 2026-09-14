import { useState } from "react";
import { motion } from "framer-motion";

const topics = [
  { name: "Data Analytics", pattern: "bar" },
  { name: "Business Analytics", pattern: "line" },
  { name: "Business Intelligence", pattern: "circle" },
  { name: "Machine Learning", pattern: "scatter" },
];

const visualizations: Record<string, React.ReactNode> = {
  bar: (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {[40, 70, 55, 90, 65, 80, 95].map((h, i) => (
        <motion.rect
          key={i}
          x={20 + i * 24}
          y={100 - h}
          width="14"
          height={h}
          fill="white"
          opacity="0.6"
          initial={{ height: 0, y: 100 }}
          whileInView={{ height: h, y: 100 - h }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
        />
      ))}
    </svg>
  ),
  line: (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      <motion.path
        d="M 10 80 Q 50 30 100 50 T 190 20"
        stroke="white" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />
    </svg>
  ),
  circle: (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="50" cy="50" r="36" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
      <motion.circle
        cx="50" cy="50" r="36" stroke="white" strokeWidth="10" fill="none"
        strokeLinecap="round" strokeDasharray="226"
        initial={{ strokeDashoffset: 226 }}
        whileInView={{ strokeDashoffset: 70 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        transform="rotate(-90 50 50)"
      />
    </svg>
  ),
  scatter: (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      {Array.from({ length: 30 }).map((_, i) => {
        const x = (i * 37) % 200;
        const y = 100 - ((i * 23) % 80 + 10);
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="2"
            fill="white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.02 }}
          />
        );
      })}
    </svg>
  ),
};

export default function Focus() {
  const [active, setActive] = useState(0);

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
            08 / Current Focus
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* Heading */}
        <div className="mb-12 md:mb-20">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-tightest">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                WHAT'S
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
                NEXT?
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Interactive area */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Topics list */}
          <div className="space-y-1">
            {topics.map((t, idx) => (
              <motion.button
                key={t.name}
                data-cursor="hover"
                onMouseEnter={() => setActive(idx)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group flex w-full items-center justify-between gap-4 border-b border-white/[0.06] py-6 text-left transition-all duration-500 md:py-8 ${
                  active === idx ? "pl-4" : ""
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="font-display text-sm font-medium text-[#86868B] transition-colors duration-500 group-hover:text-white">
                    0{idx + 1}
                  </span>
                  <span
                    className={`font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light tracking-tightest transition-all duration-500 ${
                      active === idx ? "text-white" : "text-[#86868B]/80 group-hover:text-[#D2D2D7]"
                    }`}
                  >
                    {t.name}
                  </span>
                </div>
                <motion.span
                  animate={{
                    x: active === idx ? 8 : 0,
                    opacity: active === idx ? 1 : 0.3,
                  }}
                  className="text-xl text-white"
                >
                  →
                </motion.span>
              </motion.button>
            ))}
          </div>

          {/* Visualization */}
          <div className="hidden lg:block">
            <div className="sticky top-32 overflow-hidden rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-2xl">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
              />
              <div className="relative aspect-square w-full p-8">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                      {topics[active].name}
                    </span>
                    <span className="font-display text-xs font-medium text-white">●</span>
                  </div>
                  <div className="relative flex-1 pt-6">
                    {Object.entries(visualizations).map(([key, viz]) => (
                      <motion.div
                        key={key}
                        initial={false}
                        animate={{
                          opacity: topics[active].pattern === key ? 1 : 0,
                          scale: topics[active].pattern === key ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className={`absolute inset-0 ${
                          topics[active].pattern === key ? "pointer-events-auto" : "pointer-events-none"
                        }`}
                      >
                        {viz}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
