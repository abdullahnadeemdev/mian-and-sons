import { motion } from "framer-motion";
import { Building2, HardHat, Ruler, Wrench } from "lucide-react";
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
  visible: { transition: { staggerChildren: 0.15 } },
};

const SERVICES = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "From corporate headquarters to retail centers, we deliver high-performance commercial spaces designed for tomorrow's business.",
  },
  {
    icon: HardHat,
    title: "Residential Development",
    description: "Luxury villas and high-end apartment complexes built with unwavering attention to detail and premium materials.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    description: "Breathing new life into existing structures with modern upgrades, structural reinforcements, and aesthetic transformations.",
  },
  {
    icon: Ruler,
    title: "Architectural Planning",
    description: "Comprehensive design and planning services ensuring every project is structurally sound, compliant, and visually striking.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Consultation & Planning", desc: "Understanding your vision, requirements, and constraints to create a solid foundation." },
  { step: "02", title: "Design & Pre-construction", desc: "Developing architectural plans, securing permits, and finalizing budgets." },
  { step: "03", title: "Execution & Build", desc: "Bringing the design to life with strict adherence to safety and quality standards." },
  { step: "04", title: "Handover & Support", desc: "Final inspections, official handover, and post-construction support." }
];

const OurProcess = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-slate-200 mt-16">
    <div className="text-center mb-16">
      <motion.span
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-orange-500 font-semibold tracking-widest text-sm uppercase"
      >
        How We Work
      </motion.span>
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-slate-900 mt-3"
      >
        Our Proven Process
      </motion.h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {PROCESS_STEPS.map((item, i) => (
        <motion.div
          key={item.step}
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={{ ...fadeUp, visible: { ...fadeUp.visible(i) } }}
          className="relative bg-white p-8 rounded-2xl shadow-xl shadow-black/5 border border-slate-100"
        >
          <div className="text-5xl font-mono font-bold text-slate-100 mb-4">{item.step}</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{item.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ServicesCTA = () => (
  <section className="bg-[#1E3A8A] py-20 px-6 text-center mt-12 rounded-3xl mx-4 md:mx-12 lg:mx-20 shadow-2xl shadow-[#1E3A8A]/30 flex flex-col items-center">
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="max-w-2xl mx-auto text-white flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your next big project?</h2>
      <p className="text-white/80 mb-8 leading-relaxed max-w-xl">
        Let our team of experts bring your vision to life. Contact us today for a free consultation and project estimate.
      </p>
      <Link to="/contact">
        <button className="bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-500/50 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-orange-500/20 hover:-translate-y-1">
          Get a Free Quote
        </button>
      </Link>
    </motion.div>
  </section>
);

const Services = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-slate-50 py-24 min-h-screen"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="text-orange-500 font-semibold tracking-widest text-sm uppercase"
        >
          Our Expertise
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold text-slate-900 mt-3"
        >
          Comprehensive <span className="text-[#1E3A8A]">Construction Services</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-slate-600 leading-relaxed text-sm md:text-base"
        >
          With over three decades of experience, we provide end-to-end solutions for projects of all scales. Our focus on quality, safety, and innovation ensures every build exceeds expectations.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid md:grid-cols-2 gap-8"
      >
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            custom={i}
            className="group bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-black/10 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center text-[#1E3A8A] mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              <service.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    <OurProcess />
    <ServicesCTA />
  </motion.div>
);

export default Services;
