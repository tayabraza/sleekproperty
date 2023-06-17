import React, {useState} from 'react';
import { Route, Routes, useParams } from "react-router-dom";

function CardDetail({propertyDetail, sidebar}){

    const [property, setProperty] = useState([]);
    const { id } = useParams();

    const fetchProperties = async () => {

        const response = await fetch("/db.json");
        const responseJSON = await response.json();
        const filteredProperty = responseJSON.filter(property => property.id === Number(id))

        return setProperty(filteredProperty[0]);
    }
    
    fetchProperties();

    return (

        <div className='linear-tab'>

            <article className='property-detail'>

                <div className="property-container">

                    <span className="property-id">{propertyDetail.id || property.id}</span>

                    <img src={propertyDetail.image || property.image} alt={'Property ' + propertyDetail.id || property.id} className="property-image"/>

                    <span className="property-type">
                        {propertyDetail.type || property.type + ' ' + property.typeB}
                    </span>

                    <h3 className="property-price">
                        £{propertyDetail.price || property.price}
                    </h3>
                    
                    <h4 className="property-address">
                        {propertyDetail.address || property.address}
                    </h4>

                    <p className="property-description">
                        {propertyDetail.description || property.description}
                    </p> 

                </div>

            </article>

            <div className="sidebar">

                <h2 className="sleek-heading" >Popular Properties</h2>
                <div className='linear'>
                    <Routes>
                        <Route path="*" element={sidebar} />
                    </Routes>
                </div>

            </div>

        </div>

    )

}

export default CardDetail;