import "./PaginaAtuacao.css";

export const PaginaAtuacao = () => {
  return (
    <div>
      <h1 className="head1">Atuação de mercado</h1>
      <div className="cards">
        <div className="card">
          <h2>Gestão</h2>
          <p>
            Na esfera da GESTÃO, englobamos sistemas e plataformas projetadas
            para automatizar os processos tanto do backoffice quanto do core
            business de nossos clientes. Aqui incluímos ERPs, sistemas de gestão
            de recursos humanos e softwares verticalizados.
          </p>
        </div>
        <div className="card">
          <h2>Business</h2>
          <p>
            A dimensão BUSINESS engloba um ecossistema de soluções dedicadas a
            impulsionar as vendas, a competitividade e o desempenho dos
            clientes. Isso é alcançado por meio de Marketing Digital, Comércio
            Eletrônico e experiências do cliente (Customer Experience).
          </p>
        </div>
        <div className="card">
          <h2>TecFin</h2>
          <p>
            No contexto de TECFIN, oferecemos créditos B2B, antecipação de
            recebíveis, pagamentos via PIX, cartão de crédito ou carteiras
            digitais, além de soluções de pagamento. Nosso objetivo é ampliar,
            simplificar e democratizar o acesso da sua empresa a serviços
            financeiros.
          </p>
        </div>
      </div>
    </div>
  );
};
