import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import add from "../assets/imgs/add1.png";
import "../assets/styles/listpeople.css"

const ListPeople = () => {
    const { personState, categoryState } = useSelector(state => state);


    return (
        <div className="personContainer container mt-3">
            <div className="container searchContainer">
                <input
                    className="form-control"
                    type="text"
                    placeholder="search for people ..."
                />
            </div>
            <div className="d-flex justify-content-center my-1">
                <Link
                    to={""}
                    className="btn btn-outline-info ">
                    Add Person <img
                        src={add}
                        style={{
                            width: "35px",
                            margin: "5px"
                        }} alt="" />
                </Link>
            </div>
            <div className="validationContainer">
                {
                    categoryState.categories.lenght === 0 && (
                        <p>A category must be added first!</p> >
                        <Link
                            className="btn btn-success"
                            to={"/add-category"}>Add Category</Link>
                    )
                }
            </div>
            <div>
                <table className="table table-light table-striped table-hover table-sm caption-top table-bordered border-info">
                <caption>List of People</caption>
                    <thead className="table-warning text-center">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Categori</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center table-group-divider">
                        {
                            personState.people.map((person, index) => {
                                const personCat = categoryState.categories.find(item => item.id === person.categoryId);
                                return (
                                    <tr 
                                    className="align-middle"
                                    key={person.id}>
                                        <th>{index + 1}</th>
                                        <th>{person.name}</th>
                                        <th>{personCat.name}</th>
                                        <th className="d-flex justify-content-around">
                                            <button className="btn btn-outline-danger">Delete</button>
                                            <Link
                                                className="btn btn-outline-warning">Edit</Link>
                                            <Link
                                                className="btn btn-outline-info">Info</Link>

                                        </th>



                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListPeople