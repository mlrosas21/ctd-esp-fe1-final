import { Episode } from '../../types/episode.types';
import { formatDate } from '../../utils/dateUtils';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ({episodio}: {episodio: Episode}) => {
    
    return <div className="tarjeta-episodio">
            <h4>{episodio.name}</h4>
            <div>
                <span>{episodio.episode}</span>
                <span>Lanzado el: {formatDate(episodio.created)}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;