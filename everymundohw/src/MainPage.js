import React, {Component} from 'react'
import axios from 'axios'
import CustomCard from './components/CustomCard'
import Navbar from './components/CustomNavbar'
import PopupForm from './components/PopupForm';
import './styling/Main.css'

class MainPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            flights: [],
            showForm: false
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

    handleOpen = () => 
    {
        this.setState({ showForm: true });
        //console.log('handle open')
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
            submit = {this.handleOpen}
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
            <div className="main-div">
                <div className="cards-block" style={{}}>

                    <h2 className="popular-routes-header">Popular Routes</h2>

                    {this.createCards(this.state.flights)}

                    <div style={{verticalAlign: 'middle'}}>
                        <PopupForm 
                        open={this.state.showForm}
                        onClose={this.handleClose}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default MainPage;