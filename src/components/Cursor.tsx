import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, {
    damping: 30,
    stiffness: 250,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    damping: 30,
    stiffness: 250,
    mass: 0.5,
  });

  const [variant, setVariant] = useState<
    "default" | "hover" | "data"
  >("default");

  const [isMobile, setIsMobile] = useState(true);

  /*
   * Detect touch/mobile devices before enabling
   * mouse cursor effects.
   */
  useEffect(() => {
    const checkDevice = () => {
      const mobile =
        window.matchMedia("(max-width: 1024px)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;

      setIsMobile(mobile);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  /*
   * Mouse cursor is completely disabled on mobile/tablet.
   */
  useEffect(() => {
    if (isMobile) {
      return;
    }

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as HTMLElement | null;

      if (!target) {
        setVariant("default");
        return;
      }

      if (target.closest("[data-cursor='hover']")) {
        setVariant("hover");
      } else if (target.closest("[data-cursor='data']")) {
        setVariant("data");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [isMobile, x, y]);

  /*
   * No custom cursor on mobile/tablet.
   */
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Inner cursor */}
      <motion.div
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale:
              variant === "hover"
                ? 2.4
                : variant === "data"
                ? 1.8
                : 1,
            opacity:
              variant === "default"
                ? 1
                : 0.9,
          }}
          transition={{
            type: "spring",
            damping: 22,
            stiffness: 300,
          }}
          className="h-2 w-2 rounded-full bg-white"
        />
      </motion.div>

      {/* Outer cursor */}
      <motion.div
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale:
              variant === "hover"
                ? 1.6
                : variant === "data"
                ? 1.2
                : 0.6,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200,
          }}
          className="h-10 w-10 rounded-full border border-white/40"
        />
      </motion.div>
    </>
  );
}
