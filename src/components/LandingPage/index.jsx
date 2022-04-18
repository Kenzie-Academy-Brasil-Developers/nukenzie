import "./styles.css";
import NuKenzie from "./NuKenzie.svg";
import landingImagem from "./landingImagem.svg";

const LandingPage = ({ funcao }) => {
  return (
    <div div className="LandingPage">
      <div className="informacoes" >
        <img src={NuKenzie} />
        <h1 className="LandingPage-titulo">
          Centralize o controle das suas finanças
        </h1>
        <p className="landing-legenda">de forma rápida a segura</p>
        <button className="landing-btn" onClick={() => funcao(true)}>Iniciar</button>
      </div>

      <img className="landing-imagem" src={landingImagem} />
    </div>
  );
};

export default LandingPage;
