import NoCard from "./img/NoCard.svg";
import Card from "../../../src/components/Card/index.jsx";
import "./style.css";

export default function List({ lista, deleteCard, funcao }) {
  function filterButtons(value) {
    console.log(lista);
    console.log(value);
    const filterButton = lista.filter((element) => {
      return element.type === value;
    });
    funcao(filterButton);
  }

  return (
    <div className="cardList">
      <div
        className="header-list"
        onClick={(event) => filterButtons(event.target.value)}
      >
        <h3>Resumo financeiro</h3> <button>Todos</button>
        <button className="btn btn-gray" value="Entrada">
          Entradas
        </button>
        <button className="btn btn-gray" value="Despesa">
          Despesas{" "}
        </button>
      </div>

      <div className="space-cards">
        {lista.length === 0 ? (
          <div>
            <h4 className="sem-lancamentos">
              Você ainda não possui nenhum lançamento
            </h4>

            <img className="card-vazio" src={NoCard} />
            <img className="card-vazio" src={NoCard} />
            <img className="card-vazio" src={NoCard} />
          </div> 
          ):(
           lista.map((element, index) => (
              <Card
                description={element.description}
                type={element.type}
                value={element.value}
                key={index}
                id={element.id}
                deleteCard={deleteCard}
              />
            ))
          )}
      </div>
    </div>
  );
}
