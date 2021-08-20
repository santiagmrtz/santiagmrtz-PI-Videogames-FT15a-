import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, filterByGenre, orderByCreator, orderAsc, orderDesc } from '../../Actions/index';
import style from "./Filter.module.css";


export function Filter() {
    const dispatch = useDispatch()
    const genres = useSelector(store => store.genres);
    
    useEffect(() => {
        dispatch(getGenres())
    }, []);

    //Filtrar x genero
    const handleFilter = (e) => {
        dispatch(filterByGenre(e.target.value))
    }

    //Filtrar x API/BD
    const handleCreator = (e) => {
        if(e.target.value === "API" || e.target.value === "Created") {
            dispatch(orderByCreator(e.target.value))
        } else {
            dispatch(filterByGenre(e.target.value))
        }
    }
    
    

      // Ordenado
  const handleOrder = (e) => {
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(orderAsc(e.target.value));
    } else if (e.target.value === "desc_name" || e.target.value === "desc_rating") {
      dispatch(orderDesc(e.target.value));
    } else {
      dispatch(filterByGenre(e.target.value));
    }
  };

    return (
        <div className={style.filter}>
            <div>
                <div>Filter by Genre</div>
                <select onChange={(e) => handleFilter(e)}>    
                <option default>All</option>
                {genres.map((G) => (
                <option value={G.name}>{G.name}</option>
                ))}
                </select>
            </div>
            <div>
                <div>Videogames Created</div>
                <select onChange={(e) => handleCreator(e)} >
                <option default>All</option>
                {/* <option value="Api">Api videogames</option> */}
                <option value="Created">User videogames</option>
                </select>
            </div>
            <div>Order</div>
            <select onChange={(e) => handleOrder(e)}>
                <option value="All" default>All</option>
                <option value="asc_name">Alphabetically (A-Z)</option>
                <option value="desc_name">Alphabetically (Z-A)</option>
                <option value="asc_rating">Rating (Lower-Higher)</option>
                <option value="desc_rating">Rating (Higher-Lower)</option>
            </select>
        </div>
    )    
}


export default Filter;