import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  const locationUrl = 'https://www.google.com/maps/place//@-16.5834847,-49.3830129,62m/data=!3m1!1e3?entry=tts&g_ep=EgoyMDI1MDgwNS4wIPu8ASoASAFQAw%3D%3D&skid=fad27c96-28e1-4b8c-a5b7-49a599f3d9c7';

  return (
    <main className="container">
      <img src="https://i.imgur.com/jl0fFrO.png" alt="Convite de aniversário da Ayla" className="invitation-image" />
      <header className="header">
        <p className="slogan">Nossa cereja do bolo</p>
        <div className="name-wrapper">
          <h1 className="name">Ayla</h1>
          <div className="cherry-icon"></div>
        </div>
        <p className="age-info">ESTÁ COMPLETANDO 1 ANINHO</p>
      </header>

      <section className="info">
        <p className="date-time">
          DOMINGO, DIA 10 DE AGOSTO DE 2025
          <br />
          A PARTIR DAS 11:00H
        </p>
        <button className="location-button" onClick={() => window.open(locationUrl, '_blank', 'noopener,noreferrer')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>LOCALIZAÇÃO</span>
        </button>
      </section>

      <footer className="footer">
        <p>te espero lá</p>
      </footer>
    </main>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);