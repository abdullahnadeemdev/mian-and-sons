import { logo } from "../../../assets/images";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="h-12! w-20!">
        <img
          src={logo}
          alt="Mian & Sons Construction Logo"
          className="h-full w-full object-contain scale-210 "
        />
      </div>

      <nav>
        <ul className="flex gap-6 text-dark font-semibold font-sans">
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
  );
};

export default Navbar;
