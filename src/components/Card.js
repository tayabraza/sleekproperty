
function Card({card, onCardClick}){

    return (

            <article className="property" onClick={onCardClick}>

                <div className="property-container">

                    <span className="property-id">{card.id}</span>

                    <img src={card.image} alt={'Property Thumbnail'} className="property-image" lazy="true" />

                    <div className="album" style={{'display': 'none'}}>
                        {card.album.map( (img, index) => <img src={img} alt={'Album image ' + Number(index + 1)} key={Number(index + 1)} lazy="true" /> )}
                    </div>

                    <span className="property-type">
                        {card.type} {card.typeB}
                    </span>

                    <h3 className="property-price">
                        £{card.price}
                    </h3>
                    
                    <h4 className="property-address">
                        {card.address}
                    </h4>

                    <p className="property-description">
                        {card.description}
                    </p> 

                </div>

            </article>

    )

}

export default Card;