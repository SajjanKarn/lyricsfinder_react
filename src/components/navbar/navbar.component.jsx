import "./navbar.styles.css";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        {brand}
      </a>
    </nav>
  );
};

export default Navbar;
