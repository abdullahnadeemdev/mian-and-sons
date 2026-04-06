import { logo } from "../../../assets/images";
import { Email, Phone, Location } from "../../../assets/icons";

const QUICK_LINKS = [
  { id: 1, label: "Portfolio", href: "#portfolio" },
  { id: 2, label: "Our Process", href: "#process" },
  { id: 3, label: "Careers", href: "#careers" },
  { id: 4, label: "Privacy Policy", href: "#privacy" },
];

const CONTACT_INFO = [
  { id: 1, icon: Location, text: "Johar Town R1" },
  { id: 2, icon: Phone, text: "+92 3218432834" },
  { id: 3, icon: Email, text: "info@miansons.com.pk" },
];

const Footer = () => {
  const linkClass =
    "hover:text-accent cursor-pointer transition-colors text-xs sm:text-sm lg:text-base";

  return (
    <footer className="w-full max-w-360">
      {/* Container */}
      <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-0 justify-between items-start px-8 md:px-12 py-12 bg-primary text-background">
        <div className="w-full md:max-w-xs flex flex-col gap-4">
          <div className="w-24 h-auto bg-background p-2 rounded-xs shadow-sm">
            <img
              src={logo}
              alt="Mian & Sons Construction logo"
              className="w-full h-full object-contain "
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-sm lg:text-base leading-relaxed">
            Pioneering the future of construction in Pakistan since 2004. We
            build for tomorrow, with the strength of today.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="w-full sm:w-auto">
          <h3 className="font-semibold text-lg lg:text-xl mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="w-full sm:w-auto">
          <h3 className="font-semibold text-lg lg:text-xl mb-4">
            Contact Info
          </h3>
          <ul className="flex flex-col gap-4">
            {CONTACT_INFO.map((item) => (
              <li key={item.id}>
                <span className={`flex items-center gap-3 ${linkClass}`}>
                  <item.icon className="w-5 h-5 shrink-0" />
                  <p>{item.text}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-dark text-center py-4 text-xs sm:text-sm text-grey">
        <p>
          © {new Date().getFullYear()} Mian & Sons Construction. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
