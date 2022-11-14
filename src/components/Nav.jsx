import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
const Nav = () => {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={false}
        className="fixed z-10 w-full"
        style={{ backgroundColor: "#3B74CE" }}
      >
        <Navbar.Brand>
          <Link to="/">
            <img
              src={require("../assets/TFM_WHITE.png")}
              className="mr-3 h-6 sm:h-8"
              alt="Ngaos"
            />
          </Link>
          <span className="self-center whitespace-nowrap  minsm3:text-xl minsm1:text-[11px] minsm2:text-[14px] font-semibold md:text-[15px] xl:text-[18px] dark:text-white text-white">
            <Link to="/">Ngaos The Farmer's Market</Link>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="bg-slate-200" />
        <Navbar.Collapse>
          <Navbar.Link>
            <Link
              to="/"
              className="text-white text-[18px] hover:text-slate-300"
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              to="/about"
              className="text-white text-[18px] hover:text-slate-300"
            >
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              to="/product"
              className="text-white text-[18px] hover:text-slate-300"
            >
              Product
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              to="/contact"
              className="text-white text-[18px] hover:text-slate-300"
            >
              Contact
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              to="/newsroom"
              className="text-white text-[18px] hover:text-slate-300"
            >
              Newsroom
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
