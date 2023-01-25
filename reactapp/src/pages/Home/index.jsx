import React, { useEffect, useState } from "react";
import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [nomeEstudante, setNomeEstudante] = useState();
  const [estudante, setEstudante] = useState([]);
  const [usuario, setUsuario] = useState({ nome: "", avatar: "" });

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

  useEffect(() => {
    fetch("https://api.github.com/users/Willzz15")
      .then((response) => response.json())
      .then((data) => {
        setUsuario({
          nome: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{usuario.nome}</strong>
          <img src={usuario.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setNomeEstudante(e.target.value)}
      />

      <button type="button" onClick={carregarEstudante}>
        Enviar
      </button>

      {estudante.map((estudante) => (
        <Card
          key={estudante.time}
          name={estudante.nome}
          time={estudante.time}
        />
      ))}
    </div>
  );
}
