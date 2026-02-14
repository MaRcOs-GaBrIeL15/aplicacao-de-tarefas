import React, { useContext, useEffect } from "react";
import { ListContext } from "../../components/ListContext";
import "./Home.css";
import Button from "../../components/Button/Button";

function Home() {
  const contexto = useContext(ListContext);
  const { list } = contexto;
  
useEffect(()=>{
  document.title = "To do List";
}, [])

  return (
    <>
      <div className="container">
        <h2>TAREFAS:</h2>
        {list.length === 0 && <p>Você não tem tarefas.</p>}
        <div className="lista-tarefas">
          {list.map((tarefa) => {
            return (
              <div
                key={tarefa.id}
                className={`tarefa ${tarefa.isConcluida && "concluida"}`}
              >
                <div className="informacoes-tarefa">
                  <h3>{tarefa.titulo}</h3>
                  <p>{tarefa.descricao}</p>
                </div>
                <div className="botoes-tarefa">
                 {!tarefa.isConcluida && <Button
                    onClick={() => {
                      contexto.editTask(tarefa.id, {
                        ...tarefa,
                        isConcluida: true,
                      });
                    }}
                  >
                    Concluir
                  </Button>}
                  <Button
                    onClick={() => {
                      contexto.deleteTask(tarefa.id);
                    }}
                  >
                    Apagar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
