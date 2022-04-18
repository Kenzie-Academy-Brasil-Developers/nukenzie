import "./styles.css";
import NuKenzie from "./NuKenzie.svg";
import landingImagem from "./landingImagem.svg";

const LandingPage = ({ funcao }) => {
  return (
    <div div className="LandingPage">
      <div className="landing-imagem">
          <img className="imagem" src={landingImagem} alt="" />
      </div>
      <div className="informacoes" >
        <img src={NuKenzie} />
        <h1 className="LandingPage-titulo">
          Centralize o controle das suas finanças
        </h1>
        <p className="landing-legenda">de forma rápida a segura</p>
        <button className="landing-btn" onClick={() => funcao(true)}>Iniciar</button>
      </div>
    </div>
  );
};

export default LandingPage;
