import feesImage from '../img/fees.jpg';

function Fees(){
    return (

        <div className="page">

            <h1 className="sleek-heading" >Our Fees</h1>

            <div className="property-container">

                <h3>Property management service - 10% which includes the following:</h3>

                <div className='flex-container'>

                    <article>

                        <ul>
                            <li> Inspection every 6 months. </li>
                            <li> Collect rent received every month (rent collection service). </li>
                            <li> Tenants’ deposits will be held by DPS (Deposit Protection Service). </li>
                            <li> Pursue non-payment of rent, provide advice on rent arrears actions, and agree with tenants' collection of any shortfall of rent and payment method. </li>
                            <li> Deduct and hold tax if required. </li>
                            <li> Arrange routine repairs and instruct approved contractors. </li> 
                            <li> Arrange for quotations for large works, and equipment replacement and discuss with you the various options. </li> 
                            <li> Hold keys throughout the tenancy term. </li>
                            <li> Upon check-out, we request proof of payment for all utilities, ensuring there are no outstanding bills. Deposit return to be negotiated. </li>

                        </ul>

                    </article>

                    <div>
                        <img src={feesImage} alt='Property key' />
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Fees;