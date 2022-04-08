import Card from "../../../src/components/Card/index.jsx";
import "./style.css";

export default function List({ lista, deleteCard }) {

    return (
      <div className="cardList">
        <div className="header-list">
          <h3>Resumo financeiro</h3> <button>Todos</button>{" "}
          <button className="btn btn-gray">Entradas</button>{" "}
          <button className="btn btn-gray">Despesas </button>
        </div>

        {lista.map((element, index) => (
          <Card
            description={element.description}
            type={element.type}
            value={element.value}
            key={index}
            id={element.id}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    );
  
}
