import { logo } from "../../../assets/images";
import { Menu } from "../../../assets/icons";
import { Close } from "../../../assets/icons";
import Button from "../Button";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className=" items-center justify-between px-6 py-4 hidden sm:flex">
        <div className="h-12! w-20!">
          <img
            src={logo}
            alt="Mian & Sons Construction Logo"
            className="h-full w-full object-contain scale-210 "
          />
        </div>

        <nav>
          <ul className="flex gap-3 text-sm lg:text-base lg:gap-6 text-dark font-semibold font-sans items-center">
            <li className="hover:text-secondary cursor-pointer">Home</li>
            <li className="hover:text-secondary cursor-pointer">Services</li>
            <li className="hover:text-secondary cursor-pointer">Projects</li>
            <li className="hover:text-secondary cursor-pointer">About</li>
            <li className="hover:text-secondary cursor-pointer">
              <Button>Get a Quote</Button>
            </li>
          </ul>
        </nav>
      </div>

      {!menu && (
        <div className="flex items-center justify-between px-6 py-4 sm:hidden">
          <div className="h-8! w-12">
            <img
              src={logo}
              alt="Mian & Sons Construction Logo"
              className="h-full w-full object-contain scale-220 "
            />
          </div>
          <div className="flex items-center gap-2">
            <Button className={"px-2 py-1 text-sm!"}>Contact</Button>
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
          <ul className="flex flex-col h-screen justify-center text-2xl w-screen gap-6 text-dark font-semibold font-sans items-center">
            <li className="hover:text-secondary cursor-pointer">Home</li>
            <li className="hover:text-secondary cursor-pointer">Services</li>
            <li className="hover:text-secondary cursor-pointer">Projects</li>
            <li className="hover:text-secondary cursor-pointer">About</li>
            <li className="hover:text-secondary cursor-pointer"></li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
