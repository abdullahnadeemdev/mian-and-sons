import { motion } from "framer-motion";
import {
  Building2, HardHat, Wrench, Ruler, PaintBucket, Home,
  Hammer, ClipboardCheck, ShieldCheck, Sparkles
} from "lucide-react";
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
    title: "Premium Grey Structure",
    description:
      "100% accurate excavation and precise foundation leveling. We use A-Class burnt bricks personally inspected for metallic sound and structural strength, paired with 60-Grade branded steel (Mughal, Ittefaq) ensuring 100% ASTM compliance for earthquake resistance.",
  },
  {
    icon: PaintBucket,
    title: "Luxury Interior & Exterior Finishing",
    description:
      "From imported tiles and designer false ceilings to premium woodwork and modern elevations — we transform grey structures into stunning dream homes with world-class finishing standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Consultation & Project Management",
    description:
      "Comprehensive technical consultation from blueprint review to on-site supervision. We ensure every step is cross-checked against the architect's map with transparent project management.",
  },
  {
    icon: Home,
    title: "Spanish Home Construction",
    description:
      "Authentic Spanish-inspired villas with terracotta roofing, arched doorways, stucco walls, and wrought-iron accents. Mediterranean elegance crafted with Lahore's finest materials.",
  },
  {
    icon: HardHat,
    title: "Residential Home Construction",
    description:
      "From 5 Marla to multi-Kanal residences — luxury custom homes designed for modern living. Open-plan layouts, premium flooring, and smart electrical systems built to last generations.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "Annual maintenance packages including fresh paint, plumbing inspections, electrical safety checks, and structural assessments. We stay with you even after handover for any technical adjustments.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Breathing new life into existing structures with modern upgrades, structural reinforcements, kitchen and bathroom remodeling, and complete aesthetic transformations.",
  },
  {
    icon: Ruler,
    title: "Architectural Planning & Design",
    description:
      "Comprehensive design services ensuring every project is structurally sound, compliant with local regulations, and visually striking — all verified against precise measurements.",
  },
];

// ─── Material Standards Section ──────────────────────────────────────────────
const MATERIALS = [
  {
    icon: ShieldCheck,
    title: "A-Class Bricks",
    desc: "Only first-class burnt bricks, personally inspected for metallic sound and structural strength.",
  },
  {
    icon: Sparkles,
    title: "60-Grade Branded Steel",
    desc: "Exclusively Mughal / Ittefaq steel — 100% ASTM compliance for earthquake resistance.",
  },
  {
    icon: Wrench,
    title: "Premium Plumbing",
    desc: "High-pressure tested PPRC/UPVC pipes (Turk Plast / Master) for long-term safety.",
  },
  {
    icon: Ruler,
    title: "Pure Copper Wiring",
    desc: "99.9% pure copper wiring (Pakistan Cables) ensuring safe, efficient electrical systems.",
  },
];

const MaterialStandards = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-900 mt-16">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.span
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-orange-500 font-semibold tracking-widest text-sm uppercase"
        >
          Our Standards
        </motion.span>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-white mt-3"
        >
          Premium Materials, Zero Compromise
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-4 text-white/60 max-w-2xl mx-auto"
        >
          From foundation to finishing, every material is handpicked and tested to ensure your home is built to last generations.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MATERIALS.map((mat, i) => (
          <motion.div
            key={mat.title}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible(i) } }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 mb-6">
              <mat.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{mat.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{mat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PROCESS_STEPS = [
  { step: "01", title: "Call Us", desc: "Contact us via phone to share your requirements and house plan. We listen to your vision and understand your needs." },
  { step: "02", title: "Get a Transparent Quote", desc: "We provide a detailed, transparent quotation based on your specific requirements. No hidden costs." },
  { step: "03", title: "In-Person Meeting", desc: "We schedule an in-person meeting to finalize details, review architectural drawings, and align on the timeline." },
  { step: "04", title: "Build & Handover", desc: "We begin construction with 100% structural accuracy and hand over your dream home with a structural warranty." },
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
        Your Journey to a Dream Home
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

// ─── Service Areas ───────────────────────────────────────────────────────────
const ServiceAreas = () => (
  <section className="py-20 px-6 md:px-12 lg:px-20 bg-slate-50 mt-12">
    <div className="max-w-7xl mx-auto text-center">
      <motion.span
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-orange-500 font-semibold tracking-widest text-sm uppercase"
      >
        Where We Build
      </motion.span>
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-10"
      >
        Serving Lahore's Premium Societies
      </motion.h2>
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="flex flex-wrap justify-center gap-4"
      >
        {[
          "DHA (All Phases)",
          "Bahria Town",
          "Bahria Orchard",
          "Gulberg",
          "Johar Town",
          "Model Town",
          "Garden Town",
        ].map((area, i) => (
          <motion.span
            key={area}
            variants={fadeUp}
            custom={i}
            className="bg-white px-6 py-3 rounded-full shadow-md shadow-black/5 border border-slate-200 text-slate-700 font-medium text-sm hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
          >
            📍 {area}
          </motion.span>
        ))}
      </motion.div>
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
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Home?</h2>
      <p className="text-white/80 mb-8 leading-relaxed max-w-xl">
        Contact us today for a free, transparent consultation. Share your house plan, get a detailed
        quotation, and let us begin the journey of constructing your legacy.
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
          Our Services
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
          With 26+ years of experience and 200+ luxury homes completed, we provide end-to-end 
          construction solutions — from premium grey structures to luxury finishing, maintenance, 
          and everything in between. Quality work is our motto.
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

    <MaterialStandards />
    <OurProcess />
    <ServiceAreas />
    <ServicesCTA />
  </motion.div>
);

export default Services;
