import React, { useEffect, useState } from 'react';
import { Header } from './features/landing/components/Header';
import { Hero } from './features/landing/components/Hero';
import { About } from './features/landing/components/About';
import { Partners } from './features/landing/components/Partners';
import { Solutions } from './features/landing/components/Solutions';
import { Prestige } from './features/landing/components/Prestige';
import { Associates } from './features/landing/components/Associates';
import { News } from './features/landing/components/News';
import { Contact } from './features/landing/components/Contact';
import { Footer } from './features/landing/components/Footer';
import { PartnersPage } from './features/landing/components/PartnersPage';
import { BoardPage } from './features/landing/components/BoardPage';
import { AssociatesPage } from './features/landing/components/AssociatesPage';
import { NewsPage } from './features/landing/components/NewsPage';
import { NewsDetailPage } from './features/landing/components/NewsDetailPage';
import { InternalRegulationPage } from './features/landing/components/InternalRegulationPage';
import { SocialStatutePage } from './features/landing/components/SocialStatutePage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'partners' | 'board' | 'associates' | 'news-list' | 'news-detail' | 'regulation' | 'statute'>('landing');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('1');

  // IntersectionObserver to trigger scroll-reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px', // Trigger slightly before entering viewport
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => {
        try {
          observer.unobserve(el);
        } catch (e) {
          // ignore already removed nodes
        }
      });
    };
  }, [currentView]);

  // Simple router based on hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/parceiros' || hash === '#/parceiros-todos') {
        setCurrentView('partners');
        window.scrollTo(0, 0);
      } else if (hash === '#/diretoria' || hash === '#/diretoria-conselho') {
        setCurrentView('board');
        window.scrollTo(0, 0);
      } else if (hash === '#/associados') {
        setCurrentView('associates');
        window.scrollTo(0, 0);
      } else if (hash === '#/noticias') {
        setCurrentView('news-list');
        window.scrollTo(0, 0);
      } else if (hash.startsWith('#/noticia/')) {
        const id = hash.replace('#/noticia/', '');
        setSelectedArticleId(id);
        setCurrentView('news-detail');
        window.scrollTo(0, 0);
      } else if (hash === '#/regimento-interno') {
        setCurrentView('regulation');
        window.scrollTo(0, 0);
      } else if (hash === '#/estatuto-social') {
        setCurrentView('statute');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView === 'partners') {
    return <PartnersPage />;
  }

  if (currentView === 'board') {
    return <BoardPage />;
  }

  if (currentView === 'associates') {
    return <AssociatesPage />;
  }

  if (currentView === 'news-list') {
    return <NewsPage />;
  }

  if (currentView === 'news-detail') {
    return <NewsDetailPage articleId={selectedArticleId} />;
  }

  if (currentView === 'regulation') {
    return <InternalRegulationPage />;
  }

  if (currentView === 'statute') {
    return <SocialStatutePage />;
  }

  return (
    <div className="relative min-h-screen selection:bg-acaf-forest selection:text-acaf-sand font-sans">
      
      {/* Fixed Noise Overlay for Premium Feeling */}
      <div className="noise-grain" />

      {/* Structural Vertical Grid Lines */}
      <div className="bg-grid-lines">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>

      {/* Page Content */}
      <Header />

      <main>
        {/* Hero Section */}
        <div className="reveal-up">
          <Hero />
        </div>

        {/* About Us Section */}
        <div className="reveal-up delay-100">
          <About />
        </div>

        {/* Solutions Section */}
        <div className="reveal-up delay-100">
          <Solutions />
        </div>

        {/* Prestige / Stats Section */}
        <div className="reveal-up delay-100">
          <Prestige />
        </div>

        {/* Associates Section */}
        <div className="reveal-up delay-100">
          <Associates />
        </div>

        {/* News Section */}
        <div className="reveal-up delay-100">
          <News />
        </div>

        {/* Contact Section */}
        <div className="reveal-up delay-100">
          <Contact />
        </div>

        {/* Partners Section */}
        <div className="reveal-up delay-100">
          <Partners />
        </div>
      </main>

      {/* Premium Footer */}
      <Footer />

    </div>
  );
};

export default App;
