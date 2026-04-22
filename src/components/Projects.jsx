import { projects } from "../data/portfolioData.js";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <h2>Projects & Thesis</h2>
        <p className="section-subtitle">
          A curated list of my favorite builds and research.
        </p>
      </div>
      <div className="cards-grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <div className="card-header">
              <h3>{project.title}</h3>
              <span className={`pill ${project.type === "Thesis" ? "pill-accent" : ""}`}>
                {project.type}
              </span>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
