import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LivesContext } from "../contexts/livesContext";
import { VisitedContext } from "../contexts/VisitedContext";

export default function Country() {
  const { lives, setLives } = useContext(LivesContext);
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [codes, setCodes] = useState([]);
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const navigate = useNavigate();
  const { visited, setVisited } = useContext(VisitedContext);

  useEffect(() => {
    fetch(new URL(/api/countries/${code}, window.location)).then((req) => {
      if (req.ok) {
        req.json().then(setCountry);
      }
    });
  }, [code]);

  useEffect(() => {
    if (!country) return; // 👈 no sigas si aún no cargó el país

    fetch("/api/countries").then((req) => {
      if (req.ok) {
        req.json().then((data) => {
          const codesArray = [];
          const n = country.borders.length < 1 ? 9 : 8;
          while (codesArray.length < n) {
            let randomIndex = Math.floor(Math.random() * data.length);
            let value = data[randomIndex];

            if (!codesArray.includes(value) && !visited.has(value)) {
              codesArray.push(value);
            }
          }

          const answer = country.borders?.[0] ?? null; // forma más limpia
          setCorrectAnswer(answer);
          if (answer) codesArray.push(answer);
          else setCorrectAnswer("NONE");
          setCodes(codesArray);
        });
      }
    });
  }, [country, visited]); // 👈 importante: depende de country, no solo de code

  useEffect(() => {
    if (codes.length === 0) return;
    Promise.all(
      codes.map((code) =>
        fetch(/api/countries/${code}).then((req) =>
          req.ok ? req.json() : null
        )
      )
    ).then((optionsArray) => setOptions(optionsArray.filter(Boolean))); // <- espera a que termine Promise.all
  }, [codes]); // <- depende de codes

  const handleSelection = (option) => {
    if (correctAnswer === option.cca3) {
      navigate(/${option.cca3});
      setVisited((prev) => new Set(prev).add(option.cca3));
    }
  };

  const handleNone = () => {
    console.log(correctAnswer);
    if (correctAnswer === "NONE") {
      navigate(/URY);
    }
  };

  return (
    <div className="trivia-container">
      <h1>FLAG TRIVIA</h1>
      {country && (
        <div>
          {country.flag?.svg ? (
            <img
              src={new URL(country.flag.svg, window.location)}
              alt={country.flag.alt ?? Flag of ${country.name?.common}}
              style={{ width: 160, height: 110 }}
            />
          ) : null}
        </div>
      )}
      <h3>¿Cuál de los siguientes países es fronterizo?</h3>
      {options && (
        <div className="options">
          {options.map((option) => {
            return option.flag?.svg ? (
              <button onClick={() => handleSelection(option)}>
                <img
                  src={new URL(option.flag.svg, window.location)}
                  alt={option.flag.alt ?? Flag of ${option.name?.common}}
                  style={{ width: 160, height: 110 }}
                />
              </button>
            ) : null;
          })}
        </div>
      )}

      <button onClick={() => handleNone()}>Ninguno</button>
      <p>Usted puede errarle {lives} veces</p>
    </div>
  );
}