import { PortfolioContent } from '../content/portfolio';

type HeroProps = {
  content: PortfolioContent;
};

export function Hero({ content }: HeroProps) {
  const primaryLinks = content.contact.slice(0, 2);
  const quickStats = [
    {
      value: String(content.experience.length).padStart(2, '0'),
      label: 'roles across the path'
    },
    {
      value: 'AMP centralized',
      label: 'multi-cluster metrics'
    },
    {
      value: 'CW cross-account',
      label: 'shared AWS visibility'
    }
  ];
  const signalItems = ['CI/CD', 'Cloud', 'IaC', 'Observability'];

  return (
    <section className="hero-section" id="top">
      <div className="section-shell hero-grid">
        <div className="hero-copy reveal-on-scroll">
          <p className="eyebrow">Platform &amp; Observability</p>
          <h1>{content.name}</h1>
          <p className="hero-title">{content.title}</p>
          <p className="hero-tagline">{content.tagline}</p>
          <p className="hero-support">
            From CI/CD and Kubernetes to dashboards, alerts, logs, metrics, and traces, I design
            cloud platforms that help teams move faster with clearer operational insight.
          </p>
          <div className="hero-focus-panel reveal-on-scroll reveal-delay-1">
            <p className="hero-focus-kicker">{content.heroFocus.title}</p>
            <ul className="hero-focus-list">
              {content.heroFocus.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="cta-row">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                className={`button-link ${link.emphasis === 'secondary' ? 'button-secondary' : ''}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hero-stat-grid">
            {quickStats.map((item, index) => (
              <article
                className={`hero-stat-card reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
                key={item.label}
              >
                <p className="hero-stat-value">{item.value}</p>
                <p className="hero-stat-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal-on-scroll reveal-delay-2">
          <div className="hero-card">
            <div className="hero-card-head">
              <p className="hero-card-kicker">Profile snapshot</p>
              <span className="hero-card-status">Always open to talk</span>
            </div>
            <div className="hero-image-frame">
              <img src={content.portrait.src} alt={content.portrait.alt} />
            </div>
            <div className="hero-card-caption">
              <div>
                <p className="hero-card-name">{content.name}</p>
                <p className="hero-card-role">{content.title}</p>
              </div>
              <span className="hero-card-badge">AWS • Kubernetes</span>
            </div>
            <div className="signal-grid">
              {signalItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="hero-float-card">
            <p className="hero-float-label">Observability-first</p>
            <p className="hero-float-value">
              Monitoring, alerting, and tracing designed to make production behavior easier to
              understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
