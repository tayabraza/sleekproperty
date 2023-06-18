import React, {useState, useEffect} from 'react';
import { Route, Routes, useParams } from "react-router-dom";

function CardDetail({propertyDetail, sidebar}){

    const [property, setProperty] = useState([]);
    const [album, setAlbum] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const fetchProperties = async () => {

            const response = await fetch("/db.json");
            const responseJSON = await response.json();
            const filteredProperty = responseJSON.filter(property => property.id === Number(id))
            const album = await filteredProperty[0].album;
            setAlbum(album);

            return setProperty(filteredProperty[0]);
        }
        
        fetchProperties();

    }, [id]);

    let albumCheck = document.querySelector('.album');

    setTimeout(function(){

        if ( window.location.pathname.includes('property') && albumCheck ) {

            const slider = document.querySelector('.album');
            let mouseDown = false;
            let startX, scrollLeft;
            
            let startDragging = function (e) {
            mouseDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            };
            let stopDragging = function (event) {
            mouseDown = false;
            };
            
            slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) { return; }
            const x = e.pageX - slider.offsetLeft;
            const scroll = x - startX;
            slider.scrollLeft = scrollLeft - scroll;
            });
            
            // Add the event listeners
            slider.addEventListener('mousedown', startDragging, false);
            slider.addEventListener('mouseup', stopDragging, false);
            slider.addEventListener('mouseleave', stopDragging, false);

        }

    }, 500);
    

    if ( propertyDetail.type || property.type ){
        document.querySelector('main').style.visibility = 'visible';
    } else {
        document.querySelector('main').style.visibility = 'hidden';
    }

    const thumbnailToggle = (event) => {

        let propertyThumbnail = document.querySelector('.property-container > img').src;
        let albumThumbnail = event.currentTarget.src;

        document.querySelector('.property-container > img').src = albumThumbnail;
        event.currentTarget.src = propertyThumbnail;

    }

    return (

        <div className='linear-tab'>

            <article className='property-detail'>

                <div className="property-container">

                    <span className="property-id">{propertyDetail.id || property.id}</span>

                    <img src={propertyDetail.image || property.image} alt={'Property Thumbnail'} className="property-image" lazy="true" />

                    <div className="album">
                        {
                            propertyDetail.album ?
                            propertyDetail.album.map( (img, index) => <img src={img.src} alt={'Album Thumbnail ' + Number(index + 1)} key={Number(index + 1)} className="album-image" onClick={thumbnailToggle} lazy="true" /> ) :
                            album.map( (img, index) => <img src={img} alt={'Album Thumbnail ' + Number(index +1)} key={Number(index +1)} className="album-image" onClick={thumbnailToggle} lazy="true" /> )
                        }
                    </div>

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