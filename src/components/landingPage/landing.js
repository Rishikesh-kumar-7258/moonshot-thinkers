import React, { Component } from 'react';
import { Navbar } from './navbar';
import './landing.css';
import { CardDetails, AboutCards } from './cardDetails';
import Rishikesh from '../ProfilePhoto/i1.png';
import Adarsh from '../ProfilePhoto/i2.jpeg';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Images : [Rishikesh, Adarsh]
        };

    }
    render() {
        return (
            <div>
                <Navbar />
                <RenderCard />
                <RenderAboutCards Images={this.state.Images}/>
            </div>
        )
    }
}

const RenderCard = () => {
    const cards = CardDetails.map(element => {
        return (
            <div key={element.id} className="col-6 p-3">
                <div className="text-center border border-success p-3">
                    <h2 className="text-decoration-underline">{element.heading}</h2>
                    <p>{element.text}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                {cards}
            </div>
        </div>
    )
}

const RenderAboutCards = ({Images}) => {
    const cards = AboutCards.map((element, index) => {
        
        return(
            <div key={element.id} className="col-sm-12 col-md-6">
                <div className="row">
                    <div className="col-6">
                        <img src={Images[index]}  alt={element.name} className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <h3>{element.name}</h3>
                        <p>{element.about}</p>
                        <div className="d-flex flex-column">
                            <h4>Contact details</h4>
                            <div>
                                <a href={element.linkein} className="btn btn-primary">LinkedIn</a>
                                <a href={element.email} className="btn btn-primary mx-3">Email</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                {cards}
            </div>
        </div>
    )
}

export default Landing;