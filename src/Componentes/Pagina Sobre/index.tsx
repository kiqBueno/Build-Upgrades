import "./PaginaSobre.css";

export const PaginaSobre = () => {
  return (
    <div className="container">
      <div className="texto">
        <h1>Quem somos?</h1>
        <p>
          Somos uma empresa que visa ampliar o alcance e visibilidade para
          negócios de pequeno porte em geral através da nossa plataforma e
          gerenciamento, proporcionamos a melhor experiência para o usuário e
          asseguramos integridade do serviço.
        </p>
      </div>
      <div className="imagem">
        <img src="/icon.png" alt="Logo da Empresa" />
        <h2>Build Upgrade</h2>
      </div>
    </div>
  );
};
