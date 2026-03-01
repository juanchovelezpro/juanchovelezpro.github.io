type ImpactSectionProps = {
  highlights: string[];
};

export function ImpactSection({ highlights }: ImpactSectionProps) {
  return (
    <section className="content-section" id="impact">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Impact</p>
            <h2>What this portfolio is designed to communicate.</h2>
          </div>
          <p className="section-caption">
            A concise view of the outcomes and operating habits that define the work.
          </p>
        </div>
        <div className="impact-grid">
          {highlights.map((highlight, index) => (
            <article
              className={`impact-card reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
              key={highlight}
            >
              <span className="impact-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p>{highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
