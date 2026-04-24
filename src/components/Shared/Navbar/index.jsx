import { logo } from "../../../assets/images";
import { Menu } from "../../../assets/icons";
import { Close } from "../../../assets/icons";
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
    <>
      <div
        className={`sticky top-0 items-center justify-between px-6 py-4 hidden ${color ? "bg-dark text-background" : "bg-background text-black"} sm:flex z-100`}
      >
        <Link to="/" className="h-12! w-20!">
          <img
            src={logo}
            alt="Mian & Sons Construction Logo"
            className="h-full w-full object-contain scale-210 "
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        <nav>
          <ul className="flex gap-3 text-sm lg:text-base lg:gap-6  font-semibold font-sans items-center">
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

      {!menu && (
        <div className="flex items-center justify-between px-6 py-4 sm:hidden">
          <Link to="/" className="h-8! w-12">
            <img
              src={logo}
              alt="Mian & Sons Construction Logo"
              className="h-full w-full object-contain scale-220 "
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/contact">
              <Button className={"px-2 py-1 text-sm!"}>Contact</Button>
            </Link>
            <Menu onClick={() => setMenu(!menu)} />
          </div>
        </div>
      )}

      {menu && (
        <nav className="bg-background flex flex-col sm:hidden">
          <Close
            className={" absolute self-end mt-2 mr-2"}
            onClick={() => setMenu(!menu)}
          />
          <ul className="flex flex-col h-screen justify-center text-2xl w-screen gap-6 font-semibold font-sans items-center">
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
    </>
  );
};

export default Navbar;
