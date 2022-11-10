import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
const Nav = () => {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={false}
        className="bg-blue-600 fixed z-10 w-full"
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={require("../assets/TFM_WHITE.png")}
            className="mr-3 h-6 sm:h-11"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">
            Ngaos The Farmer's Market
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/" className="text-white text-[22px]">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/about" className="text-white text-[22px]">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/product" className="text-white text-[22px]">
              Product
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/contact" className="text-white text-[22px]">
              Contact
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/newsroom" className="text-white text-[22px]">
              Newsroom
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
