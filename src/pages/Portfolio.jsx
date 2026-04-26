import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "../constants";
import { homeOne } from "../assets/images";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Mini Hero ───────────────────────────────────────────────────────────────
const MiniHero = () => (
  <div className="relative h-[40vh] min-h-80 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-dark/70 z-10" />
    <img
      src={homeOne}
      alt="Mian & Sons portfolio"
      className="absolute inset-0 w-full h-full object-cover"
      fetchPriority="high"
      decoding="async"
    />
    <motion.div
      className="relative z-20 text-center px-6"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <span className="inline-block bg-secondary text-white text-xs sm:text-sm font-medium px-5 py-1.5 rounded-full tracking-wider mb-6">
        OUR PORTFOLIO
      </span>
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white max-w-4xl leading-tight">
        200+ Luxury Homes, <span className="text-secondary">One Standard.</span>
      </h1>
      <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
        Serving DHA, Bahria Town, Bahria Orchard, Gulberg, and Johar Town —
        visit our active sites to witness our quality firsthand.
      </p>
    </motion.div>
  </div>
);

// ─── Filter Tabs ─────────────────────────────────────────────────────────────
const FilterTabs = ({ active, onChange }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={stagger}
    className="flex flex-wrap justify-center gap-3 mb-12"
  >
    {PORTFOLIO_CATEGORIES.map((cat, i) => (
      <motion.button
        key={cat}
        variants={fadeUp}
        custom={i}
        onClick={() => onChange(cat)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${
          active === cat
            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
            : "bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary"
        }`}
      >
        {cat}
      </motion.button>
    ))}
  </motion.div>
);

// ─── Project Card ────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 bg-white border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
  >
    {/* Image */}
    <div className="h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      {/* Category Badge */}
      <span className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
        {project.category}
      </span>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
        <MapPin className="w-3.5 h-3.5" />
        <span>{project.location}</span>
        {project.area && (
          <>
            <span className="mx-1">•</span>
            <span>{project.area}</span>
          </>
        )}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  </motion.div>
);

// ─── Portfolio Page ──────────────────────────────────────────────────────────
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MiniHero />

      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <FilterTabs active={activeCategory} onChange={setActiveCategory} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-20 bg-primary rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl shadow-primary/20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Impressed? Let's Build Yours Next.
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            We invite you to visit our active construction sites and see our
            quality control firsthand. Your dream home is one phone call away.
          </p>
          <Link to="/contact">
            <button className="bg-secondary hover:bg-accent text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-orange-500/20 hover:-translate-y-1 flex items-center gap-2 mx-auto cursor-pointer">
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
