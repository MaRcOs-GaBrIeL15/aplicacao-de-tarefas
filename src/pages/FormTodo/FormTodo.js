import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../../components/ListContext";
import Button from "../../components/Button/Button";
import "./FormTodo.css"
function FormTodo() {
  
  const {addTask} = useContext(ListContext);
  
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  
  useEffect(()=>{
    document.title = "To do List: Form";
  }, [])
  
  return (
    <>
    <div className="container caixa-formulario">
    <h2>FORMULARIO DE TAREFA:</h2>
      <form onSubmit={(e) =>{
        e.preventDefault()
        addTask({titulo:titulo, descricao:descricao, isConcluida:false});
        alert("Tarefa adicionada");
      }}>
        
        <label for="titulo">Titulo:</label>
        <input id="titulo" placeholder="Titulo da tarefa" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
        <label for="descricao" >Descrição:</label>
        <input id="descricao" placeholder="Descrição da tarefa" value={descricao} onChange={(e)=>setDescricao(e.target.value)}/>
        <Button className="submit" isInput={true} type="submit" value="Enviar"/>
      </form>
       </div>
    </>
  );
}

export default FormTodo;
