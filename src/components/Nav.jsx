import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-around font-bold p-4">
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
