import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-8 font-bold text-white text-xl ">
      <NavLink
        to="/register"
        className="cursor-pointer hover:scale-105 transition-all hover:underline"
      >
        Cadastre-se
      </NavLink>
      <NavLink
        to="/login"
        className="cursor-pointer hover:scale-105 transition-all hover:underline"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
