import './App.css';

const aprendizados = [
  'Lógica de programação',
  'Desenvolvimento web',
  'Frontend',
  'Backend',
  'Banco de dados',
  'Desenvolvimento de APIs',
  'Aplicativos',
  'Versionamento de código',
];

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'GitHub'];

const areas = [
  'Dev Frontend',
  'Dev Backend',
  'Dev Full Stack',
  'Dev de Aplicações',
  'Banco de Dados',
  'Suporte e Manutenção',
];

const projetos = [
  'Cadastro de clientes',
  'Sistema de estoque',
  'Aplicação de agendamentos',
  'Loja virtual',
  'Dashboard administrativo',
  'Aplicativo de tarefas',
];

function App() {
  return (
    <div>
      <header className="header">
        <h2>Técnico em Dev. Sistemas | SENAI</h2>
        <nav>
          <a href="#hero">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizados">O que aprende</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#atuacao">Atuação</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div>
          <h1>Transforme ideias em sistemas.</h1>
          <p>
            Desenvolva soluções, aprenda novas tecnologias e construa seu futuro na área de TI.
          </p>
          <a href="#cta" className="btn">
            Quero Conhecer
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500"
          alt="Tecnologia"
        />
      </section>

      <section id="sobre" className="section bg-alt">
        <h2>Sobre o Curso</h2>
        <p>
          <strong>Desenvolvimento de Sistemas:</strong> Criação e manutenção de softwares e sistemas
          web.
        </p>
        <p>
          <strong>Objetivo:</strong> Capacitar você para dominar programação, bancos de dados e
          tecnologia.
        </p>
        <p>
          <strong>O que faz:</strong> Desenvolve páginas web, constrói APIs e resolve problemas
          corporativos.
        </p>
      </section>

      <section id="aprendizados" className="section">
        <h2>O que você aprende</h2>
        <div className="grid">
          {aprendizados.map(function (item) {
            return (
              <div key={item} className="card">
                {item}
              </div>
            );
          })}
        </div>
      </section>

      <section id="tecnologias" className="section bg-alt">
        <h2>Tecnologias</h2>
        <div className="tags">
          {tecnologias.map(function (tech) {
            return (
              <span key={tech} className="tag">
                {tech}
              </span>
            );
          })}
        </div>
      </section>

      <section id="atuacao" className="section">
        <h2>Áreas de Atuação</h2>
        <div className="grid">
          {areas.map(function (area) {
            return (
              <div key={area} className="card">
                {area}
              </div>
            );
          })}
        </div>
      </section>

      <section id="projetos" className="section bg-alt">
        <h2>Exemplos de Projetos</h2>
        <div className="grid">
          {projetos.map(function (proj) {
            return (
              <div key={proj} className="card">
                {proj}
              </div>
            );
          })}
        </div>
      </section>

      <section id="cta" className="cta">
        <h2>Seu futuro na tecnologia pode começar aqui.</h2>
        <p>Conheça o curso Técnico em Desenvolvimento de Sistemas.</p>
        <a href="#hero" className="btn">
          Voltar ao topo
        </a>
      </section>

      <footer className="footer">
        <p>Técnico em Desenvolvimento de Sistemas — SENAI 2026 | Aluno: Murilo Moraes Machado</p>
      </footer>
    </div>
  );
}

export default App;