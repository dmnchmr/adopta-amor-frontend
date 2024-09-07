import "./form.css";
import React from "react";
import { guardarAnimal } from "../../axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  const [tipo, setTipo] = useState("");
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [tamano, setTamano] = useState("");
  const [cuidadosEspeciales, setCuidadosEspeciales] = useState("");
  const [edad, setEdad] = useState(0);
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    await guardarAnimal(event, {
      tipo,
      raza,
      nombre,
      tamano,
      cuidadosEspeciales,
      ubicacion: "Barcelona",
      edad,
      gastosDeGestion: "500€",
      imagen,
    });
    alert("Tu peludito se ha guardado correctamente");
    navigate("/adoptar");
  };

  return (
    <div className="container--form">
      <form onSubmit={onSubmit} className="form">
        <p>
          <b>Seleccione el tipo de animal: </b>
        </p>
        <div className="form--tipo">
          <label htmlFor="perro">
            <input
              value="Perro"
              checked={tipo === "Perro"}
              type="radio"
              id="perro"
              name="tipo"
              onChange={(event) => setTipo(event.target.value)}
            />
            Perro
          </label>
          <label htmlFor="gato">
            <input
              value="Gato"
              checked={tipo === "Gato"}
              type="radio"
              id="gato"
              name="tipo"
              onChange={(event) => setTipo(event.target.value)}
            />
            Gato
          </label>
        </div>
        <div className="container--entradas--form">
          <div className="container--entradas--divs">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                value={nombre}
                type="text"
                placeholder="Nombre"
                onChange={(event) => setNombre(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="raza">Raza</label>
              <input
                id="raza"
                value={raza}
                type="text"
                placeholder="Raza"
                onChange={(event) => setRaza(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="edad">Edad</label>
              <input
                id="edad"
                value={edad}
                type="number"
                placeholder="Edad"
                onChange={(event) => setEdad(event.target.value)}
              />
            </div>
          </div>
          <div className="container--entradas--divs">
            <div>
              <label htmlFor="imagen">Enlace de la foto</label>
              <input
                id="imagen"
                value={imagen}
                type="text"
                placeholder="Enlace de la foto"
                onChange={(event) => setImagen(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="tamano">Tamaño</label>
              <select
                id="tamano"
                value={tamano}
                name="tamano"
                onChange={(event) => setTamano(event.target.value)}
              >
                <option hidden value="">
                  Selecciona el tamaño
                </option>
                <option value="grande">Grande</option>
                <option value="mediano">Mediano</option>
                <option value="pequeño">Pequeño</option>
              </select>
            </div>
            <div>
              <label htmlFor="cuidados">Cuidados especiales</label>
              <input
                id="cuidados"
                value={cuidadosEspeciales}
                type="text"
                placeholder="Cuidados del animal"
                onChange={(event) => setCuidadosEspeciales(event.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="button-adopta">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Form;