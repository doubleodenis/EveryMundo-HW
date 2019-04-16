import React from 'react'
import {Card, Button} from '@blueprintjs/core'
import { ELEVATION_1 } from '@blueprintjs/core/lib/esm/common/classes';
//@import "~normalize.css";
//@import "~@blueprintjs/core/lib/css/blueprint.css";
//@import "~@blueprintjs/icons/lib/css/blueprint-icons.css";
const CustomCard = (props) =>
{
    var type = '-';
    if (props.tripType == 'oneWay')
        type = 'One Way'
    else if (props.tripType == 'roundTrip')
        type = 'Round Trip'

    return (
        <Card interactive={true} elevation={ELEVATION_1}>
            <h5>{props.origin}-{props.destination}</h5>
            <h4>{type}</h4>
            <img src={props.routeCoverImage} alt="No Image" height="100" width="100"/>
            <p>{props.departureDate}-{props.returnDate}</p>
               {props.fareClass} {props.priceUSD}
            <Button>View Deal</Button>
        </Card>

    )
}
export default CustomCard;