import React, {Component} from 'react'
import axios from 'axios'
import CustomCard from './components/CustomCard'
import Navbar from './components/CustomNavbar'
class MainPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            flights: []
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
            <div>
                <Navbar/>
                
                {this.createCards(this.state.flights)}
                
            </div>
        )
    }
}
export default MainPage;