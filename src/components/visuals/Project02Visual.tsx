import { motion } from "framer-motion";

// Hand landmark positions
const landmarks = [
  { x: 0.5, y: 0.85 }, { x: 0.48, y: 0.7 }, { x: 0.46, y: 0.58 },
  { x: 0.44, y: 0.48 }, { x: 0.42, y: 0.4 }, { x: 0.52, y: 0.68 },
  { x: 0.54, y: 0.55 }, { x: 0.56, y: 0.45 }, { x: 0.58, y: 0.36 },
  { x: 0.5, y: 0.7 }, { x: 0.5, y: 0.6 }, { x: 0.5, y: 0.5 },
  { x: 0.5, y: 0.42 }, { x: 0.48, y: 0.66 }, { x: 0.46, y: 0.55 },
  { x: 0.44, y: 0.46 }, { x: 0.42, y: 0.38 }, { x: 0.52, y: 0.66 },
  { x: 0.54, y: 0.55 }, { x: 0.56, y: 0.46 }, { x: 0.58, y: 0.38 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17],
];

export default function Project02Visual({ compact = false }: { compact?: boolean }) {
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
            OpenCV · MediaPipe · Live
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-medium text-[#D2D2D7]">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
            REC
          </div>
        </div>

        {/* Camera feed view */}
        <div className="mt-4 grid gap-3 lg:grid-cols-5" style={{ height: compact ? "calc(100% - 60px)" : "calc(100% - 80px)" }}>
          {/* Camera Frame */}
          <div className="glass-soft relative col-span-3 overflow-hidden rounded-xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
              <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                Camera · 30 FPS
              </div>
              <div className="font-mono text-[9px] text-[#D2D2D7]">
                1280 × 720
              </div>
            </div>

            <div className="relative h-[calc(100%-32px)] overflow-hidden bg-black/40">
              {/* Subtle grid */}
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Hand skeleton */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Connections */}
                {connections.map(([a, b], i) => (
                  <motion.line
                    key={i}
                    x1={landmarks[a].x * 100}
                    y1={landmarks[a].y * 100}
                    x2={landmarks[b].x * 100}
                    y2={landmarks[b].y * 100}
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="0.25"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.04 }}
                  />
                ))}

                {/* Landmark points */}
                {landmarks.map((p, i) => (
                  <motion.g key={i}>
                    <motion.circle
                      cx={p.x * 100}
                      cy={p.y * 100}
                      r="1.2"
                      fill="white"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                    />
                    <motion.circle
                      cx={p.x * 100}
                      cy={p.y * 100}
                      r="2.4"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.15"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.5, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.03 }}
                    />
                  </motion.g>
                ))}

                {/* Index finger tip pulse */}
                <motion.circle
                  cx={landmarks[8].x * 100}
                  cy={landmarks[8].y * 100}
                  r="3"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.3"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 2.2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </svg>

              {/* Coordinate readout */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/60 px-2 py-1 font-mono text-[9px] text-white backdrop-blur-md"
              >
                x: 0.58 y: 0.36
              </motion.div>

              {/* Hand label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur-md"
              >
                Right Hand · 21 Landmarks
              </motion.div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-2 flex flex-col gap-3">
            {/* Gesture */}
            <div className="glass-soft rounded-xl p-4">
              <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                Gesture
              </div>
              <div className="mt-2 flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-white"
                />
                <span className="font-display text-lg font-semibold tracking-tight text-white">
                  POINT
                </span>
              </div>
              <div className="mt-2 text-[10px] text-[#D2D2D7]">
                Index finger extended, others folded
              </div>
            </div>

            {/* Cursor */}
            <div className="glass-soft flex-1 rounded-xl p-4">
              <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                Cursor
              </div>
              <div className="relative mt-3 h-[calc(100%-32px)] overflow-hidden rounded-lg border border-white/[0.06] bg-black/40">
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <motion.div
                  initial={{ x: "20%", y: "30%" }}
                  animate={{ x: ["20%", "70%", "40%", "65%", "20%"], y: ["30%", "55%", "70%", "40%", "30%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M 3 3 L 3 15 L 7 11 L 10 17 L 13 16 L 10 10 L 15 10 Z"
                      fill="white" stroke="black" strokeWidth="0.5" />
                  </svg>
                </motion.div>
                {/* Trail */}
                <svg className="absolute inset-0 h-full w-full">
                  <motion.path
                    d="M 20 30 Q 40 50 70 55 Q 80 60 65 40"
                    stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </div>

            {/* FPS */}
            <div className="glass-soft rounded-xl p-3">
              <div className="flex items-center justify-between">
                <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                  Latency
                </div>
                <div className="font-display text-base font-semibold text-white">28ms</div>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-full bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
