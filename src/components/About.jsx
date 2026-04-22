import { aboutParagraphs } from "../data/portfolioData.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <h2>About Me</h2>
        <p className="section-subtitle">
          Curiosity, creativity, and a love for building delightful experiences.
        </p>
      </div>
      <div className="section-content">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
