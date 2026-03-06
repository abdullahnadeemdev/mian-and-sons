import { logo } from "../../../assets/images";
import { Menu } from "../../../assets/icons";
import Button from "../Button";

const Navbar = () => {
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

      <div className="flex items-center justify-between px-6 py-4 ">
        <div className="h-8! w-12">
          <img
            src={logo}
            alt="Mian & Sons Construction Logo"
            className="h-full w-full object-contain scale-270 "
          />
        </div>
        <div className="flex items-center gap-2">
          <Button className={"px-2 py-1 text-sm!"}>Contact</Button>
          <Menu />
        </div>

        <nav className="hidden">
          <ul className="flex gap-3 text-sm lg:text-base lg:gap-6 text-dark font-semibold font-sans items-center">
            <li className="hover:text-secondary cursor-pointer">Home</li>
            <li className="hover:text-secondary cursor-pointer">Services</li>
            <li className="hover:text-secondary cursor-pointer">Projects</li>
            <li className="hover:text-secondary cursor-pointer">About</li>
            <li className="hover:text-secondary cursor-pointer"></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
