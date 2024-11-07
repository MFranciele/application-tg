import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Application TG</h1>
      <nav>
        <ul>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Docs</a></li>
          <li><a href="https://github.com/MFranciele?tab=repositories">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;