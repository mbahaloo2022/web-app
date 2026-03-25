import { ResumeData } from '@/lib/api';

type Props = {
  data: ResumeData;
};

export function ResumeView({ data }: Props) {
  return (
    <div className="resume-shell">
      <section className="hero card">
        <p className="badge">Licensed Psychologist</p>
        <h1>{data.hero.name}</h1>
        <h2>{data.hero.title}</h2>
        <p>{data.hero.summary}</p>
        <div className="hero-meta">
          <span>📍 {data.hero.location}</span>
          <span>🧠 {data.hero.yearsOfPractice}+ years experience</span>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Core Expertise</h3>
          <ul>
            {data.expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Education</h3>
          <ul>
            {data.education.map((entry) => (
              <li key={`${entry.degree}-${entry.year}`}>
                <strong>{entry.degree}</strong>
                <span>{entry.school}</span>
                <em>{entry.year}</em>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <h3>Professional Experience</h3>
        <div className="timeline">
          {data.experience.map((job) => (
            <div key={`${job.role}-${job.period}`} className="timeline-item">
              <header>
                <h4>{job.role}</h4>
                <span>{job.company}</span>
                <em>{job.period}</em>
              </header>
              <ul>
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Certifications</h3>
          <ul>
            {data.certifications.map((certificate) => (
              <li key={certificate}>{certificate}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Contact</h3>
          <p>Email: {data.contact.email}</p>
          <p>Phone: {data.contact.phone}</p>
        </article>
      </section>
    </div>
  );
}
