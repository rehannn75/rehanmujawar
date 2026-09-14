import { motion } from "framer-motion";

export default function Project01Visual({ compact = false }: { compact?: boolean }) {
  const scale = compact ? 0.92 : 1;

  return (
    <div className="relative h-full w-full overflow-hidden p-4 md:p-6">
      {/* Reflection */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
      />

      <div className="relative h-full" style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/40" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
          </div>
          <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            Power BI · Sales 2025
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-medium text-[#D2D2D7]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            LIVE
          </div>
        </div>

        {/* KPI Row */}
        <div className="mt-4 grid grid-cols-4 gap-3">
          {[
            { l: "Revenue", v: "₹84.2L", c: "+12.4%" },
            { l: "Orders", v: "4,218", c: "+8.1%" },
            { l: "Customers", v: "2,847", c: "+15.6%" },
            { l: "AOV", v: "₹1,996", c: "+3.2%" },
          ].map((k, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-soft rounded-lg p-3"
            >
              <div className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                {k.l}
              </div>
              <div className="mt-1 font-display text-base font-semibold tracking-tight text-white md:text-lg">
                {k.v}
              </div>
              <div className="mt-0.5 text-[8px] font-medium text-[#D2D2D7]">{k.c}</div>
            </motion.div>
          ))}
        </div>

        {/* Main chart area */}
        <div className="mt-3 grid grid-cols-3 gap-3" style={{ height: compact ? "calc(100% - 180px)" : "calc(100% - 200px)" }}>
          {/* Revenue trend */}
          <div className="glass-soft col-span-2 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                  Revenue Trend
                </div>
                <div className="mt-1 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                  ₹84,21,500
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] font-medium text-[#D2D2D7]">
                +12.4%
              </div>
            </div>

            <svg className="mt-3 h-[calc(100%-60px)] w-full" viewBox="0 0 400 140" preserveAspectRatio="none">
              <defs>
                <linearGradient id="p1fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="0" x2="400" y1={i * 30 + 10} y2={i * 30 + 10}
                  stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              ))}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3 }}
                d="M 0 100 L 40 80 L 80 90 L 120 60 L 160 70 L 200 45 L 240 55 L 280 30 L 320 40 L 360 20 L 400 25"
                stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"
              />
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
                d="M 0 100 L 40 80 L 80 90 L 120 60 L 160 70 L 200 45 L 240 55 L 280 30 L 320 40 L 360 20 L 400 25 L 400 140 L 0 140 Z"
                fill="url(#p1fill)"
              />
            </svg>
          </div>

          {/* Customer segments */}
          <div className="glass-soft rounded-xl p-4">
            <div className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
              Customers
            </div>
            <div className="mt-3 flex h-[calc(100%-30px)] items-center justify-center">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <motion.circle
                  cx="50" cy="50" r="38"
                  stroke="rgba(255,255,255,0.1)" strokeWidth="14" fill="none"
                />
                <motion.circle
                  cx="50" cy="50" r="38"
                  stroke="white" strokeWidth="14" fill="none"
                  strokeLinecap="round"
                  strokeDasharray="238"
                  initial={{ strokeDashoffset: 238 }}
                  whileInView={{ strokeDashoffset: 70 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.4 }}
                  transform="rotate(-90 50 50)"
                />
                <text x="50" y="48" textAnchor="middle" fill="white"
                  fontSize="14" fontWeight="600">
                  70%
                </text>
                <text x="50" y="60" textAnchor="middle" fill="#86868B" fontSize="7">
                  Returning
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="glass-soft rounded-lg p-3">
            <div className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
              Top Region
            </div>
            <div className="mt-1 font-display text-sm font-semibold text-white">
              Mumbai
            </div>
            <div className="mt-1 text-[9px] text-[#D2D2D7]">₹21.4L · 25%</div>
          </div>
          <div className="glass-soft rounded-lg p-3">
            <div className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
              Top Category
            </div>
            <div className="mt-1 font-display text-sm font-semibold text-white">
              Electronics
            </div>
            <div className="mt-1 text-[9px] text-[#D2D2D7]">₹32.8L · 39%</div>
          </div>
          <div className="glass-soft rounded-lg p-3">
            <div className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
              Growth
            </div>
            <div className="mt-1 font-display text-sm font-semibold text-white">
              +12.4%
            </div>
            <div className="mt-1 text-[9px] text-[#D2D2D7]">QoQ · ↑</div>
          </div>
        </div>
      </div>
    </div>
  );
}
