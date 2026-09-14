import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const stages = [
  {
    num: "01",
    label: "Source",
    title: "Raw Data",
    desc: "Disparate sources, inconsistent formats, missing values.",
  },
  {
    num: "02",
    label: "Clean",
    title: "Structured",
    desc: "Normalised, validated, and prepared for analysis.",
  },
  {
    num: "03",
    label: "Analyze",
    title: "Patterns",
    desc: "Statistical exploration, correlation, and trend detection.",
  },
  {
    num: "04",
    label: "Visualize",
    title: "Charts",
    desc: "Interactive dashboards and clear visual narratives.",
  },
  {
    num: "05",
    label: "Insight",
    title: "Decisions",
    desc: "Actionable recommendations that drive business value.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(stages.length - 1, Math.floor(v * stages.length));
      setActiveStage(idx);
    });
  }, [scrollYProgress]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative w-full bg-black"
    >
      {/* Section intro - normal flow */}
      <div className="section-pad relative mx-auto w-full max-w-[1400px] pt-24 pb-16 md:pt-40 md:pb-24">
        <div className="bg-noise pointer-events-none absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            03 / Process
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-tightest">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              FROM RAW
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
              DATA TO
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              INSIGHT.
            </motion.div>
          </div>
        </h2>
      </div>

      {/* Sticky sticky sticky scroll */}
      <div className="section-pad mx-auto w-full max-w-[1400px] pb-24 md:pb-40">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: stage list */}
          <div className="space-y-6 lg:col-span-5">
            {stages.map((s, idx) => (
              <StageRow
                key={s.num}
                stage={s}
                index={idx}
                active={activeStage === idx}
              />
            ))}
          </div>

          {/* Right: sticky visual */}
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-32">
              <ProcessVisual activeStage={activeStage} />
              {/* Final quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-10 text-center"
              >
                <p className="font-display text-2xl font-light italic tracking-tight text-white md:text-3xl">
                  "Turn information into decisions."
                </p>
              </motion.div>
            </div>
          </div>

          {/* Mobile: stacked visuals */}
          <div className="space-y-16 lg:hidden">
            {stages.map((s, idx) => (
              <div key={s.num} className="space-y-4">
                <MobileStageVisual stage={idx} />
                <div className="text-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                    Stage {s.num}
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold text-white">
                    {s.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StageRow({
  stage,
  index,
  active,
}: {
  stage: { num: string; label: string; title: string; desc: string };
  index: number;
  active: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className={`group relative flex items-start gap-6 border-l-2 pl-6 transition-all duration-700 ${
        active
          ? "border-white"
          : "border-white/10"
      }`}
    >
      <div className="flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] font-display text-base font-semibold tracking-tight text-white">
          {stage.num}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <div className="flex items-baseline gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            {stage.label}
          </span>
          {active && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-medium text-white"
            >
              ● Active
            </motion.span>
          )}
        </div>
        <h3
          className={`mt-1 font-display text-3xl font-semibold tracking-tightest transition-colors duration-500 md:text-4xl ${
            active ? "text-white" : "text-[#86868B]"
          }`}
        >
          {stage.title}
        </h3>
        <p
          className={`mt-2 max-w-sm text-[13px] font-light leading-relaxed transition-colors duration-500 md:text-[14px] ${
            active ? "text-[#D2D2D7]" : "text-[#86868B]/60"
          }`}
        >
          {stage.desc}
        </p>
      </div>
    </motion.div>
  );
}

function ProcessVisual({ activeStage }: { activeStage: number }) {
  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
      {/* Reflection */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
      />

      <div className="relative flex h-full flex-col p-8">
        {/* Top status bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-white"
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#D2D2D7]">
              Stage {activeStage + 1} / 5 · {stages[activeStage].label}
            </span>
          </div>
          <span className="text-[10px] font-medium text-[#86868B]">live</span>
        </div>

        {/* Stage visuals */}
        <div className="relative flex-1 overflow-hidden pt-6">
          <Stage1 active={activeStage === 0} />
          <Stage2 active={activeStage === 1} />
          <Stage3 active={activeStage === 2} />
          <Stage4 active={activeStage === 3} />
          <Stage5 active={activeStage === 4} />
        </div>

        {/* Bottom progress */}
        <div className="mt-4 flex items-center gap-1 border-t border-white/[0.08] pt-4">
          {stages.map((_, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded-full bg-white/[0.08]">
              <motion.div
                initial={false}
                animate={{
                  width: activeStage >= i ? "100%" : activeStage === i - 1 ? "50%" : "0%",
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-1 rounded-full bg-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stage({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.95,
        filter: active ? "blur(0px)" : "blur(20px)",
      }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 pt-0 ${active ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {children}
    </motion.div>
  );
}

function Stage1({ active }: { active: boolean }) {
  return (
    <Stage active={active}>
      <div className="h-full overflow-hidden rounded-xl border border-white/[0.06] bg-black/40 p-4 font-mono text-[10px] leading-relaxed text-[#86868B]">
        <div className="mb-3 flex items-center gap-2 border-b border-white/[0.06] pb-2 text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          raw_sales.csv
        </div>
        {[
          ["001", "Mumbai", "??", "1,2?4", "yes"],
          ["002", "Delhi", "5,890", "1,045", "no"],
          ["003", "??", "3,420", "??8", "ye?"],
          ["004", "Chennai", "8,210", "2,150", "yes"],
          ["005", "Pune", "?", "1,890", "no"],
          ["006", "Kolkata", "6,150", "?", "yes"],
          ["007", "??", "4,820", "1,640", "no"],
          ["008", "Jaipur", "7,210", "2,380", "yes"],
          ["009", "Lucknow", "2,180", "??5", "no"],
          ["010", "??", "5,640", "1,920", "ye?"],
          ["011", "Ahmedabad", "4,210", "1,360", "yes"],
          ["012", "??", "?", "1,540", "no"],
        ].map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="grid grid-cols-5 gap-2 border-b border-white/[0.04] py-1"
          >
            {row.map((cell, j) => (
              <span key={j} className={cell.includes("?") ? "text-white/30" : ""}>
                {cell}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </Stage>
  );
}

function Stage2({ active }: { active: boolean }) {
  return (
    <Stage active={active}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 font-mono text-[10px] text-[#D2D2D7]">
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-white">df</span>
          <span>.dropna() .fillna(0)</span>
          <span className="ml-auto rounded border border-white/10 px-2 py-0.5 text-[9px]">
            ✓ 1,240 rows
          </span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-3">
          {[
            { label: "Clean", val: "100%", ok: true },
            { label: "Validated", val: "98.4%", ok: true },
            { label: "Normalised", val: "100%", ok: true },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-4"
            >
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#86868B]">
                {s.label}
              </div>
              <div className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                {s.val}
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={active ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="h-full bg-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-black/40 font-mono text-[10px] leading-relaxed">
          <div className="border-b border-white/[0.06] px-3 py-1.5 text-[#D2D2D7]">
            sales_clean.parquet
          </div>
          <div className="grid grid-cols-5 gap-2 px-3 py-2 text-[#D2D2D7]">
            <span className="text-white/60">id</span>
            <span className="text-white/60">city</span>
            <span className="text-white/60">revenue</span>
            <span className="text-white/60">qty</span>
            <span className="text-white/60">paid</span>
          </div>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
              className="grid grid-cols-5 gap-2 border-t border-white/[0.04] px-3 py-1.5"
            >
              <span>0{i}</span>
              <span>Mumbai</span>
              <span>5,890</span>
              <span>1,045</span>
              <span>yes</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Stage>
  );
}

function Stage3({ active }: { active: boolean }) {
  return (
    <Stage active={active}>
      <div className="flex h-full flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { l: "Mean", v: "₹4,820" },
            { l: "Median", v: "₹4,510" },
            { l: "σ", v: "1,240" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3"
            >
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#86868B]">
                {s.l}
              </div>
              <div className="mt-1 font-display text-lg font-semibold tracking-tight text-white">
                {s.v}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex-1 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
          <div className="text-[9px] uppercase tracking-[0.25em] text-[#86868B]">
            Correlation Heatmap
          </div>
          <svg className="mt-3 h-[calc(100%-16px)] w-full" viewBox="0 0 300 180" preserveAspectRatio="xMidYMid meet">
            {[0, 1, 2, 3, 4].map((row) => (
              [0, 1, 2, 3, 4].map((col) => {
                const v = (Math.sin(row * 1.3) * Math.cos(col * 0.9) + 1) / 2;
                return (
                  <motion.rect
                    key={`${row}-${col}`}
                    x={col * 56 + 12}
                    y={row * 32 + 8}
                    width="48"
                    height="26"
                    rx="3"
                    fill={`rgba(255,255,255,${0.05 + v * 0.6})`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={active ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: (row + col) * 0.05 }}
                  />
                );
              })
            ))}
          </svg>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-3 font-mono text-[10px] text-[#D2D2D7]">
          <span className="text-white/50"># Pearson correlation</span>
          <br />
          df.corr() → revenue ↔ qty : <span className="text-white">0.84</span>
        </div>
      </div>
    </Stage>
  );
}

function Stage4({ active }: { active: boolean }) {
  return (
    <Stage active={active}>
      <div className="flex h-full flex-col gap-3">
        <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-[#86868B]">
                Revenue Trend
              </div>
              <div className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">
                ₹84.2L
              </div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-medium text-[#D2D2D7]">
              +12.4%
            </div>
          </div>
          <svg className="mt-2 h-[calc(100%-50px)] w-full" viewBox="0 0 400 140">
            <defs>
              <linearGradient id="p4Fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="0" x2="400" y1={i * 30 + 10} y2={i * 30 + 10}
                stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            ))}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={active ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.6, delay: 0.3 }}
              d="M 0 100 L 50 85 L 100 90 L 150 60 L 200 70 L 250 40 L 300 50 L 350 25 L 400 30"
              stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              d="M 0 100 L 50 85 L 100 90 L 150 60 L 200 70 L 250 40 L 300 50 L 350 25 L 400 30 L 400 140 L 0 140 Z"
              fill="url(#p4Fill)"
            />
          </svg>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { l: "Q1", v: "₹18.4L" },
            { l: "Q2", v: "₹21.2L" },
            { l: "Q3", v: "₹22.1L" },
            { l: "Q4", v: "₹22.5L" },
          ].map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2.5"
            >
              <div className="text-[8px] uppercase tracking-[0.25em] text-[#86868B]">
                {q.l}
              </div>
              <div className="mt-1 font-display text-sm font-semibold text-white">
                {q.v}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Stage>
  );
}

function Stage5({ active }: { active: boolean }) {
  return (
    <Stage active={active}>
      <div className="flex h-full flex-col gap-3">
        <div className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-4">
          <div className="flex items-center justify-between">
            <div className="text-[9px] uppercase tracking-[0.25em] text-[#86868B]">
              Decision
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-medium text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              LIVE
            </div>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { icon: "↑", txt: "Reallocate Q4 ad spend to top 3 cities" },
              { icon: "→", txt: "Maintain pricing tier across regions" },
              { icon: "↓", txt: "Reduce stock for underperforming SKU" },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5"
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] font-display text-sm text-white">
                  {d.icon}
                </div>
                <span className="text-[11px] leading-relaxed text-[#D2D2D7]">
                  {d.txt}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
          <div className="text-[9px] uppercase tracking-[0.25em] text-[#86868B]">
            Projected Impact
          </div>
          <svg className="mt-3 h-[calc(100%-30px)] w-full" viewBox="0 0 300 100">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={active ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.6, delay: 0.5 }}
              d="M 0 80 L 50 75 L 100 60 L 150 50 L 200 35 L 250 20 L 300 10"
              stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={active ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.6, delay: 0.7 }}
              d="M 0 85 L 50 82 L 100 80 L 150 78 L 200 75 L 250 73 L 300 70"
              stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"
              strokeLinecap="round" strokeDasharray="3 3"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
              x="270" y="8" fill="white" fontSize="10" textAnchor="end"
            >
              +18.4%
            </motion.text>
            <motion.text
              initial={{ opacity: 0 }}
              animate={active ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.6 }}
              x="270" y="68" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end"
            >
              Baseline
            </motion.text>
          </svg>
        </div>
      </div>
    </Stage>
  );
}

function MobileStageVisual({ stage }: { stage: number }) {
  const map: Record<number, React.ReactNode> = {
    0: <Stage1 active={true} />,
    1: <Stage2 active={true} />,
    2: <Stage3 active={true} />,
    3: <Stage4 active={true} />,
    4: <Stage5 active={true} />,
  };
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent backdrop-blur-2xl">
      <div className="relative flex h-full flex-col p-4">
        <div className="relative flex-1 overflow-hidden">{map[stage]}</div>
      </div>
    </div>
  );
}
