import { useState } from "react";
import { markAsFavorite } from "../../redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import { Link } from "react-router-dom";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje = ({ character }) => {
    const favorites = useAppSelector(state => state.characters.favorites )
    const dispatch = useAppDispatch()

    const handleClick = () => {
        console.log("press");
        dispatch(markAsFavorite(character.id))
    }

  return (
    <div className="tarjeta-personaje">
      <Link to={`/detalle/${character.id}`}>
        <img src={character.image} alt="Rick Sanchez" />
      </Link>
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito esFavorito={favorites.find(e => e === character.id) ? true : false} onClick={handleClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
