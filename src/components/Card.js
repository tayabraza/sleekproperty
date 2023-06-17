
function Card({card, onCardClick}){

    return (

            <article className="property" onClick={onCardClick}>

                <div className="property-container">

                    <span className="property-id">{card.id}</span>

                    <img src={card.image} alt={'Property ' + card.id} className="property-image" />

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