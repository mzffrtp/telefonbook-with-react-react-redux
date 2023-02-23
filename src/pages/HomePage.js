import React from "react";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header"

const HomePage = () =>{
    return(
        <div>
            <Header whichPage={"home"}/>
            <CategoryList />
        </div>
    )
}

export default HomePage