import React, {Component} from 'react'
import {ListItem, Divider, Radio, FormControlLabel,
    Card, Button, Typography, Grid,} from '@material-ui/core'
import '../styling/Search.css'

class Search extends Component 
{
    constructor(props)
    {
        super(props);
        console.log(props.location.state.data);
        var flight2 = {}
        var routes2 = {}
        //Make sure that it is round trip before accessing array
        if(props.location.state.data.length === 2)
        {
            flight2 = props.location.state.data[1];
            routes2 = flight2.routes;
        }

        this.state = {
            flight1: props.location.state.data[0],
            flight2: flight2,
            routes1: props.location.state.data[0].routes,
            routes2: routes2,

            roundTrip: props.location.state.data[0].tripType === 'roundTrip',
            
            //Used for the radios
            selectedFlight1: 0,
            selectedFlight2: 0,
            //Used to submit the data to the next page
            selectedRoute1: {},
            selectedRoute2: {}
        }
    }


    /*Checks the selected radio and selects the route based off the radio selected. */
    handleRadio = (flightNum, index) =>
    {
        
        if(flightNum === 1)
        {
            console.log(this.state.routes1[index])
            this.setState({
                selectedFlight1: index,
                selectedRoute1: this.state.routes1[index]
            })
        }
        else if(flightNum === 2)
        {
            this.setState({
                selectedFlight2: index,
                selectedRoute2: this.state.routes2[index]
            })
        }
        else
        {
            console.error('Error in handleRadio')
        }
    }

    /*Go back to the main flights page. */
    goBack = (e) =>
    {
        e.preventDefault();
        window.location.href = "/";
    }

    /*Displays all the information for the departing flights. */
    displayOriginFlight()
    {
        const list = this.state.routes1.map((elem, index) =>
            <div key ={index} style={{width: '1250'}}>
                <ListItem style={{width: '1250'}}>
                    <Card className="search-card">
                    <Grid container style={{height: 100}} alignItems="center" alignContent="center">
                            
                            <Grid item xs={3} style={{padding: 10}}> 
                                <Typography variant="subtitle1" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                                    <b>{this.state.flight1.fareClass}</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}> 
                                <Typography variant="subtitle2" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                                    Departure Time: {elem.departureTime}
                                </Typography>
                            </Grid>
                            <Grid item xs ={3}>
                                <Typography variant="subtitle2" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                                    Arrival Time: {elem.arrivalTime}
                                </Typography>
                            </Grid>
                    
                            <Grid item 
                            style={{padding: 15, float: 'right'}}>
                              <FormControlLabel 
                                //value="oneWay"
                                label={`$${elem.priceUSD} USD`} 
                                onChange ={() => {this.handleRadio(1, index)}} //flight number 1
                                control={
                                    <Radio 
                                    checked = {this.state.selectedFlight1 === index}
                                    color="primary"/>
                                    } 
                                />
                            </Grid>
                       
                    </Grid>
                    </Card>
                </ListItem>
               
            </div>
        )
        return list
    
    }
    /*Displays a list of all the returning flights. */
    displayReturningFlight = () =>
    {
        const list = this.state.routes2.map((elem, index) =>
            <div key ={index} style={{width: '1250'}}>
            <ListItem style={{width: '1250'}}>
                <Card className="search-card">
                <Grid container style={{height: 100}} alignItems="center" alignContent="center">
                            
                            <Grid item xs={3} style={{padding: 10}}> 
                                <Typography variant="subtitle1" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                                    <b>{this.state.flight1.fareClass}</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}> 
                                <Typography variant="subtitle2" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                                    Departure Time: {elem.departureTime}
                                </Typography>
                            </Grid>
                            <Grid item xs ={3}>
                                <Typography variant="subtitle2" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                                    Arrival Time: {elem.arrivalTime}
                                </Typography>
                            </Grid>
                    
                            <Grid item 
                            style={{padding: 15, float: 'right'}}>
                              <FormControlLabel 
                                //value="oneWay"
                                label={`$${elem.priceUSD} USD`} 
                                onChange ={() => {this.handleRadio(2, index)}} //flight number 2
                                control={
                                    <Radio 
                                    checked = {this.state.selectedFlight2 === index}
                                    color="primary"/>
                                    } 
                                />
                            </Grid>
                       
                    </Grid>
                </Card>
            </ListItem>
        
        </div>
        )
        
        return list
    }

    chooseFlight = (e) =>
    {
        e.preventDefault();
        alert('This feature is not implemented yet.');
    }

    render()
    {
        return (
            <div>
                <Typography gutterBottom variant="h3" color="primary" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                    Search Results
                </Typography>
                <Typography gutterBottom variant="h4" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                    Departing Flight {this.state.flight1.departureDate}
                </Typography>
                <Typography gutterBottom variant="h5" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                    {this.state.flight1.origin} - {this.state.flight1.destination}
                </Typography>
                {this.displayOriginFlight()}
                <br/><br/>
                {this.state.roundTrip ?
                <div>
                    <Divider/>
                    <Typography gutterBottom variant="h4" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                        Returning Flight {this.state.flight2.departureDate}
                    </Typography>
                    <Typography gutterBottom variant="h5" style={{fontFamily: "segoe ui,serif,helvetica"}}>
                        {this.state.flight2.origin} - {this.state.flight2.destination}
                    </Typography> 
                </div>
                : ''}
                {this.state.roundTrip ? this.displayReturningFlight() : ''}
                <br/>
                
                <Button
                style={{margin:15}}
                className="choose-flight"
                variant="contained"
                size="medium"
                color="primary"
                onClick={e => {this.chooseFlight(e)}}
                >
                Choose Flight
                 </Button>

                 <Button
                style={{margin: 15}}
                className="choose-flight"
                variant="contained"
                size="medium"
                color="default"
                onClick={e => {this.goBack(e)}}
                >
                Back
                 </Button>
            </div>
        )
    }
}
export default Search;