import { skills } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-title">
        <h2>Skills</h2>
        <p className="section-subtitle">
          Tools and languages I use most often, plus my comfort level.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-header">
              <img src={skill.icon} alt={`${skill.name} icon`} />
              <div>
                <h3>{skill.name}</h3>
                <p className="muted">{skill.level}</p>
              </div>
            </div>
            <div className="skill-bar">
              <span style={{ width: `${skill.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
