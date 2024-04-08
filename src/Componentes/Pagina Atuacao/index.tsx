import "./PaginaAtuacao.css";

export const PaginaAtuacao = () => {
  return (
    <div id="atuacao" className="ContainerAtuacao">
      <h1 className="head1">Atuação de mercado</h1>
      <div className="cards">
        <div className="card">
          <h2>Vendas</h2>
          <p>
            A dimensão de vendas engloba um Sistema de integração digital
            dedicado a impulsionar as vendas, a competitividade e ampliação de
            público. Alcançado por meio de Marketing Digital e Comércio
            Eletrônico 
          </p>
        </div>
        <div className="card">
          <h2>Financeiro</h2>
          <p>
            No contexto financeiro, oferecemos pagamentos via PIX, cartão de
            crédito ou boleto bancario. Nosso objetivo é ampliar e simplificar o
            acesso da sua empresa a serviços financeiros.
          </p>
        </div>
        <div className="card">
          <h2>Gestão</h2>
          <p>
            Na esfera da GESTÃO, englobamos plataformas projetadas para
            automatizar os processos tanto do backoffice quanto do core business. 
            Aqui incluímos ERPs e sistemas de gestão de recursos humanos.
          </p>
        </div>
      </div>
    </div>
  );
};
