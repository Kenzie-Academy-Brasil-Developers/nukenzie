import "./style.css";
import { useState, useEffect } from "react";

export default function Form({ currentList, newSet }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [newValue, setNewValue] = useState({});

  useEffect(() => {
    const listPrice = currentList.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      0
    );
    setTotalPrice(listPrice);
    }, [currentList]);

  return (
    <div>
      <div className="father-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setNewValue({ ...newValue, id: currentList.length + 1 });
          }}
        >
          <div className="primeira-div">
            <label className="info-description">Descrição</label>
            <div className="description-label">
              <input
                type="text"
                onChange={(event) =>
                  setNewValue({
                    ...newValue,
                    description: event.target.value || "Sem descrição",
                  })
                }
                className="description"
                placeholder="Digite aqui sua descrição"
              />
              <label className="legend-form">Ex: compras de roupas</label>
            </div>
          </div>

          <div className="value">
            <div className="info-label">
              <label>Valor</label>
              <input
                type="number"
                onChange={(event) =>
                  setNewValue({
                    ...newValue,
                    value: Number(event.target.value),
                  })
                }
                className="price"
                placeholder="1 R$"
              />
            </div>

            <div className="info-label">
              <label>Tipo de valor</label>
              <select
                onChange={(event) =>
                  setNewValue({ ...newValue, type: event.target.value })
                }
              >
                <option>Selecione</option>
                <option value="Entrada"> Entrada </option>
                <option value="Despesa"> Despesa </option>
              </select>
            </div>
          </div>

          <button
            className="submit"
            type="submit"
            onClick={() => newSet([...currentList, newValue])}
          >
            Inserir Valor
          </button>
        </form>

        <div className="totalPrice">
          <p>
            Valor total:
            <span className="form-total-price"> R$ {totalPrice},00</span>
          </p>

          <label className="legend-form">O valor se refere ao saldo</label>
        </div>
      </div>
    </div>
  );
}
