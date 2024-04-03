import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Contato.css";

export const Contato = () => {
  const initialFormData = {
    nome: "",
    email: "",
    mensagem: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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

  return (
    <footer className="containerFooter">
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
              <label htmlFor="nome">
                Nome completo:
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Fulano Jr"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">
                Como podemos ajudar:
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Texto descritivo sobre a ideia e seu empreendimento"
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </footer>
  );
};
