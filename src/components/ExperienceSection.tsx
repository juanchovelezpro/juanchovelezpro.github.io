import { useState } from 'react';
import { ExperienceItem } from '../content/portfolio';

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? items.length - 1 : currentIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === items.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <section className="content-section" id="experience">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Recent DevOps and platform work.</h2>
          </div>
          <p className="section-caption">
            A clearer promotion path across testing, platform engineering, and production-grade
            DevOps delivery.
          </p>
        </div>
        <div className="experience-shell reveal-on-scroll">
          <div className="experience-nav" role="tablist" aria-label="Experience timeline">
            {items.map((item, index) => (
              <button
                key={`${item.company}-${item.role}`}
                type="button"
                className={`experience-tab ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls={`experience-panel-${index}`}
                id={`experience-tab-${index}`}
              >
                <span className="experience-tab-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="experience-tab-copy">
                  <strong>{item.role}</strong>
                  <span>{item.company}</span>
                  <span>
                    {item.start} - {item.end}
                  </span>
                </span>
              </button>
            ))}
          </div>
          <article
            className="experience-stage reveal-on-scroll reveal-delay-1"
            role="tabpanel"
            id={`experience-panel-${activeIndex}`}
            aria-labelledby={`experience-tab-${activeIndex}`}
          >
            <div className="experience-stage-head">
              <div>
                <p className="timeline-dates">
                  {activeItem.start} - {activeItem.end}
                </p>
                <h3>{activeItem.role}</h3>
                <p className="timeline-company">{activeItem.company}</p>
              </div>
              <div className="experience-controls" aria-label="Experience navigation">
                <button type="button" className="experience-arrow" onClick={goToPrevious}>
                  Prev
                </button>
                <span className="experience-position">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                <button type="button" className="experience-arrow" onClick={goToNext}>
                  Next
                </button>
              </div>
            </div>
            <div className="experience-stage-body">
              <p>{activeItem.summary}</p>
              <ul className="check-list">
                {activeItem.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <div className="tag-list">
                {activeItem.tools.map((tool) => (
                  <span className="tag" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
