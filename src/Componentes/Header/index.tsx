import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";

export const Navbar = () => {
  const handleGoToTop = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuActive(false); // Close the menu
  };

  const handleGoToBottom = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setMenuActive(false); // Close the menu
  };

  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = offset + scrollTop;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
        setMenuActive(false);
      }
    }
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setMenuActive(false);
    }
  };

  return (
    <header className="responsive-header">
      <nav
        ref={menuRef}
        className={`mobile-container ${menuActive ? "active" : ""}`}
        onClick={handleBackgroundClick}
      >
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`mobile-menu ${menuActive ? "active" : ""}`}>
          <li>
            <a href="#inicio" onClick={handleGoToTop}>
              Build Upgrades
            </a>
          </li>
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
            <a href="#contato" onClick={handleGoToBottom}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <nav className={`header-container`}>
        <div className={`left-container ${menuActive ? "active" : ""}`}>
          <nav className="navbar-brand">
            <button onClick={handleGoToTop} className="navbar-brand-button">
              <img src="/icon.png" alt="Logo da empresa" />
              Build Upgrades
            </button>
          </nav>
          <ul className={`navbar-menu`}>
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
          </ul>
        </div>
        <div className="right-container">
          <button onClick={handleGoToBottom} className="contact-button">
            Entrar em Contato
          </button>
        </div>
      </nav>
    </header>
  );
};
