import "./navbar.css";
import { useContext } from "react";
import { CustomContext } from "../../Provider/Provider";

const menu = [
  { id: 1, label: "YOUR INFO" },
  { id: 2, label: "SELECT PLAN" },
  { id: 3, label: "ADD-ONS" },
  { id: 4, label: "SUMMARY" },
];

const NavBar = () => {
  // const { active, setActive } = props;
  const { active, setActive } = useContext(CustomContext);
  return (
    <div className="Navbar">
      <ul className="Navbar-menu">
        {menu.map((item) => (
          <li
            // onClick={() => setActive(item.id)}
            key={item.id}
            className={`Navbar-menu-item ${active === item.id ? "active" : ""}`}
          >
            <p className="Navbar-menu-item--number">{item.id}</p>
            <div className="Navbar-menu-item--content">
              <p className="Navbar-menu-item--content-label">STEP {item.id}</p>
              <h2 className="Navbar-menu-item--content-title">{item.label}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
