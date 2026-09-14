import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Programming",
    items: ["Python", "SQL", "JavaScript", "R"],
  },
  {
    name: "Data Analytics",
    items: [
      "Data Cleaning",
      "Data Wrangling",
      "EDA",
      "Data Visualization",
      "Statistical Analysis",
      "Business Analysis",
      "KPI Reporting",
      "A/B Testing",
    ],
  },
  {
    name: "Libraries",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "SciPy",
      "Plotly",
    ],
  },
  {
    name: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "Decision Trees",
      "Random Forest",
      "XGBoost",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    name: "Data Science",
    items: [
      "Predictive Modeling",
      "Time Series Analysis",
      "Data Mining",
      "Statistical Modeling",
      "Data Preprocessing",
      "Feature Selection",
    ],
  },
  {
    name: "Visualization",
    items: [
      "Microsoft Excel",
      "Power BI",
      "Tableau",
      "DAX",
      "Power Query",
      "Dashboard Design",
    ],
  },
  {
    name: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "CTEs",
      "Window Functions",
    ],
  },
  {
    name: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Kaggle",
    ],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<{ cat: string; item: string } | null>(null);

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#050505] py-24 md:py-40"
    >
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
            02 / Toolkit
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
                TOOLS I
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
                WORK WITH.
              </motion.div>
            </div>
          </h2>
        </div>

        {/* Tech Wall Grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] md:grid-cols-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: idx * 0.05 }}
              className="relative bg-[#050505] p-6 md:p-8"
            >
              {/* Category label */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#86868B]">
                  {String(idx + 1).padStart(2, "0")} · {cat.name}
                </span>
                <span className="text-[10px] font-medium text-[#86868B]">
                  {cat.items.length}
                </span>
              </div>

              {/* Tech items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => {
                  const isHovered = hovered?.cat === cat.name && hovered?.item === item;
                  return (
                    <motion.button
                      key={item}
                      data-cursor="hover"
                      onMouseEnter={() => setHovered({ cat: cat.name, item })}
                      onMouseLeave={() => setHovered(null)}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className={`relative overflow-hidden rounded-full border px-4 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 ${
                        isHovered
                          ? "border-white/30 bg-white/15 text-white"
                          : "border-white/[0.10] bg-white/[0.03] text-[#D2D2D7]"
                      }`}
                    >
                      <span className="relative z-10">{item}</span>
                      {isHovered && (
                        <motion.div
                          layoutId="skill-glow"
                          className="absolute inset-0 bg-gradient-to-r from-white/[0.10] via-white/[0.18] to-white/[0.10]"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Subtle inner highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-center text-[11px] uppercase tracking-[0.25em] text-[#86868B]"
        >
          Hover to explore · 30+ tools
        </motion.p>
      </div>
    </section>
  );
}
