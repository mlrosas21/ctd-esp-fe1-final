import './filtros.css';

const Filtros = ({filter, setFilter}) => {
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={filter} onChange={e => setFilter(e.target.value)} />
    </div>
}

export default Filtros;