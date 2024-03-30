import React, { useState, useEffect } from 'react';
import "./Navigation.css";

export const Navbar = () => {
  const handleGoToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      const { height } = header.getBoundingClientRect();
      setHeaderHeight(height);
    }
  }, []);

  const handleContactClick = () => {
    // Aqui você pode adicionar a lógica para lidar com o clique no botão de contato
    // Por exemplo, abrir um formulário de contato ou redirecionar para uma página de contato
    console.log("Botão de contato clicado!");
  };

  return (
    <div style={{ marginTop: headerHeight }}>
      <header className="header">
        <nav className="header-container">
          <div className="navbar-brand">
            <img src='/icon.png' alt='Logo da empresa'/>
            <button onClick={handleGoToTop} className="navbar-brand-button">
              Build Upgrades
            </button>
          </div>
          <ul className="navbar-menu">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#atuacao">Atuação</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><button onClick={handleContactClick} className="contact-button">Contato</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
