import React, { useState, useEffect } from "react";
import "./Navigation.css";

export const Navbar = () => {
  const handleGoToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleGoToBottom = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      const { height } = header.getBoundingClientRect();
      setHeaderHeight(height);
    }
  }, []);

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId) {
      const targetElement = document.querySelector(targetId) as HTMLElement;
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = offset + scrollTop;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div style={{ marginTop: headerHeight }}>
      <header className="header">
        <nav className="header-container">
          <div className="navbar-brand">
            <img src="/icon.png" alt="Logo da empresa" />
            <button onClick={handleGoToTop} className="navbar-brand-button">
              Build Upgrades
            </button>
          </div>
          <ul className="navbar-menu">
            <li>
              <a href="#sobre" onClick={handleSmoothScroll}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#atuacao" onClick={handleSmoothScroll}>
                Atuação
              </a>
            </li>
            <li>
              <button onClick={handleGoToBottom} className="contact-button">
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
