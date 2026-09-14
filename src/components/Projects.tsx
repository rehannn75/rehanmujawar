import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project01Visual from "./visuals/Project01Visual";
import Project02Visual from "./visuals/Project02Visual";
import Project03Visual from "./visuals/Project03Visual";

const projects = [
  {
    num: "01",
    title: "Sales Data Analysis Dashboard",
    category: "Data Analytics",
    year: "2025",
    tech: ["Python", "Pandas", "SQL", "Power BI"],
    description:
      "Collected, cleaned, and transformed raw sales data using Python and Pandas. Performed Exploratory Data Analysis to identify sales trends, customer behavior, and revenue growth. Created interactive Power BI dashboards to monitor KPIs and business performance.",
    visual: Project01Visual,
  },
  {
    num: "02",
    title: "AI Virtual Mouse",
    category: "Computer Vision",
    year: "2025",
    tech: ["Python", "OpenCV", "MediaPipe"],
    description:
      "Developed a gesture-controlled virtual mouse using Python, OpenCV, and MediaPipe with real-time hand tracking and gesture recognition.",
    visual: Project02Visual,
  },
  {
    num: "03",
    title: "E-Commerce Pickle Store",
    category: "Full Stack Web",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
    description:
      "Designed and developed a responsive e-commerce website with user authentication and product management features. Integrated MongoDB to manage customer, product, and order information. Developed an admin dashboard for inventory and order management.",
    visual: Project03Visual,
  },
];

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="relative w-full overflow-hidden bg-black py-24 md:py-40">
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
            04 / Selected Work
          </span>
          <span className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* Heading */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-tightest">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                THINGS
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
                I'VE BUILT.
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Projects list */}
        <div className="space-y-32 md:space-y-48">
          {projects.map((p, idx) => (
            <ProjectCard
              key={p.num}
              project={p}
              index={idx}
              onExpand={() => setActive(idx)}
            />
          ))}
        </div>
      </div>

      {/* Full screen presentation */}
      <AnimatePresence>
        {active !== null && (
          <ProjectModal
            project={projects[active]}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onExpand,
}: {
  project: (typeof projects)[number];
  index: number;
  onExpand: () => void;
}) {
  const Visual = project.visual;
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-10 lg:grid-cols-12 lg:gap-12"
    >
      {/* Text */}
      <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-medium tracking-tight text-white">
            {project.num}
          </span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
            {project.year}
          </span>
        </div>

        <h3 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[0.95] tracking-tightest">
          {project.title}
        </h3>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#D2D2D7]">
          {project.category}
        </div>

        <p className="mt-6 max-w-md text-[14px] font-light leading-[1.6] text-[#D2D2D7] md:text-[15px]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-tight text-[#D2D2D7]"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          data-cursor="hover"
          onClick={onExpand}
          className="group mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-white transition-all duration-300"
        >
          <span className="border-b border-white/30 pb-1 transition-all group-hover:border-white">
            View Project
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* Visual */}
      <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:h-[460px]"
          onClick={onExpand}
          data-cursor="data"
        >
          <Visual compact />
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  const Visual = project.visual;
  const [tab, setTab] = useState<"overview" | "tech" | "features" | "approach">("overview");

  const tabs: { id: typeof tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "tech", label: "Technology" },
    { id: "features", label: "Features" },
    { id: "approach", label: "Approach" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] overflow-y-auto bg-black/95 backdrop-blur-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen w-full"
      >
        {/* Top nav */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.06] bg-black/80 px-6 py-4 backdrop-blur-2xl md:px-12">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-medium tracking-tight text-white">
              {project.num}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
              {project.category}
            </span>
          </div>
          <button
            data-cursor="hover"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:bg-white/[0.10]"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="mx-auto w-full max-w-[1400px] px-6 py-12 md:px-12 md:py-20">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.95] tracking-tightest">
              {project.title}
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#D2D2D7]">
                {project.year}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#D2D2D7]">
                {project.category}
              </span>
            </div>
          </motion.div>

          {/* Visual full */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/[0.10] bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:h-[560px]"
          >
            <Visual />
          </motion.div>

          {/* Tabs */}
          <div className="mt-12">
            <div className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  data-cursor="hover"
                  onClick={() => setTab(t.id)}
                  className={`relative rounded-full px-5 py-2 text-[12px] font-medium tracking-tight transition-all duration-300 ${
                    tab === t.id
                      ? "bg-white text-black"
                      : "text-[#86868B] hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-[15px] font-light leading-[1.65] text-[#D2D2D7] md:text-[17px]"
                  >
                    {tab === "overview" && <p>{project.description}</p>}
                    {tab === "tech" && (
                      <div>
                        <p className="mb-6">
                          Built with a modern data and web stack focused on
                          clarity, performance, and developer ergonomics.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/[0.10] bg-white/[0.05] px-4 py-2 text-[13px] font-medium text-white"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {tab === "features" && <FeatureList project={project.num} />}
                    {tab === "approach" && <ApproachList project={project.num} />}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div className="glass-soft rounded-2xl p-6">
                  <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                    Year
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                    {project.year}
                  </div>
                </div>
                <div className="glass-soft rounded-2xl p-6">
                  <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                    Category
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                    {project.category}
                  </div>
                </div>
                <div className="glass-soft rounded-2xl p-6">
                  <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                    Status
                  </div>
                  <div className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-white">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeatureList({ project }: { project: string }) {
  const map: Record<string, string[]> = {
    "01": [
      "Interactive KPI dashboards for revenue, orders, and AOV.",
      "Trend analysis across regions, categories, and time periods.",
      "Customer segmentation with behavioural signals.",
      "Drill-down filters for region, product, and channel.",
      "Automated data pipeline using Python and SQL.",
    ],
    "02": [
      "Real-time hand landmark tracking with MediaPipe.",
      "Gesture recognition for click, scroll, and drag.",
      "Smooth cursor control with low-latency frame processing.",
      "OpenCV pipeline for camera input and visualisation.",
      "Lightweight, dependency-free runtime.",
    ],
    "03": [
      "User authentication and secure session handling.",
      "Product catalogue with search and filtering.",
      "Cart and checkout workflow.",
      "Admin dashboard for inventory and orders.",
      "MongoDB-backed data layer for customers, products, and orders.",
    ],
  };
  return (
    <ul className="space-y-3">
      {map[project]?.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function ApproachList({ project }: { project: string }) {
  const map: Record<string, string[]> = {
    "01": [
      "Ingest raw sales data and audit schema, missing values, and outliers.",
      "Clean and transform with Pandas, then load into SQL for analysis.",
      "Perform EDA to identify trends, seasonality, and revenue drivers.",
      "Design KPI layer and translate into interactive Power BI visuals.",
      "Iterate on layout, filters, and storytelling for business users.",
    ],
    "02": [
      "Capture live video stream via OpenCV.",
      "Detect hand landmarks using MediaPipe Hands.",
      "Map landmark coordinates to cursor movement with smoothing.",
      "Classify gestures (pinch, fist, open) into actions.",
      "Tune latency and robustness across lighting conditions.",
    ],
    "03": [
      "Define data models for users, products, and orders in MongoDB.",
      "Build responsive front-end with HTML, CSS, and JavaScript.",
      "Implement authentication and protected routes.",
      "Wire up product catalogue, cart, and checkout flow.",
      "Build admin dashboard for inventory and order management.",
    ],
  };
  return (
    <ul className="space-y-3">
      {map[project]?.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}
