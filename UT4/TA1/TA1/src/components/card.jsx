import React from "react";
import './card.css';

export default function Card({titulo,descripcion,persona,fechaInicio,fechaFin}) {
    return(
        <div className="card">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>{persona}</p>
            <p>Fecha de inicio: {fechaInicio}</p>
            <p>Fecha de fin: {fechaFin}</p>
        </div>
    );
}