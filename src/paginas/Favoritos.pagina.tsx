import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { clearFavorites } from "../redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const dispatch = useAppDispatch()
    const favorites = useAppSelector(state => state.characters.favorites)

    const handleClick = () => {
        dispatch(clearFavorites())
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => handleClick()}>Limpiar favoritos</button>
        </div>
        <GrillaPersonajes characters={favorites} />
    </div>
}

export default PaginaFavoritos