import React, {useState, useEffect, lazy, Suspense} from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
const Card = lazy(() => import('./Card.js'));
const CardDetail = lazy(() => import('./CardDetail.js'));
const Fees = lazy(() => import('./Fees.js'));
const Services = lazy(() => import('./Services.js'));
const Reviews = lazy(() => import('./Reviews.js'));
const Contact = lazy(() => import('./Contact'));
const Error = lazy(() => import('./Error.js'));


function Main(){

    const [property, setProperty] = useState([]);
    const [propertyDetail, setPropertyDetail] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

    const fetchData = async () => {
    
        const response = await fetch("/db.json");
        const responseJSON = await response.json();
    
        return setProperty(responseJSON);

    }

    fetchData();
    }, []);

    const fullView = (event) => {
        const propertyDetail = {
            id: event.currentTarget.querySelector('.property-id').innerText,
            image: event.currentTarget.querySelector('.property-image').src,
            album: Array.from(event.currentTarget.querySelectorAll('.album > img')),
            type: event.currentTarget.querySelector('.property-type').innerText,
            price: event.currentTarget.querySelector('.property-price').innerText,
            address: event.currentTarget.querySelector('.property-address').innerText,
            description: event.currentTarget.querySelector('.property-description').innerText
        }
        let url = '/property/' + propertyDetail.id;
        navigate(url);
        setPropertyDetail(propertyDetail);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
                    <Suspense fallback={<div className='loading'>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={recent} />
                        </Routes>
                    </Suspense>
                </div>

                <h2 className="sleek-heading" >All Properties</h2>
                <div className='linear'>
                    <Suspense fallback={<div className='loading'>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={all} />
                        </Routes>
                    </Suspense>
                </div>
                
            </main>
        
        )
    
    } else {

        return (

            <main>
                <Suspense fallback={<div className='loading'>Loading...</div>}>
                    <Routes>
                        <Route path="property/:id/*" element={ <CardDetail propertyDetail={propertyDetail} sidebar={popular}/> } />
                        <Route path="fees" element={<Fees />} />
                        <Route path="services" element={<Services />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Suspense>
            </main>

        )

    }



}

export default Main;