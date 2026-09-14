import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  /*
   * Mobile-safe navigation width.
   *
   * Desktop:
   * 720px -> 600px while scrolling
   *
   * Mobile:
   * Never becomes wider than viewport - 32px
   */
  const width = useTransform(
    scrollY,
    [0, 400],
    [
      "min(720px, calc(100vw - 32px))",
      "min(600px, calc(100vw - 32px))",
    ]
  );

  const opacity = useTransform(scrollY, [0, 400], [1, 0.92]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setScrolled(value > 40);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-4 z-[100] flex justify-center px-4 md:top-6"
    >
      <motion.nav
        style={{ width, opacity }}
        className={`glass-nav relative flex max-w-full items-center justify-between rounded-full px-3 py-2 transition-all duration-500 md:px-4 ${
          scrolled
            ? "shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#top"
          data-cursor="hover"
          className="flex shrink-0 items-center gap-2 px-2 py-1.5 md:px-3"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[8px] font-bold text-black">
            R
          </div>

          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:inline">
            REHAN
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-cursor="hover"
              className="rounded-full px-3 py-1.5 text-[12px] font-medium text-[#D2D2D7] transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Connect Button */}
        <a
          href="#contact"
          data-cursor="hover"
          className="group flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-black transition-all duration-300 hover:bg-[#D2D2D7] md:px-4"
        >
          <span className="hidden sm:inline">
            Let's Connect
          </span>

          <span className="sm:hidden">
            Connect
          </span>

          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>

        {/* Shine */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
      </motion.nav>
    </motion.div>
  );
}
