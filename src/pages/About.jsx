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
          A Legacy Built on{" "}
          <span className="text-primary">Family Integrity</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="space-y-5 text-dark/70 leading-relaxed text-sm md:text-base">
          <p>
            Our company is built on the foundation of <strong>"Family Integrity."</strong> Our
            skills were passed down from our father, Haji Muhammad Aziz (Late), who taught us that
            honesty in material and precision in work are the only ways to build a name.
          </p>
          <p>
            Today, with <span className="font-mono font-semibold text-dark">26+</span> years of
            on-ground expertise and <span className="font-mono font-semibold text-dark">200+</span>{" "}
            luxury projects completed, we continue this legacy by blending traditional values with
            modern engineering. We don't just build houses — we construct legacies.
          </p>
          <p>
            Our unique guarantee is <strong>100% adherence to architectural drawings</strong>,
            utilizing a permanent team that has been with us for over 25 years to ensure every
            brick is laid with mastered skill and every structure stands the test of time.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          className="flex gap-8 mt-4 pt-6 border-t border-dark/10"
        >
          {[
            { value: "26+", label: "Years" },
            { value: "200+", label: "Projects" },
            { value: "100%", label: "Permanent Staff" },
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

// ─── The Team ────────────────────────────────────────────────────────────────
const TheTeam = () => (
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
          Our Team
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-dark mt-3 leading-snug"
        >
          A <span className="text-primary">Permanent</span> Team, Not Daily Wagers
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-dark/70 leading-relaxed text-base md:text-lg"
        >
          Unlike companies that hire daily wagers, we boast a permanent staff that has been
          working with us for over two decades. They understand our standards of "Leveling"
          and "Strength" better than anyone else in the market. This consistency is what
          delivers our signature quality on every project.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// ─── Guarantees ──────────────────────────────────────────────────────────────
const Guarantees = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
      className="text-center mb-12"
    >
      <motion.span
        variants={fadeUp}
        className="text-accent font-semibold tracking-widest text-sm uppercase"
      >
        Our Guarantee
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-dark mt-3"
      >
        We Stand Behind Every Brick
      </motion.h2>
    </motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[
        {
          icon: Shield,
          title: "Structural Warranty",
          desc: "We offer a structural warranty and continued support. Even after you move in, we remain available for any technical adjustments.",
        },
        {
          icon: Target,
          title: "100% Drawing Accuracy",
          desc: "We guarantee complete adherence to your architect's drawings. Every measurement is cross-checked against the map.",
        },
        {
          icon: Users,
          title: "Transparent Communication",
          desc: "From quotation to handover, we keep you informed at every stage. No hidden costs, no surprises.",
        },
        {
          icon: Zap,
          title: "Premium Materials",
          desc: "A-Class bricks, 60-Grade steel, high-pressure PPRC pipes, and 99.9% pure copper wiring — we never compromise.",
        },
      ].map((val, i) => (
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

// ─── Core Values ─────────────────────────────────────────────────────────────
const CoreValues = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 border-t border-dark/5">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="text-center mb-14"
      >
        <motion.span
          variants={fadeUp}
          className="text-accent font-semibold tracking-widest text-sm uppercase"
        >
          Core Values
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-dark mt-3"
        >
          What Drives Us Every Day
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid sm:grid-cols-2 gap-8"
      >
        {[
          {
            title: "Transparency",
            desc: "No hidden costs, no surprises. We provide detailed quotations and keep you informed at every stage of your project.",
            emoji: "🔍",
          },
          {
            title: "Generational Expertise",
            desc: "Skills passed down from our founder — honesty in material and precision in work are the only ways to build a name.",
            emoji: "👨‍👦",
          },
          {
            title: "Technical Precision",
            desc: "100% adherence to architectural drawings. Every step is cross-checked against the architect's map for structural accuracy.",
            emoji: "📐",
          },
          {
            title: "Quality is Our Motto",
            desc: "We use only premium, tested materials and never cut corners. Our work speaks for itself across 200+ completed luxury homes.",
            emoji: "🏆",
          },
        ].map((val, i) => (
          <motion.div
            key={val.title}
            variants={fadeUp}
            custom={i}
            className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 border border-dark/5 flex gap-5 items-start hover:-translate-y-1 transition-transform duration-300"
          >
            <span className="text-3xl shrink-0 mt-1">{val.emoji}</span>
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">{val.title}</h3>
              <p className="text-dark/60 text-sm leading-relaxed">{val.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
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
    <TheTeam />
    <Guarantees />
    <CoreValues />
    <LeadershipTeam />
  </motion.div>
);

export default About;
