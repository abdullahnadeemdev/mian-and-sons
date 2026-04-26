import { Email, Phone, Location } from "./assets/icons";
import {
  Building2,
  HardHat,
  Wrench,
  Ruler,
  PaintBucket,
  Home,
  Hammer,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
// ─── Team Members (About Page) ───────────────────────────────────────────────
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Haji Muhammad Aziz (Late)",
    title: "Founder & Inspiration",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&auto=format,compress&q=75",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Nadeem Aziz",
    title: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=faces&auto=format,compress&q=75",
    linkedin: "#",
  },
  {
    id: 3,
    name: "M. Naeem Aziz",
    title: "Director of Operations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=faces&auto=format,compress&q=75",
    linkedin: "#",
  },
];

// ─── Project Type Dropdown Options (Contact Page) ────────────────────────────
export const PROJECT_TYPES = [
  { value: "grey_structure", label: "Premium Grey Structure" },
  { value: "spanish", label: "Spanish Home Construction" },
  { value: "residential", label: "Luxury Residential Home" },
  { value: "interior_exterior", label: "Interior & Exterior Finishing" },
  {
    value: "consultation",
    label: "Technical Consultation & Project Management",
  },
  { value: "maintenance", label: "Maintenance & Repairs" },
  { value: "renovation", label: "Renovation & Remodeling" },
  { value: "other", label: "Other" },
];

// ─── Contact Information ─────────────────────────────────────────────────────
export const CONTACT_INFO = {
  phone: "+92 321-8432834",
  email: "nadeemaziz1971@gmail.com",
  address: "Lahore, Pakistan",
};

// ─── About Page Story Images ─────────────────────────────────────────────────
export const STORY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format,compress&q=75",
    alt: "Construction site with cranes at golden hour",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format,compress&q=75",
    alt: "Modern building under construction",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&auto=format,compress&q=75",
    alt: "Completed architectural masterpiece",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Tariq Mahmood",
    star: "★★★★★",
    imgP: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format,compress&q=75",
    text: "Mian & Sons delivered beyond our expectations. The luxury villa they built for us is an absolute masterpiece. Their attention to detail and structural integrity is unmatched. Truly a premium experience from start to finish.",
  },
  {
    id: 2,
    name: "Ayesha Khan",
    review: 5,
    star: "★★★★★",
    imgP: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&auto=format,compress&q=75",
    text: "Living overseas, it is incredibly hard to trust a contractor back home. Mian & Sons gave me complete peace of mind with weekly video updates. The modern home they constructed for my family is simply stunning.",
  },
  {
    id: 3,
    name: "Usman Ali",
    review: 4,
    star: "★★★★",
    imgP: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format,compress&q=75",

    text: "Great experience working with them on our commercial plaza project. They were completely transparent about the costs and used only premium materials. There was a slight weather delay, but the final result was fantastic.",
  },
  {
    id: 4,
    name: "Fatima Bilal",
    review: 5,
    star: "★★★★",
    imgP: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&auto=format,compress&q=75",
    text: "Extremely professional team! From the initial architectural design phase to the final handover, the entire process was seamless. The interior finishing of our new home is exactly as we dreamed. Highly recommended!",
  },
  {
    id: 5,
    name: "Saad Qureshi",
    review: 5,
    star: "★★★★★",
    imgP: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format,compress&q=75",

    text: "I hired them for a major renovation of our 20-year-old family home. They completely transformed the space into a modern, energy-efficient house while preserving its original charm. Top-tier service and brilliant craftsmanship.",
  },
  {
    id: 6,
    name: "Zainab Tariq",
    review: 4,
    star: "★★★★★",
    imgP: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&auto=format,compress&q=75",
    text: "The quality of their grey structure construction is incredibly solid, and their interior design team has exquisite taste. The project manager was very responsive to our last-minute changes. Very satisfied with our new residence.",
  },
];

