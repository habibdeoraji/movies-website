import React, { Component } from 'react';
import "./carddetails.css"





class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMovie: this.props.location.state
        }
    }


    render() {
        const { Title, Year, Poster, Type } = this.state.currentMovie;
        console.log(Title)

        return (
            <div className="card-details-page">
                <div className="card_details_wrapper">
                    <img className="poster_image" src={Poster} alt="Card-cap" />
                    <div>
                        <h3>Title:{Title}</h3>
                        <p> Type: {Type}</p>
                        <p> Year: {Year}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDetails;