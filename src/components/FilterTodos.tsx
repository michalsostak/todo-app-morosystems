import { useContext } from "react";
import { FilterContext } from "../Providers";
import { RemoveDone } from "./RemoveDone";


export const FilterTodos = () => {
    const [filter, setFilter] = useContext(FilterContext);
    
    const showDoneTodos = () => {
        setFilter(true);
    };

    const showNotDoneTodos = () => {
        setFilter(false);
    };

    const clearFilter = () => {
        setFilter(null);
    };

    console.log(filter);

    return (
        <div className="flex flex-col gap-4 mt-14 px-4 lg:px-0 lg:flex-row">
            <button className={`btn ${filter ? "btn-info" : "btn-primary"}`} onClick={showDoneTodos}>Done</button>
            <button className={`btn ${filter === false ? "btn-info" : "btn-primary"}`} onClick={showNotDoneTodos}>Not done</button>
            <button className="btn btn-primary" onClick={clearFilter}>Clear filter</button>
            <RemoveDone />
        </div>
    );
};
