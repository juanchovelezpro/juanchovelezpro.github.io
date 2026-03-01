import { ContactLink } from '../content/portfolio';

type ContactSectionProps = {
  title: string;
  contact: ContactLink[];
  availability: string;
};

export function ContactSection({ title, contact, availability }: ContactSectionProps) {
  return (
    <section className="content-section" id="contact">
      <div className="section-shell contact-shell">
        <div className="section-intro reveal-on-scroll">
          <p className="eyebrow">Contact</p>
          <h2>Connect about DevOps, cloud, and platform engineering.</h2>
          <p>{availability}</p>
        </div>
        <div className="contact-panel reveal-on-scroll reveal-delay-1">
          <p className="contact-kicker">Preferred channels</p>
          <p className="contact-name">{title}</p>
          <p className="contact-caption">
            Open to conversations about platform systems, infrastructure automation, and cloud
            delivery.
          </p>
          <div className="contact-links">
            {contact.map((item) => (
              <a
                key={item.label}
                className="contact-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="contact-strip" aria-hidden="true">
            <span className="contact-pill">Remote collaboration</span>
            <span className="contact-pill">Cloud-native systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
