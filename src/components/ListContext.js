import { createContext, useEffect, useState } from "react";

const ListContext = createContext();

function ListProvider(props) {
  const [lista, setLista] = useState(
    JSON.parse(localStorage.getItem("lista") ?? "[]"),
  );


  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  function adicionarTarefa(tarefaNova) {
    setLista([...lista, { id: Date.now(), ...tarefaNova }]);
  }

  function editarTarefa(idTarefaModificar, tarefaModificada) {
    setLista(
      lista.map((tarefa) => {
        if (tarefa.id === idTarefaModificar) {
          return {idTarefaModificar, ...tarefaModificada};
        }
        return tarefa;
      }),
    );
  }

  function excluirTarefa(idTarefaExcluir) {
    setLista(lista.filter((tarefa) => {
      return tarefa.id !== idTarefaExcluir;
    }))
  }

  return (
    <ListContext.Provider
      value={{
        list: lista,
        addTask: adicionarTarefa,
        deleteTask: excluirTarefa,
        editTask: editarTarefa,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
}

export {ListProvider, ListContext};
