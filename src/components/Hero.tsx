import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroAnalytics from "./HeroAnalytics";
import avatarImg from "../img.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xSpring = useSpring(mouseX, {
    damping: 30,
    stiffness: 80,
  });

  const ySpring = useSpring(mouseY, {
    damping: 30,
    stiffness: 80,
  });

  /*
   * Mouse parallax is disabled on mobile/tablet.
   * It only runs on desktop devices.
   */
  useEffect(() => {
    const isMobile =
      window.matchMedia("(max-width: 1024px)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isMobile) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      mouseX.set((event.clientX - cx) / cx);
      mouseY.set((event.clientY - cy) / cy);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Effects */}
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <div className="gradient-radial pointer-events-none absolute inset-0" />

      <div className="gradient-radial-blue pointer-events-none absolute inset-0" />

      {/* Desktop Analytics Background */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{
          x: useTransform(
            xSpring,
            [-1, 1],
            [-5, 5]
          ),
          y: useTransform(
            ySpring,
            [-1, 1],
            [-3, 3]
          ),
        }}
      >
        <HeroAnalytics />
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Top Intro */}
        <div className="section-pad pt-28 md:pt-32">
          <div className="mx-auto w-full max-w-[1400px]">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-white/20" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                Data Analyst · Machine Learning
              </span>
            </motion.div>

          </div>
        </div>

        {/* Main Hero */}
        <div className="section-pad flex flex-1 flex-col justify-center pb-20 pt-10 md:pb-32 md:pt-16">
          <div className="relative mx-auto w-full max-w-[1100px]">

            {/* Small Intro */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <div className="relative">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.3,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="relative flex items-center justify-between">

                  <h1 className="font-display text-[clamp(3.5rem,12vw,9.5rem)] font-bold leading-[0.85] tracking-tightest">
                    REHAN
                    <br />
                    MUJAWAR
                  </h1>

                  {/* Desktop Avatar */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
                  >
                    <img
                      src={avatarImg}
                      alt="Rehan Mujawar Avatar"
                      className="h-40 w-40 object-contain md:h-56 md:w-56"
                    />
                  </motion.div>

                </div>
              </motion.div>

            </div>

            {/* Description */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 max-w-xl md:mt-12"
            >
              <p className="text-[15px] font-light leading-[1.7] text-[#D2D2D7] md:text-[17px]">
                Data Analyst focused on transforming raw data into
                meaningful insights, interactive dashboards, and
                data-driven business decisions.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-medium text-black transition-all duration-300 hover:bg-[#D2D2D7]"
              >
                <span>View My Work</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-white/[0.08]"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 grid grid-cols-1 gap-6 border-t border-white/[0.08] pt-6 sm:grid-cols-3 md:mt-20"
            >
              {/* Projects */}
              <div>
                <div className="font-display text-2xl font-semibold tracking-tight text-white">
                  03+
                </div>

                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                  Projects
                </div>
              </div>

              {/* Focus */}
              <div>
                <div className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                  Data Analyst
                </div>

                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                  Focus
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                  Mumbai
                </div>

                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#86868B]">
                  Based
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Scroll Hint */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          className="section-pad pb-8 md:pb-10"
        >
          <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
              Scroll to explore
            </span>

            <div className="scroll-hint text-lg text-[#86868B]">
              ↓
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
