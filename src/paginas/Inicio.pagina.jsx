import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getCharacters } from "../redux/charactersSlice";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("")
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters({page, filter}));
  }, [dispatch, page, filter]);

  const handleClick = () => {
    setFilter("")
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={handleClick}>Limpiar filtro</button>
      </div>
      <Filtros filter={filter} setFilter={setFilter} />
      <Paginacion page={page} setPage={setPage} />
      <GrillaPersonajes characters={characters.characters.results} />
      <Paginacion page={page} setPage={setPage} />
    </div>
  );
};

export default PaginaInicio;
