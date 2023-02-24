import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../assets/styles/categorylist.css";
import { Link } from "react-router-dom";

const CategoryList = () => {

    const { categoryState } = useSelector(state => state);
    const [selectedCategory, setSelectedCategory] = useState({
       
      })

    return (
        <div className="categoriesContainer">
            <div className="categoriesContainer_wrapper">
                <div className="categoriesContainer_wrapper_catlist">
                    {
                        categoryState.categories.length === 0 && (
                            <p>
                                No categories recorded yet!
                            </p>
                        )
                    }
                    <p
                        onClick={() =>
                            setSelectedCategory({ id: "0", name: "ALL" })}
                        className={
                            `categoriesContainer_wrapper_catlist-item ${selectedCategory.id === "0" ? "categoriesContainer_wrapper_catlist-itemActive" : ""}`
                        }
                    >ALL</p>
                    {
                        categoryState.categories.map(category => (
                            <p
                                key={category.id}
                                onClick={() => setSelectedCategory(category)}
                                className={
                                    `categoriesContainer_wrapper_catlist-item ${selectedCategory.id === category.id ? "categoriesContainer_wrapper_catlist-itemActive" : ""}`}
                            >{category.name}</p>
                        ))
                    }
                </div>
                <div>
                    <Link
                    to={"/add-category"}
                    className="btn btn-outline-success m-3">Add Category</Link>
                    <Link
                    className="btn btn-outline-primary my-3">Category Actions</Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryList