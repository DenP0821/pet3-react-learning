import { Link } from "react-scroll";
import "./Nav.css";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
  const items = [
    "home",
    "about",
    "skills",
    "services",
    "portfolio",
    "clients",
    "contact",
  ];
  return (
    <nav className={isMenuOpen ? "nav active" : "nav"}>
      <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        {items.map((item, index) => (
          <Link
            to={item}
            key={index}
            className="nav-link"
            onClick={handleMenuClick}
            smooth={true}
            duration={100}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
