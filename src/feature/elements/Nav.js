import React from 'react';
import { ToggleButton } from '@react-spectrum/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Link from '../components/Link';

const Nav = ({ isDark, handleDark }) => {

  return (
    <nav data-testid="nav" className="container-fluid" aria-label="Navigation">
      <ul>
        <li>
          <Link href="/"><strong>ReactTodos</strong></Link>
        </li>
      </ul>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/component">Components</Link></li>
        <li><Link href="/about">About</Link></li>
        <li>
          <ToggleButton
            UNSAFE_style={{ cursor: 'pointer' }}
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
}

export default Nav;
