import { BrandLogo } from './BrandLogo';

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  navItems: NavItem[];
  activeHref: string;
  scrollProgress: number;
};

export function Header({ navItems, activeHref, scrollProgress }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="section-shell header-shell">
        <a className="brand-mark" href="#top" aria-label="Go to top">
          <span className="brand-logo" aria-hidden="true">
            <BrandLogo />
          </span>
          <span className="brand-copy">
            <strong>Juan Camilo</strong>
            <span>Cloud &amp; Observability</span>
          </span>
        </a>
        <nav className="nav-shell" aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={item.href === activeHref ? 'is-active' : undefined}
                  href={item.href}
                  aria-current={item.href === activeHref ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header-action" href="#contact">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
