import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export default function Tareas() {
    const {store, dispatch} = useGlobalReducer()

    useEffect(function() {
        fetch('https://playground.4geeks.com/todo/users/pereayats/')
        .then(response => response.json())
        .then(data => {
            dispatch({ type: 'cargar_tareas', payload: { tareas: data.todos } })
        })
    }, [])

    useEffect(function() {
        console.log(store.tareas)
    }, [store.tareas])

    return (
        <div>
            <h1>Mis tareas</h1>
            {store.tareas ? store.tareas.map(tarea => (
                <p key={tarea.label}>{tarea.label}</p>
            )) : "Cargando"}
            <Link to="/">Ver home</Link>
        </div>
    )
}