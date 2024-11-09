import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
