import React from 'react'
import style from './Tareas.module.css';
const Tareas = ({status, tarea, handleStatus, index, handleDelete }) => {
    return (
        <>
            <li className={style.lista}>{status === true ?
                <s>{tarea}</s>
                :
                tarea}
                <input type="checkbox" checked={status} onChange={(e)=> handleStatus(e.target.checked, index)}/>
                <button  className={style.btn} onClick={(e)=> handleDelete(index)}>Borrar</button>
            </li>
        </>
    )
}

export default Tareas