type AboutProps = {
  summary: string;
  certifications: string[];
};

export function About({ summary, certifications }: AboutProps) {
  const focusAreas = [
    {
      title: 'Automation',
      detail: 'Repeatable delivery and infrastructure patterns.'
    },
    {
      title: 'Observability',
      detail: 'Better signal quality across metrics, logs, and traces.'
    },
    {
      title: 'Enablement',
      detail: 'Platform systems that improve confidence and handoffs.'
    }
  ];
  const strengths = ['Communication', 'Leadership', 'Teamwork', 'Adaptability'];

  return (
    <section className="content-section" id="about">
      <div className="section-shell about-grid">
        <div className="section-intro reveal-on-scroll">
          <p className="eyebrow">About</p>
          <h2>Platform-minded engineering with a delivery-first focus.</h2>
        </div>
        <div className="about-content">
          <div className="section-panel about-panel reveal-on-scroll reveal-delay-1">
            <p className="about-lead">Cloud-native delivery with clear operational thinking.</p>
            <p className="about-summary">{summary}</p>
            <div className="about-focus-grid" aria-label="Core focus areas">
              {focusAreas.map((area) => (
                <article className="about-focus-card" key={area.title}>
                  <p className="about-focus-title">{area.title}</p>
                  <p className="about-focus-body">{area.detail}</p>
                </article>
              ))}
            </div>
            <div className="certification-section" aria-label="AWS certifications">
              <p className="certification-kicker">AWS Certifications</p>
              <div className="certification-grid">
                {certifications.map((certification) => (
                  <article className="certification-badge" key={certification}>
                    <span className="certification-mark">AWS</span>
                    <span className="certification-name">{certification}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="about-strengths" aria-label="Core strengths">
              {strengths.map((strength) => (
                <span className="about-strength" key={strength}>
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
