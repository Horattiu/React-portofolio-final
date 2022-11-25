import NavLinks from "./NavLinks";
import "./navbar.css";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <h1>horatiu</h1>
        </div>
        <NavLinks />
      </nav>
    </>
  );
};

export default Navigation;
