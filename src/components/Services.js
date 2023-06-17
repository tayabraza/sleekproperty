import servicesImage from '../img/services.jpg';

function Services(){

    return (

        <div className="page">

            <h1 className="sleek-heading" >Services</h1>

            <div className="property-container">

                <p style={{"margin": "30px auto"}}>
                    Sleek Property Management offer an exemplary service to local landlords. Our property management team is always at hand when it comes to day to day management of your property including finding and retaining your tenant, collecting rent and overseeing maintenance and compliancy. We make sure your property is regularly inspected, monitored and maintained to your needs, standards and expectations. 
                </p>

                <div className='flex-container'>

                    <article>

                        <ol>
                            <li>	
                                Spread the cost: We charge monthly fees. This means the cost of letting your property is spread over the term of the rental agreement. 
                            </li>
                            <li>
                                Dedicated property manager: Our property managers have an excellent relationship with the landlords who ensure tenants have a dedicated point of contact who knows the property.
                            </li>
                            <li>
                                Professional and qualified team: we are up to date with requirements which means landlords can rest assured they are in safe hands. 
                            </li>
                            <li>
                                Swift response time: We make sure we respond to any urgent queries promptly making sure the issue is resolved in good time. 
                            </li>
                        </ol>
                    
                    </article>

                    <div>
                        <img src={servicesImage} alt='Property' />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Services;