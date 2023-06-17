import React, {useState} from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Card from './Card.js';
import CardDetail from './CardDetail.js';
import Fees from './Fees.js';
import Services from './Services.js';
import Reviews from './Reviews.js';
import Contact from './Contact';
import Error from './Error.js';


function Main(){

    const [property, setProperty] = useState([]);
    const [propertyDetail, setPropertyDetail] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const fetchData = async () => {
    
        const response = await fetch("/db.json");
        const responseJSON = await response.json();
    
        return setProperty(responseJSON);

    }

    fetchData();

    const fullView = (event) => {
        const propertyDetail = {
            id: event.currentTarget.querySelector('.property-id').innerText,
            image: event.currentTarget.querySelector('.property-image').src,
            type: event.currentTarget.querySelector('.property-type').innerText,
            price: event.currentTarget.querySelector('.property-price').innerText,
            address: event.currentTarget.querySelector('.property-address').innerText,
            description: event.currentTarget.querySelector('.property-description').innerText
        }
        let url = '/property/' + propertyDetail.id;
        navigate(url);
        setPropertyDetail(propertyDetail)
    }

    const recent = [];
    const popular = [];
    const all = [];

    for (let i = 0; i < property.length; i++){

        if (  i < 4 ) {
            recent.push(<Card key={property[i]['id']} card={property[i]}  onCardClick={fullView}/>)
        }
        if ( i > 3 && i < 8 ) {
            popular.push(<Card key={property[i]['id']} card={property[i]}  onCardClick={fullView}/>)
        }
        if (  i > 3 ) {
            all.push(<Card key={property[i]['id']} card={property[i]}  onCardClick={fullView}/>)
        }
    }


    if ( location.pathname === '/') {

        return(

            <main>

                <h1 className="sleek-heading" >Recently Added Properties</h1>
                <div className='linear'>
                    <Routes>
                        <Route path="/" element={recent} />
                    </Routes>
                </div>

                <h2 className="sleek-heading" >All Properties</h2>
                <div className='linear'>
                    <Routes>
                        <Route path="/" element={all} />
                    </Routes>
                </div>
                
            </main>
        
        )
    
    } else {

        return (

            <main>
                
                <Routes>
                    <Route path="property/:id" element={ <CardDetail propertyDetail={propertyDetail} sidebar={popular}/> } />
                    <Route path="fees" element={<Fees />} />
                    <Route path="services" element={<Services />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>

            </main>

        )

    }



}

export default Main;