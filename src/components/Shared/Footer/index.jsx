import { logo } from "../../../assets/images";
import { Link } from "react-router";
import {
  CONTACT_INFO_FOOTER,
  QUICK_LINKS_FOOTER,
  SERVICE_AREAS_FOOTER,
} from "../../../constants";

const Footer = () => {
  const linkClass =
    "hover:text-accent cursor-pointer transition-colors text-xs sm:text-sm lg:text-base";

  return (
    <footer className="w-full max-w-360 mx-auto">
      {/* Container */}
      <div className="flex flex-col text-xs lg:text-sm md:flex-row flex-wrap gap-10 md:gap-0 justify-between items-start px-8 md:px-12 py-12 bg-primary text-background">
        <div className="w-full md:max-w-xs flex flex-col gap-4">
          <div className="w-24 h-auto bg-background p-2 rounded-2xl mb-2 shadow-sm">
            <img
              src={logo}
              alt="Mian & Sons Construction logo"
              className="w-full h-full object-contain "
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className=" leading-relaxed">
            Quality Work is Our Motto. Building luxury homes with generational
            trust since 2000. 26+ years of uncompromising excellence in Lahore.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="w-full sm:w-auto">
          <h3 className="font-semibold text-lg lg:text-xl mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS_FOOTER.map((link) => (
              <li key={link.id}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Service Areas */}
        <div className="w-full sm:w-auto">
          <h3 className="font-semibold text-lg lg:text-xl mb-4">
            Service Areas
          </h3>
          <ul className="flex flex-col gap-3">
            {SERVICE_AREAS_FOOTER.map((area) => (
              <li key={area} className={linkClass}>
                📍 {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="w-full sm:w-auto">
          <h3 className="font-semibold text-lg lg:text-xl mb-4">
            Contact Info
          </h3>
          <ul className="flex flex-col gap-4">
            {CONTACT_INFO_FOOTER.map((item) => (
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
          reserved. | Quality Work is Our Motto
        </p>
      </div>
    </footer>
  );
};

export default Footer;
