import { education } from "../data/portfolioData.js";

export default function Academic() {
  return (
    <section id="academic" className="section">
      <div className="section-title">
        <h2>Academic</h2>
        <p className="section-subtitle">
          A quick snapshot of my education journey so far.
        </p>
      </div>
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Degree</th>
              <th>Institution</th>
            </tr>
          </thead>
          <tbody>
            {education.map((item) => (
              <tr key={`${item.degree}-${item.institution}`}>
                <td>{item.degree}</td>
                <td>{item.institution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
