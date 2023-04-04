import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({page, setPage}: {page: number, setPage: React.Dispatch<React.SetStateAction<number>>}) => {

    const handleNext = () => {
        setPage(prevState => prevState+1)
    }

    const handlePrev = () => {
        setPage(prevState => prevState-1)
    }

    return <div className="paginacion">
        <button disabled={page === 1 ? true : false} className={"primary"} onClick={handlePrev}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={handleNext}>Siguiente</button>
    </div>
}

export default Paginacion;