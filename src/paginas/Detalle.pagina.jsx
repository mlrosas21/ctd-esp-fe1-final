import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSingleCharacter } from "../redux/charactersSlice";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    const { id } = useParams();
    
    const dispatch = useAppDispatch();
    const character = useAppSelector((state) => state.characters.selectedCharacter);

    useEffect(() => {
        dispatch(getSingleCharacter(id));
      }, [dispatch, id]);

    return (character && 
    <div className="container">
        <h3>{character.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character.image} alt="Rick Sanchez"/>
                <div className={"detalle-header-texto"}>

                    <p>{character.name}</p>
                    <p>Planeta: {character.location.name}</p>
                    <p>Genero: {character.gender}</p>
                </div>
                <BotonFavorito esFavorito={false} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {character.episode.map((episode, idx) => <TarjetaEpisodio episodio={episode} />)}
        </div>
    </div>
    )
}

export default PaginaDetalle