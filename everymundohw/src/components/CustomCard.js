import React from 'react'
//import {Card, Button, H5, H4, H3} from '@blueprintjs/core'
//import {ELEVATION_3 } from '@blueprintjs/core/lib/esm/common/classes';
import {Card, Button} from '@material-ui/core/';
import '../styling/CustomCard.css'

function translateCity(city)
{
    const dictionary = {'LAS': 'Las Vegas', 'MIA': 'Miami', 'DTW': 'Detroit', 'MCO': 'Orlando',
     'FLL': 'Fort Lauderdale', 'RSW': 'Southwest Florida', 'PHL': 'Philadelphia', 'LGA': 'Queens'}

    return dictionary[city];
}

const CustomCard = (props) =>
{
    var type = '-';
    if (props.tripType == 'oneWay')
        type = 'One Way'
    else if (props.tripType == 'roundTrip')
        type = 'Round Trip'
    
    const origin = translateCity(props.origin)
    const dest = translateCity(props.destination)
    return (
        <Card 
        className="custom-card"
        style={{backgroundColor: '#fafafa'}}
        //classes={elevation4}
        >
            {/*Header of the Card*/}
            <div className="header-block">
                <h4 className="card-header"> {props.origin}-{props.destination}</h4>
                <h6 className="card-header"> {props.fareClass}</h6>
            </div>
            
             {/*Body of the card */} 
            <div className="card-body">
                
                <img src={props.routeCoverImage} alt="No Image" height="125" width="200"/>
                <div style={{padding:5}}>
                    <p style={{margin: 0, fontSize: 16}}>{origin} to</p>
                    <p style={{margin:0, fontSize: 20}}>{dest}</p>
                    <p style={{margin:0, fontSize: 16}}>{props.departureDate} - {props.returnDate}</p>
                </div>

                <div className="card-footer">
                    <div className="button-div">
                        <Button
                        className="footer-button"
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={props.submit}>
                            View Deal
                        </Button>
                    </div>
                   
                    <div className="fare-div">
                        <p style={{margin: 0, fontSize: 16}}>Fares from</p>
                        <h4 style={{margin: 0}}>${props.priceUSD}</h4>
                        <p style={{margin:0, fontSize: 16}}>{type}</p>
                    </div>
                </div>
            </div>
           
        </Card>

    )
}
export default CustomCard;