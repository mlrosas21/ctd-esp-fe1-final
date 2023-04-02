import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { getAllCharacters } from "../redux/charactersSlice";

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
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getAllCharacters(page));
  }, [dispatch, page]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacion page={page} setPage={setPage} />
      <GrillaPersonajes characters={characters.characters.results} />
      <Paginacion page={page} setPage={setPage} />
    </div>
  );
};

export default PaginaInicio;
