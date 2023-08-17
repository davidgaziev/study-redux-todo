import './Header.css';
import { ReactComponent as SunSVG } from '../../static/icons/icon-sun.svg';
import { ReactComponent as MoonSVG } from '../../static/icons/icon-moon.svg';
import { useState } from 'react';

function Header() {
  const [theme, setTheme] = useState('dark');

  const switchTheme = (theme) => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.setAttribute('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.setAttribute('theme', 'dark');
    }
  };

  return (
    <header>
      <h1>TODO</h1>

      <div className="theme-switcher">
        <button onClick={() => switchTheme(theme)}>
          {theme === 'dark' ? <SunSVG /> : <MoonSVG />}
        </button>
      </div>
    </header>
  );
}

export default Header;
