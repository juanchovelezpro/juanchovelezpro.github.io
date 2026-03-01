import { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { StackSection } from './components/StackSection';
import { ImpactSection } from './components/ImpactSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { portfolioContent } from './content/portfolio';

const navItems = portfolioContent.navItems;
const observedSectionIds = navItems.map((item) => item.href.replace('#', ''));

function App() {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? '#about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = observedSectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveHref(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: '-28% 0px -42% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const rootElement = document.documentElement;
      const scrollableHeight = rootElement.scrollHeight - rootElement.clientHeight;

      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const nextProgress = Math.min((window.scrollY / scrollableHeight) * 100, 100);
      setScrollProgress(nextProgress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Header navItems={navItems} activeHref={activeHref} scrollProgress={scrollProgress} />
      <main>
        <Hero content={portfolioContent} />
        <About
          summary={portfolioContent.summary}
          certifications={portfolioContent.certifications}
        />
        <ExperienceSection items={portfolioContent.experience} />
        <StackSection groups={portfolioContent.skillGroups} />
        <ImpactSection highlights={portfolioContent.impactHighlights} />
        <ContactSection
          title={portfolioContent.name}
          contact={portfolioContent.contact}
          availability={portfolioContent.availability}
        />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
