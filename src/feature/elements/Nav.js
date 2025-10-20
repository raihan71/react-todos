import { ToggleButton } from "@react-spectrum/button";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "../components/Link";

const Nav = ({ isDark, handleDark }) => {
  return (
    <nav data-testid="nav" className="container-fluid" aria-label="Navigation">
      <ul>
        <li>
          <img
            data-cy="logo"
            src="/logo192.png"
            alt="React Logo"
            style={{ height: 40 }}
          />
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/component">Components</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <ToggleButton
            UNSAFE_style={{ cursor: "pointer" }}
            isEmphasized
            isSelected={isDark}
            onChange={() => handleDark(!isDark)}
            aria-label="Dark Mode"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </ToggleButton>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isDark: PropTypes.bool.isRequired,
  handleDark: PropTypes.func.isRequired,
};

export default Nav;
