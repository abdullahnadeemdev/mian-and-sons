import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-background ">
      <Navbar />
      <div className="h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
