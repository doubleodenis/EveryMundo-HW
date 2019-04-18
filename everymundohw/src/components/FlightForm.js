import React, {Component} from 'react'
import {TextField, RadioGroup, Radio, FormControl, InputLabel, Button,
     FormControlLabel, Select, MenuItem, Input, FilledInput, Grid} from '@material-ui/core'
import Axios from 'axios';


class FlightForm extends Component
{
    constructor(props)
    {
        super(props);

        //initializing state with props, since the user can change the form
        this.state = {
            tripType: props.flight.tripType,
            origin: props.flight.origin,
            destination: props.flight.destination,

            //the dates returned from API need to be re-formatted for the TextField
            departureDate: this.formatDate(props.flight.departureDate),
            returnDate: this.formatDate(props.flight.returnDate),

            promoCode: '',
            passengers: 1
        }
    }

    //Used to re-format the dates that are returned from the API 
    formatDate = (date) =>
    {
        if(date)
        {
            //Currently date is imported in format "m/dd/yyyy"
            //We need date to be formatted as yyyy-mm-dd
            const dateList = date.split("/"); //[0] = month ;[1] = date ;[2] = year
            if(dateList[0].length === 1) //if month format is NOT 01, 02, etc.
                dateList[0] = "0" + dateList[0];
            
            const newList = [dateList[2], dateList[0], dateList[1]]
            
            return (newList.join("-"));
        }
        else   
            return
        
    }
    
    unformatDate = (date) =>
    {
        if(date)
        {
            const dateList = date.split("-");
            const newList = [dateList[1], dateList[2], dateList[0]];

            return (newList.join("/"))
        }
        else
            return
    }
    
    handleInputChange = (e) =>
    {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        })
    }
    handleRadio = (e) =>
    {
        this.setState({
            tripType: e.target.value
        })
    }
    //submit all the information to the API and make a search request
    submitForm = (e) =>
    {
        e.preventDefault(); //for testing purposes

        const depart = this.unformatDate(this.state.departureDate);
        const ret = this.unformatDate(this.state.returnDate);
        if(this.state.destination && this.state.origin && depart)
        {
            //All fields are non-empty here and there is a round trip return date
            if(this.state.promoCode && (this.state.tripType === 'roundTrip' && ret)) //WORKS
            {
                Axios.post('https://everymundointernship.herokuapp.com/search/UT77OX32RM70',
                {
                    tripType: this.state.tripType,
                    destination: this.state.destination,
                    origin: this.state.origin,
                    departureDate: depart,
                    returnDate: ret,
                    passengerCount: this.state.passengers,
                    promoCode: this.state.promoCode
                })
                .then(res =>
                {
                    console.log(res.data);
                })
            }
            else if(this.state.promoCode) //no return date and there is a promo code
            {
                Axios.post('https://everymundointernship.herokuapp.com/search/UT77OX32RM70',
                {
                    tripType: this.state.tripType,
                    destination: this.state.destination,
                    origin: this.state.origin,
                    departureDate: depart,
                    //returnDate: ret,  //no return date needed
                    passengerCount: this.state.passengers,
                    promoCode: this.state.promoCode
                })
                .then(res =>
                {
                    console.log(res.data);
                })
            }
            else //no return and no promo code
            {
                console.log('no return or promo')
                Axios.post('https://everymundointernship.herokuapp.com/search/UT77OX32RM70',
                {
                    tripType: this.state.tripType,
                    destination: this.state.destination,
                    origin: this.state.origin,
                    departureDate: depart,
                    //returnDate: ret,  //no return date needed
                    passengerCount: this.state.passengers,
                    //promoCode: this.state.promoCode
                })
                .then(res =>
                {
                    console.log(res.data);
                })
            }
        }
        
    }
   
    render()
    {
        return(
 
        <form>
            <Grid container style={{margin:15}}>
                <Grid item style={{padding:0, float: 'left'}}>
                    <FormControlLabel 
                    value="oneWay"
                    label="One Way" 
                    onChange ={e => {this.handleRadio(e)}}
                    control={
                        <Radio 
                        checked = {this.state.tripType === "oneWay"}
                        name="tripType"
                        color="primary"/>
                        } 
                     />
                    <FormControlLabel 
                    value="roundTrip"
                    label="Round Trip" 
                    onChange ={e => {this.handleRadio(e)}}
                    control={
                        <Radio 
                        checked = {this.state.tripType === "roundTrip"}
                        name="tripType"
                        color="primary"/>
                        } 
                     />
                </Grid>
            </Grid>
            <Grid container style={{margin:15}}>
                <Grid item style={{padding:10, float: 'left'}}>
                    <TextField
                    required
                    margin="normal"
                    label="From"
                    type="text"
                    variant="filled"
                    name="origin"
                    value ={this.state.origin}
                    onChange={(e)=>{this.handleInputChange(e)}}
                    />
                </Grid>
                <Grid item style={{padding:10, float: 'right'}}>
                    <TextField
                    required
                    margin="normal"
                    label="To"
                    type="text"
                    variant="filled"
                    name="destination"
                    value={this.state.destination}
                    onChange={(e) => {this.handleInputChange(e)}}
                    />
                </Grid>
            </Grid>
            <Grid container style={{margin:15}}>
                <Grid item style={{padding:10, float: 'left'}}>
        
                <TextField
                required
                label="Departure"
                style={{width: 275}}
                margin="normal"
                type="date"
                variant="filled"
                name="departureDate"
                value={this.state.departureDate}
                onChange={(e) => {this.handleInputChange(e)}}
                />
                </Grid>
                <Grid item style={{padding:10, float: 'right'}}>
                <TextField
                required={this.state.tripType === 'roundTrip'}
                label={this.state.tripType === 'roundTrip' ? "Return" : ''}
                disabled={this.state.tripType === 'oneWay'}
                style={{width: 275}}
                margin="normal"
                type="date"
                variant="filled"
                name="returnDate"
                value={this.state.returnDate}
                onChange={(e) => {this.handleInputChange(e)}}
                />
             </Grid>
            </Grid>

            <Grid container style={{margin:15}}>
                <Grid item style={{padding:10}}>
                    <TextField
                    variant="filled"
                    id="standard-number"
                    label="Passengers"
                    name="passengers"
                    value={this.state.passengers}
                    onChange={e => {this.handleInputChange(e)}}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    />

                </Grid>
                <Grid item style={{padding:10, float: 'right'}}>
                <TextField
                margin="normal"
                label="Promo Code"
                type="text"
                variant="filled"
                name="promoCode"
                value={this.state.promoCode}
                onChange={(e) => {this.handleInputChange(e)}}
                />
            
             </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Button 
                    onClick={this.props.onClose} 
                    color="primary">
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                    onClick={(e) => {this.submitForm(e)}} 
                    color="primary">
                        Choose Flight
                    </Button>
                </Grid>
            </Grid>
        </form>

        )
    }
}

export default FlightForm;