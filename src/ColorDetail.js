import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./ColorDetail.css"


const ColorDetail = () => {
    /** pulls list of colors from local storage */
    const colors = JSON.parse(localStorage.getItem("colors"))
    /** pulls selected color from params */
    const { color } = useParams();
    /** defines hex code for background color */
    const hex = colors[color];

    /** if color not found in list or invalid param - redirect to colors list /colors */
    if (!color || !hex) return <Navigate to="/colors" replace />
    
    return (
        <div className="ColorDetail" style={{ backgroundColor: hex }}>
            <div className="ColorDetail-header">
                <h1 className="ColorDetail-title">{color}</h1>
                <Link to="/colors">Back</Link>
            </div>
            
        </div>
    )
};

export default ColorDetail;