// ─── Portfolio Projects ──────────────────────────────────────────────────────
export const PORTFOLIO_PROJECTS = [
  // Grey Structure
  {
    id: 1,
    title: "10 Marla Premium Grey Structure",
    location: "DHA Phase 6, Lahore",
    category: "Grey Structure",
    area: "10 Marla",
    description:
      "Complete grey structure with 100% adherence to architectural drawings, 60-grade branded steel, and A-class bricks.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  {
    id: 2,
    title: "1 Kanal Double-Storey Grey Structure",
    location: "Bahria Town, Lahore",
    category: "Grey Structure",
    area: "1 Kanal",
    description:
      "Earthquake-resistant grey structure with ASTM-compliant steel reinforcement and precision foundation leveling.",
    image:
      "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  // Spanish Homes
  {
    id: 3,
    title: "Luxury Spanish Villa — Terracotta Elegance",
    location: "DHA Phase 5, Lahore",
    category: "Spanish Homes",
    area: "1 Kanal",
    description:
      "A stunning Spanish-inspired villa with arched doorways, terracotta roofing, and premium interior finishing.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  {
    id: 4,
    title: "Mediterranean-Style Spanish Residence",
    location: "DHA Phase 8, Lahore",
    category: "Spanish Homes",
    area: "10 Marla",
    description:
      "Warm stucco walls, wrought-iron accents, and lush courtyard gardens — authentic Spanish living in Lahore.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  // Residential Homes
  {
    id: 5,
    title: "Contemporary Family Residence",
    location: "Johar Town, Lahore",
    category: "Residential Homes",
    area: "10 Marla",
    description:
      "A modern, clean-lined family home featuring open-plan living, premium flooring, and smart lighting systems.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  {
    id: 6,
    title: "Classic Double-Storey Family Home",
    location: "Gulberg III, Lahore",
    category: "Residential Homes",
    area: "1 Kanal",
    description:
      "Timeless design with spacious bedrooms, marble finishing, and a landscaped front lawn.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  {
    id: 7,
    title: "Modern Minimalist Residence",
    location: "Bahria Orchard, Lahore",
    category: "Residential Homes",
    area: "5 Marla",
    description:
      "Compact luxury — efficient space planning with high-end finishes and an energy-efficient design.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  // Interior & Exterior Finishing
  {
    id: 8,
    title: "Complete Interior Transformation",
    location: "DHA Phase 6, Lahore",
    category: "Interior & Exterior",
    area: "10 Marla",
    description:
      "Full luxury interior finishing with imported tiles, false ceiling, woodwork, and designer paint.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  {
    id: 9,
    title: "Premium Exterior Elevation & Cladding",
    location: "Bahria Town, Lahore",
    category: "Interior & Exterior",
    area: "1 Kanal",
    description:
      "Modern elevation design with stone cladding, weather-resistant paint, and architectural lighting.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  // Renovation & Maintenance
  {
    id: 10,
    title: "Complete House Renovation",
    location: "Model Town, Lahore",
    category: "Renovation",
    area: "10 Marla",
    description:
      "Full structural renovation including plumbing, electrical rewiring, and modern finishing upgrades.",
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  {
    id: 11,
    title: "Kitchen & Bathroom Remodeling",
    location: "Johar Town, Lahore",
    category: "Renovation",
    area: "5 Marla",
    description:
      "Premium kitchen cabinetry, modern fixtures, and complete bathroom overhaul with imported fittings.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
  {
    id: 12,
    title: "Annual Maintenance & Paint — DHA Residence",
    location: "DHA Phase 9, Lahore",
    category: "Maintenance",
    area: "1 Kanal",
    description:
      "Yearly maintenance package including fresh paint, plumbing checks, electrical inspection, and minor repairs.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&auto=format,compress&q=75",
  },
];

// ─── Portfolio Filter Categories ─────────────────────────────────────────────
export const PORTFOLIO_CATEGORIES = [
  "All",
  "Grey Structure",
  "Spanish Homes",
  "Residential Homes",
  "Interior & Exterior",
  "Renovation",
  "Maintenance",
];

// ─── Service Areas ───────────────────────────────────────────────────────────
export const SERVICE_AREAS = [
  "DHA (All Phases)",
  "Bahria Town",
  "Bahria Orchard",
  "Gulberg",
  "Johar Town",
  "Model Town",
  "Garden Town",
];

export const QUICK_LINKS_FOOTER = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "Services", to: "/services" },
  { id: 3, label: "Portfolio", to: "/portfolio" },
  { id: 4, label: "About Us", to: "/about" },
  { id: 5, label: "Contact", to: "/contact" },
];

export const CONTACT_INFO_FOOTER = [
  { id: 1, icon: Location, text: "Lahore, Pakistan" },
  { id: 2, icon: Phone, text: "+92 321-8432834" },
  { id: 3, icon: Email, text: "nadeemaziz1971@gmail.com" },
];

export const SERVICE_AREAS_FOOTER = [
  "DHA (All Phases)",
  "Bahria Town",
  "Bahria Orchard",
  "Gulberg",
  "Johar Town",
];

export const SERVICES_PREVIEW = [
  {
    title: "Premium Grey Structure",
    desc: "100% accurate excavation and precise foundation leveling with A-Class bricks and 60-Grade branded steel.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format,compress&q=75",
  },
  {
    title: "Luxury Interior & Exterior",
    desc: "High-end finishing with imported materials, false ceilings, designer woodwork, and modern elevation.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop&auto=format,compress&q=75",
  },
  {
    title: "Consultation & Management",
    desc: "Technical consultation and transparent project management from blueprint to handover.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format,compress&q=75",
  },
];

export const SERVICES = [
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
export const MATERIALS = [
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

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Call Us",
    desc: "Contact us via phone to share your requirements and house plan. We listen to your vision and understand your needs.",
  },
  {
    step: "02",
    title: "Get a Transparent Quote",
    desc: "We provide a detailed, transparent quotation based on your specific requirements. No hidden costs.",
  },
  {
    step: "03",
    title: "In-Person Meeting",
    desc: "We schedule an in-person meeting to finalize details, review architectural drawings, and align on the timeline.",
  },
  {
    step: "04",
    title: "Build & Handover",
    desc: "We begin construction with 100% structural accuracy and hand over your dream home with a structural warranty.",
  },
];
