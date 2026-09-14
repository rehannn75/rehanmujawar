import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.06] bg-black pt-16 pb-8 md:pt-24">
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <div className="section-pad relative mx-auto w-full max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5"
          >
            <div className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[0.95] tracking-tightest text-white">
              REHAN
              <br />
              <span className="gradient-text-silver">MUJAWAR</span>
            </div>
            <div className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
              Data Analyst
            </div>
            <div className="mt-3 text-[13px] font-light text-[#D2D2D7]">
              Python · SQL · Power BI · Excel
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
  Connect
</div>

<div className="mt-5 space-y-3">
  <a
    href="mailto:rehanmujawar073@gmail.com"
    data-cursor="hover"
    className="block text-[14px] font-medium text-white transition-all duration-300 hover:text-[#D2D2D7]"
  >
    Email ↗
  </a>

  <a
    href="https://github.com/rehanmujawar073-dev"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="hover"
    className="block text-[14px] font-medium text-white transition-all duration-300 hover:text-[#D2D2D7]"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/rehan-mujawar-b3b747266/"
    target="_blank"
    rel="noopener noreferrer"
    data-cursor="hover"
    className="block text-[14px] font-medium text-white transition-all duration-300 hover:text-[#D2D2D7]"
  >
    LinkedIn ↗
  </a>
</div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
              Location
            </div>
            <div className="mt-5 text-[14px] font-medium text-white">
              Mumbai, Maharashtra
            </div>
            <div className="mt-1 text-[13px] font-light text-[#86868B]">
              India
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:items-center"
        >
          <div className="text-[11px] font-light tracking-tight text-[#86868B]">
            © 2026 Rehan Mujawar. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            <span>Turning data into meaningful insights</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
