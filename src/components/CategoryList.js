import React from "react";
import { useSelector } from "react-redux";

const CategoryList = () =>{

    const {categoryState} = useSelector (state=>state)
    console.log(categoryState.categories);
    return (
        <div>
            {

            }
        </div>
    )
}

export default CategoryList