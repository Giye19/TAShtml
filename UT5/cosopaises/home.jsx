import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../common";
import { LivesContext } from "../contexts/livesContext";

export default function Home() {
  const { setLives } = useContext(LivesContext);
  const [randomCountry, setRandomCountry] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(new URL("/api/countries", window.location)).then((req) => {
      if (req.ok) {
        req.json().then((countries) => {
          const randomIndex = Math.floor(Math.random() * countries.length);
          setRandomCountry(countries[randomIndex]);
        });
      }
    });
  }, []);

  const startGame = (l) => {
    if (!randomCountry) return;
    setLives(l);
    navigate(/${randomCountry});
  };

  return (
    <div className="trivia-container">
      <h1>Flag Trivia</h1>
      <h3>Elija la dificultad del juego:</h3>
      <div className="buttons-container">
        <button onClick={() => startGame(8)}>Fácil</button>
        <button onClick={() => startGame(5)}>Medio</button>
        <button onClick={() => startGame(3)}>Difícil</button>
      </div>
    </div>
  );
