import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Contato.css";

export const Contato = () => {
  const initialFormData = {
    nome: "",
    email: "",
    mensagem: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Aqui você pode enviar os dados para o servidor ou fazer o que desejar com eles
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <footer className="containerFooter responsiveFooter">
      <div className="texto">
        <h1>Contato</h1>
        <p>
          Gostou de nosso serviço e deseja trabalhar conosco? Entre em contato
          preenchendo o formulário com suas informações e ideia.
        </p>
      </div>
      <div className="form">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome completo:</label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Fulano Jr"
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Como podemos ajudar:</label>
              <textarea
                name="mensagem"
                id="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Texto descritivo sobre a ideia e seu empreendimento"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <nav className={`mobile-menu ${menuOpen ? "open" : ""} responsiveNav`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
