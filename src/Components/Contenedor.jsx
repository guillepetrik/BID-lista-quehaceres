import React from 'react'
import { useState } from 'react'
import { useEffect } from "react";
import Tareas from './Tareas'

const listaPrueba = [
    { tarea: "Limpiar la casa", status: true },
    { tarea: "Pasear al perro", status: false },
    { tarea: "Entrenar", status: false },
    { tarea: "Estudiar", status: false },
]

const Contenedor = () => {

    const [task, setTask ] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleNewTask = (e) => {
        e.preventDefault();
        let aux = [...task];
        aux.push({ tarea: newTask, status: false })
        setTask([...aux]);
        setNewTask("");
    }

    const handleStatusChange = (val, idx) => {
        let aux = [...task];
        aux[idx].status = val;
        setTask([...aux]);
    }

    const handleDeleteTask = (index)=> {
        let aux = [...task];
        let filtrado = aux.filter((val, idx, array) => idx !== index)
        setTask([...filtrado]);
    }

    useEffect(() => {
        console.log("Iniciando...");    
        setTimeout(()=> {
        setTask(listaPrueba);
    },1500)
    }, [])

    useEffect(() => {
        console.log("Tareas: ", task)
    }, [task])
    
    return (
            <div>
                <form onSubmit={ handleNewTask }>
                    <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)}/>
                    <button>Add!</button>
                </form>
                <ul>
                    {task.map((item, index, lista)=> {
                        return (
                            <Tareas {...item}
                            key={"task"+index}
                            handleStatus={handleStatusChange}
                            index={index}
                            handleDelete={handleDeleteTask}
                            />
                        )
                    })}
                </ul>   
            </div>
    )
}

export default Contenedor