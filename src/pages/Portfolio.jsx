import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Portfolio = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-slate-50 py-32 px-6 md:px-12 lg:px-20 min-h-screen flex items-center justify-center"
  >
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Projects</h1>
      <p className="text-slate-600 max-w-xl mx-auto">
        We are currently curating our portfolio of successful projects. Check back soon for detailed case studies and galleries of our commercial and residential work.
      </p>
    </motion.div>
  </motion.div>
);

export default Portfolio;
