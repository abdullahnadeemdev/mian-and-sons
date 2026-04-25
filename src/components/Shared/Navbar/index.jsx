import { logo } from "../../../assets/images";
import { Menu, Close } from "../../../assets/icons";
import Button from "../Button";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/portfolio" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-auto max-w-360 sticky top-0 z-100 ">
      {/* --- DESKTOP NAVBAR --- */}
      <div
        className={` hidden sm:flex items-center rounded-2xl justify-between px-6 py-4 transition-colors duration-300 ${
          color
            ? "bg-dark text-background shadow-md"
            : "bg-background text-black"
        }`}
      >
        <Link to="/" className="h-12 w-20 flex items-center justify-center">
          <img
            src={logo}
            alt="Mian & Sons Construction Logo"
            className={`h-full w-full object-contain  transition-all duration-300 ${
              color ? "bg-white scale-150 rounded-md shadow-sm" : "scale-180"
            }`}
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-3 text-sm lg:text-base lg:gap-6 font-semibold font-sans">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="hover:text-secondary cursor-pointer transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact">
                <Button>Get a Quote</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* --- MOBILE NAVBAR (COLLAPSED) --- */}
      {!menu && (
        <div
          className={`sticky top-0 z- flex items-center justify-between px-6 py-4 sm:hidden transition-colors duration-300 ${
            color
              ? "bg-dark text-background shadow-md"
              : "bg-background text-black"
          }`}
        >
          <Link to="/" className="h-8 w-12 flex items-center justify-center">
            <img
              src={logo}
              alt="Mian & Sons Construction Logo"
              // Applied the exact same conditional white background logic here
              className={`h-full w-full object-contain scale-[2.2] transition-all duration-300 ${
                color ? "bg-white p-1 rounded-sm shadow-sm" : ""
              }`}
              fetchPriority="high"
              decoding="async"
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/contact">
              <Button className="px-2 py-1 text-sm">Contact</Button>
            </Link>
            <Menu className="cursor-pointer" onClick={() => setMenu(!menu)} />
          </div>
        </div>
      )}

      {/* --- MOBILE NAVBAR (EXPANDED MENU) --- */}
      {menu && (
        <nav className="fixed inset-0 z-50 bg-background flex flex-col sm:hidden">
          <Close
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setMenu(false)}
          />
          <ul className="flex flex-col h-screen justify-center text-2xl w-full gap-8 font-semibold font-sans items-center text-black">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="hover:text-secondary cursor-pointer transition-colors"
                  onClick={() => setMenu(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
