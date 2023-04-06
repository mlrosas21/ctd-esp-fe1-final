import './filtros.css';

/**
 * Functional component for filtering characters by name.
 * @param {Object} props - The component props.
 * @param {string} props.filter - The current filter value.
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setFilter - A function to update the filter value.
 * @returns {JSX.Element} A JSX element that renders the filter UI.
 */

const Filtros = ({filter, setFilter}:{filter:string, setFilter:React.Dispatch<React.SetStateAction<string>>}) => {
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={filter} onChange={e => setFilter(e.target.value)} />
    </div>
}

export default Filtros;