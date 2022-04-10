import "./style.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function Card({ description, type, value, deleteCard, id }) {
  return (
    <div className={type}>
      <div className="card-title">
        <h2 className="card-description">{description}</h2>
        {type === "Despesa" ? (
          <p className="card-value">R$ -{value},00 </p>
        ) : (
          <p className="card-value">R$ {value},00 </p>
        )}
        <button onClick={() => deleteCard(id)} className="excluir">
          {" "}
          <BsFillTrashFill className="trash" size={20} />{" "}
        </button>
      </div>
      <label className="card-type">{type}</label>
    </div>
  );
}
