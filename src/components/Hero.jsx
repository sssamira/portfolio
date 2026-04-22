import { hero } from "../data/portfolioData.js";

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-text">
        <p className="eyebrow">{hero.greeting}</p>
        <h1>
          {hero.other_name}
          <span className="accent">.</span>
        </h1>
        <p className="tagline">
          Welcome to{" "}
          <span className="accent">{hero.name}'s</span>{" "}
          {hero.tagline.join(" ")}
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View Projects
          </a>
          <a className="button ghost" href="mailto:samira.akter1@e.bracu.ac.bd">
            Contact Me
          </a>
        </div>
      </div>
      <div className="portrait">
        <img src="/female-user.svg" alt="Portrait of Samira" />
      </div>
    </section>
  );
}
