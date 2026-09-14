import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import HeroAnalytics from "./HeroAnalytics";
import avatarImg from "../img.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xSpring = useSpring(mouseX, { damping: 30, stiffness: 80 });
  const ySpring = useSpring(mouseY, { damping: 30, stiffness: 80 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / cx);
      mouseY.set((e.clientY - cy) / cy);
    };

    window.addEventListener("mousemove", handle);

    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background layers */}
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div className="gradient-radial pointer-events-none absolute inset-0" />
      <div className="gradient-radial-blue pointer-events-none absolute inset-0" />

      {/* Floating analytics interface */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{
          x: useTransform(xSpring, [-1, 1], [-5, 5]),
          y: useTransform(ySpring, [-1, 1], [-3, 3]),
        }}
      >
        <HeroAnalytics />
      </motion.div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top bar */}
        <div className="section-pad pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
              Portfolio · 2026
            </div>

            <div className="hidden text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B] md:block">
              Mumbai, India
            </div>
          </motion.div>
        </div>

        {/* Main hero content */}
        <div className="section-pad flex flex-1 flex-col justify-center pb-20 pt-10 md:pb-32 md:pt-16">
          <div className="relative mx-auto w-full max-w-[1100px]">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                Data Analyst
              </span>

              <span className="hidden h-px w-12 bg-white/20 md:inline-block" />
            </motion.div>

            {/* Main name with Memoji/Avatar on the right */}
            <div className="relative flex items-center justify-between">
              <h1 className="font-display text-[clamp(3.5rem,12vw,9.5rem)] font-bold leading-[0.85] tracking-tightest">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%", filter: "blur(20px)" }}
                    animate={{ y: "0%", filter: "blur(0px)" }}
                    transition={{
                      delay: 0.15,
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    REHAN
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%", filter: "blur(20px)" }}
                    animate={{ y: "0%", filter: "blur(0px)" }}
                    transition={{
                      delay: 0.25,
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="gradient-text-silver"
                  >
                    MUJAWAR
                  </motion.div>
                </div>
              </h1>

              {/* iPhone Memoji Avatar Positioned where the cursor was */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
              >
                <img
                  src={avatarImg}
                  alt="Rehan Mujawar Avatar"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-[0_10px_25px_rgba(255,255,255,0.15)]"
                />
              </motion.div>
            </div>

            {/* Subtitle row */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:items-center md:gap-6"
            >
              <div className="flex items-center gap-3 text-sm font-medium tracking-tight text-white md:text-base">
                <span className="h-px w-8 bg-white/60" />
                DATA ANALYST
              </div>

              <div className="text-[13px] font-light tracking-tight text-[#86868B] md:text-sm">
                Python · SQL · Power BI · Excel · Tableau · Pandas · NumPy
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="mt-6 max-w-[520px] text-balance text-[15px] font-light leading-[1.55] text-[#D2D2D7] md:text-[17px]"
            >
              Turning raw data into meaningful business insights.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#work"
                data-cursor="hover"
                className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[13px] font-semibold tracking-tight text-black transition-all duration-300 hover:bg-[#D2D2D7] sm:w-auto"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                data-cursor="hover"
                className="group flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 text-[13px] font-medium tracking-tight text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] sm:w-auto"
              >
                Get in Touch
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </motion.div>

            {/* Bottom stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.85,
                duration: 0.7,
              }}
              className="mt-16 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-6 md:mt-24"
            >
              {[
                { k: "Projects", v: "03+" },
                { k: "Focus", v: "Data Analyst / Machine learning" },
                { k: "Based", v: "Mumbai" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                    {s.k}
                  </span>

                  <span className="mt-2 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {s.v}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.7,
          }}
          className="section-pad flex justify-center pb-8"
        >
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#86868B]">
            <span>Scroll</span>

            <div className="relative h-6 w-px overflow-hidden bg-white/10">
              <div className="absolute left-0 top-0 h-3 w-px bg-white scroll-hint" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
