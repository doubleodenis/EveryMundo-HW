import React, {Component} from 'react'
import axios from 'axios'
import CustomCard from './components/CustomCard'
import PopupForm from './components/PopupForm';
import './styling/Main.css'
import { Typography } from '@material-ui/core';

class MainPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            flights: [],
            showForm: false,
            selectedFlight: {}
        }
    }

    fetchFlightRoutes = () => 
    {
        axios.get('https://everymundointernship.herokuapp.com/popularRoutes/UT77OX32RM70')
        .then(res =>
            {
                this.setState({
                    flights: res.data
                })
            })
    }
    
    handleOpen = (e, index) => 
    {
        
        this.setState({ 
            showForm: true,
            selectedFlight: this.state.flights[index]
        });
    };

    handleClose = () =>
    {
        this.setState({ showForm: false });
    };
    
    

    createCards = (routes) =>
    {
        const cards = routes.map((elem, index) =>
            <CustomCard key = {index}
            destination = {elem.destination}
            origin = {elem.origin}
            tripType={elem.tripType}    
            departureDate={elem.departureDate}
            returnDate = {elem.returnDate}
            routeCoverImage = {elem.routeCoverImage}
            fareClass = {elem.fareClass}
            priceUSD = {elem.priceUSD}
            submit = {e => {this.handleOpen(e, index)}}
            />
        )

        return (
            <div>
                {cards}
            </div>
        )
    }
   
    componentWillMount()
    {
        this.fetchFlightRoutes();
    }
    render()
    {
        return(
            <div className="">
                <div className="cards-block">

                    <Typography
                    className="popular-routes-header"
                    variant="h5"
                    color="primary"
                    style={{fontFamily: 'segoe ui, serif, helvetica'}} >
                        <b>Popular Routes</b>
                    </Typography>

                    {this.createCards(this.state.flights)}

                    <div>
                    
                        <PopupForm 
                        open={this.state.showForm}
                        onClose={this.handleClose}
                        flight={this.state.selectedFlight}
                        /> 
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default MainPage;