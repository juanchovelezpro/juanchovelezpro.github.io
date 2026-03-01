import { SkillGroup } from '../content/portfolio';

type StackSectionProps = {
  groups: SkillGroup[];
};

export function StackSection({ groups }: StackSectionProps) {
  return (
    <section className="content-section" id="stack">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Tech Stack</p>
            <h2>Core tooling across the delivery lifecycle.</h2>
          </div>
          <p className="section-caption">
            Grouped by the systems that matter most when shipping and operating production
            workloads.
          </p>
        </div>
        <div className="stack-grid">
          {groups.map((group, index) => (
            <article
              className={`stack-card reveal-on-scroll reveal-delay-${(index % 3) + 1}`}
              key={group.title}
            >
              <div className="stack-card-head">
                <h3>{group.title}</h3>
                <span className="stack-count">{String(group.items.length).padStart(2, '0')}</span>
              </div>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
