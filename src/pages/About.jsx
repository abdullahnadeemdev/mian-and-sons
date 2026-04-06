import { motion } from "framer-motion";
import { homeOne } from "../assets/images";
import { TEAM_MEMBERS, STORY_IMAGES } from "../constants";
import { Shield, Target, Users, Zap } from "lucide-react";

// Lucide doesn't include brand icons — lightweight inline SVG
const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ─── Animation Variants ──────────────────────────────────────────────────────
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

// ─── Mini Hero ───────────────────────────────────────────────────────────────
const MiniHero = () => (
  <div className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-dark/70 z-10" />
    <img
      src={homeOne}
      alt="Mian & Sons construction site"
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
      <span className="inline-block bg-accent/90 text-white text-xs sm:text-sm font-medium px-5 py-1.5 rounded-full tracking-wider mb-6">
        ABOUT US
      </span>
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white max-w-4xl leading-tight">
        Building Foundations,{" "}
        <span className="text-accent">Crafting Legacies.</span>
      </h1>
    </motion.div>
  </div>
);

// ─── Our Story ───────────────────────────────────────────────────────────────
const OurStory = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left — Text */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="flex flex-col gap-6"
      >
        <motion.span
          variants={fadeUp}
          className="text-accent font-semibold tracking-widest text-sm uppercase"
        >
          Our Story
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-dark leading-snug"
        >
          Three Decades of Shaping{" "}
          <span className="text-primary">Pakistan's Skyline</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="space-y-5 text-dark/70 leading-relaxed text-sm md:text-base">
          <p>
            Founded in 1994, Mian &amp; Sons began as a small family-run
            contracting business in the heart of Lahore. What started with
            residential renovations has grown into one of Pakistan's most
            trusted names in commercial and luxury construction.
          </p>
          <p>
            Over <span className="font-mono font-semibold text-dark">30+</span>{" "}
            years and <span className="font-mono font-semibold text-dark">500+</span>{" "}
            successful projects later, our commitment to quality craftsmanship,
            on-time delivery, and transparent communication remains the
            cornerstone of everything we build.
          </p>
          <p>
            From high-rise towers in DHA to sprawling industrial complexes, our
            portfolio speaks to a relentless pursuit of excellence — backed by a
            team of <span className="font-mono font-semibold text-dark">200+</span>{" "}
            skilled professionals.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          className="flex gap-8 mt-4 pt-6 border-t border-dark/10"
        >
          {[
            { value: "30+", label: "Years" },
            { value: "500+", label: "Projects" },
            { value: "200+", label: "Team" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-mono text-2xl md:text-3xl font-bold text-primary">
                {s.value}
              </p>
              <p className="text-xs text-dark/50 uppercase tracking-wider mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right — Overlapping Image Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="relative grid grid-cols-2 gap-4 h-[420px] md:h-[500px]"
      >
        {/* Large image */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl shadow-black/10"
        >
          <img
            src={STORY_IMAGES[0].src}
            alt={STORY_IMAGES[0].alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Top-right image */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10"
        >
          <img
            src={STORY_IMAGES[1].src}
            alt={STORY_IMAGES[1].alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Bottom-right image — overlaps slightly */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 -mt-6"
        >
          <img
            src={STORY_IMAGES[2].src}
            alt={STORY_IMAGES[2].alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ─── Our Mission ─────────────────────────────────────────────────────────────
const OurMission = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-dark/5">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.span
          variants={fadeUp}
          className="text-accent font-semibold tracking-widest text-sm uppercase"
        >
          Our Mission
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-dark mt-3 leading-snug"
        >
          To construct with <span className="text-primary">Integrity</span>, deliver with <span className="text-accent">Excellence</span>, and build <span className="text-primary">Lasting Trust</span>.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-dark/70 leading-relaxed text-base md:text-lg"
        >
          We don't just build structures; we build the future. Our core mission is to empower communities through sustainable, innovative, and state-of-the-art construction, creating enduring legacies that stand the test of time.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// ─── Core Values ─────────────────────────────────────────────────────────────
const VALUES = [
  { icon: Shield, title: "Uncompromising Quality", desc: "We use premium materials and enforce strict quality control at every stage." },
  { icon: Target, title: "On-Time Delivery", desc: "Precision planning guarantees that your project is completed on schedule." },
  { icon: Users, title: "Client-Centric Approach", desc: "Transparent communication ensures you are informed and confident." },
  { icon: Zap, title: "Innovation", desc: "We leverage modern technology and sustainable practices for future-proof builds." }
];

const CoreValues = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {VALUES.map((val, i) => (
        <motion.div
          key={val.title}
          variants={fadeUp}
          custom={i}
          className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 border border-dark/5 text-center sm:text-left flex flex-col items-center sm:items-start"
        >
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
            <val.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-dark mb-3">{val.title}</h3>
          <p className="text-dark/60 text-sm leading-relaxed">{val.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

// ─── Leadership Team ─────────────────────────────────────────────────────────
const LeadershipTeam = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-900">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="text-center mb-16"
      >
        <motion.span
          variants={fadeUp}
          className="text-accent font-semibold tracking-widest text-sm uppercase"
        >
          Leadership
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-white mt-3"
        >
          The People Behind the Projects
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={member.id}
            variants={fadeUp}
            custom={i}
            className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 bg-white/5 backdrop-blur-md border border-white/10"
          >
            {/* Portrait */}
            <div className="h-80 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Info */}
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-white/60 mt-0.5">{member.title}</p>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-accent text-white/70 hover:text-white transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── About Page ──────────────────────────────────────────────────────────────
const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <MiniHero />
    <OurStory />
    <OurMission />
    <CoreValues />
    <LeadershipTeam />
  </motion.div>
);

export default About;
