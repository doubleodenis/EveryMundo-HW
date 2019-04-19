import React from 'react';
import {Dialog, DialogContent} from '@material-ui/core/';
import '../styling/PopupForm.css'
import FlightForm from './FlightForm'
const PopupForm = (props) =>
{

    return (
        <Dialog
        aria-labelledby="flight-form"
        aria-describedby="show-flight-route-info"
        open={props.open}
        onClose={props.onClose}
        maxWidth="md"
        //fullWidth={true}
        align="center"
        className="centered"
        >
          <DialogContent>
            <FlightForm 
            flight={props.flight}
            onClose={props.onClose}
            />
          </DialogContent>
        </Dialog>
          

    )
}

export default PopupForm;