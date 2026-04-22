import { navLinks } from "../data/portfolioData.js";

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#home">
        Samira
      </a>
      <nav className="navbar">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="side">
        <a
          href="https://github.com/sssamira/CSE391"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </div>
    </header>
  );
}
