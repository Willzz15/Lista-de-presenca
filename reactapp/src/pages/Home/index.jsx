import React, { useState } from "react";
import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [nomeEstudante, setNomeEstudante] = useState();
  const [estudante, setEstudante] = useState([]);

  function carregarEstudante() {
    const novoEstudante = {
      nome: nomeEstudante,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setEstudante((estadoAnterios) => [...estadoAnterios, novoEstudante]);
  }

  return (
    <div className="container">
      <h1>Lista de presença</h1>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setNomeEstudante(e.target.value)}
      />

      <button type="button" onClick={carregarEstudante}>
        Enviar
      </button>

      {estudante.map((estudante) => (
        <Card name={estudante.nome} time={estudante.time} />
      ))}
    </div>
  );
}
