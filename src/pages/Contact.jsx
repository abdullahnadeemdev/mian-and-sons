import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PROJECT_TYPES, CONTACT_INFO } from "../constants";
import emailjs from "@emailjs/browser";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Reusable Input ──────────────────────────────────────────────────────────
const inputBase =
  "w-full bg-transparent border-b border-dark/20 py-3 px-1 text-dark placeholder:text-dark/40 transition-all duration-300 outline-none focus:border-accent focus:ring-0 text-sm md:text-base font-sans";

// ─── Contact Form ────────────────────────────────────────────────────────────
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailMsg = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      projectType: form.projectType,
      details: form.details,
    };

    emailjs
      .send("service_7ok4ff6", "template_ozlfqhw", emailMsg, {
        publicKey: "BSYXdsD9__MxCDP4C",
      })
      .then(
        (response) => {
          alert("Email sent! We'll be in touch shortly.");
          console.log("SUCESS", response.status, response.text);
        },
        (error) => {
          alert("Email failed.");
          console.log("Error", response.status, response.text);
        },
      );

    setForm({ name: "", email: "", phone: "", projectType: "", details: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="text-xs font-semibold text-dark/50 uppercase tracking-wider"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Muhammad Ahmed"
          value={form.name}
          onChange={handleChange}
          className={inputBase}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="text-xs font-semibold text-dark/50 uppercase tracking-wider"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          className={inputBase}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="text-xs font-semibold text-dark/50 uppercase tracking-wider"
        >
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+92 300 1234567"
          value={form.phone}
          onChange={handleChange}
          className={inputBase}
        />
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="text-xs font-semibold text-dark/50 uppercase tracking-wider"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          value={form.projectType}
          onChange={handleChange}
          className={`${inputBase} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_0.5rem_center]`}
        >
          <option value="" disabled>
            Select project type
          </option>
          {PROJECT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Details */}
      <div>
        <label
          htmlFor="details"
          className="text-xs font-semibold text-dark/50 uppercase tracking-wider"
        >
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us about your project timeline, budget, and requirements…"
          value={form.details}
          onChange={handleChange}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full mt-2 py-4 bg-secondary hover:bg-accent text-white font-bold text-base md:text-lg rounded-2xl shadow-xl shadow-accent/20 transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Request Free Consultation
      </motion.button>
    </form>
  );
};

// ─── Contact Info Card ───────────────────────────────────────────────────────
const INFO_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: CONTACT_INFO.address,
    href: null,
  },
];

const ContactSidebar = () => (
  <div className="flex flex-col gap-10">
    {/* Info Items */}
    <div className="flex flex-col gap-6">
      {INFO_ITEMS.map((item, i) => (
        <motion.div
          key={item.label}
          variants={fadeUp}
          custom={i}
          className="flex items-start gap-4"
        >
          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <item.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-dark/50 uppercase tracking-wider">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="text-dark font-medium hover:text-secondary transition-colors text-sm md:text-base"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-dark font-medium text-sm md:text-base">
                {item.value}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Google Maps Embed */}
    <motion.div
      variants={fadeUp}
      custom={3}
      className="rounded-2xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
    >
      <iframe
        title="Mian & Sons Location — Lahore, Pakistan"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54411.94584802051!2d74.2685736!3d31.4696838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919044a7b1c2c6d%3A0x7e9e3c6f14c39e1a!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
        width="100%"
        height="280"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </motion.div>
  </div>
);

// ─── Contact Page ────────────────────────────────────────────────────────────
const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Header */}
    <section className="pt-28 pb-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-2xl"
      >
        <motion.span
          variants={fadeUp}
          className="text-secondary font-semibold tracking-widest text-sm uppercase"
        >
          Contact Us
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark mt-3 leading-tight"
        >
          Let's Discuss Your <span className="text-primary">Next Project.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-dark/60 mt-4 text-sm md:text-base max-w-lg leading-relaxed"
        >
          Fill out the form below and our team will reach out within 24 hours to
          schedule your free consultation.
        </motion.p>
      </motion.div>
    </section>

    {/* Two-Column Layout */}
    <section className="pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="grid lg:grid-cols-5 gap-16"
      >
        {/* Form — 3 cols */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-3 bg-white rounded-2xl shadow-2xl shadow-black/10 p-8 md:p-10"
        >
          <ContactForm />
        </motion.div>

        {/* Sidebar — 2 cols */}
        <motion.div variants={fadeUp} custom={1} className="lg:col-span-2">
          <ContactSidebar />
        </motion.div>
      </motion.div>
    </section>
  </motion.div>
);

export default Contact;
