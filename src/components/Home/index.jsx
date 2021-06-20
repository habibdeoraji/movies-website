import React, { Component } from "react";
import axios from "axios";
import Card from "../Card/index";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: [],
            searchMovieList: []
        };
    }

    componentDidMount() {
        axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war").then((res) => {
            this.setState({ moviesList: res.data.Search });
            this.setState({ searchMovieList: res.data.Search });
        });
    }


    searchOnChange = (e) => {
        // console.log(e.target.value)
        const { moviesList } = this.state;
        const searchInput = e.target.value;
        if (searchInput.length === 0) {
            // console.log(searchInput.length, "hello")
            this.setState({ searchMovieList: moviesList })
        } else {
            const newList = [];
            moviesList.forEach((movie) => {
                (movie.Title.toLowerCase().search(searchInput.toLowerCase()) >= 0 &&
                    newList.push(movie))
            })
            console.log(newList);
            this.setState({ searchMovieList: newList })

        }
    }

    render() {
        const { searchMovieList } = this.state;
        return (
            <div style={{ backgroundColor: "#383a3d", minHeight: "100vh" }}>
                <input style={searchInputStyle} placeholder="Search by title" onChange={this.searchOnChange} />
                <div
                    style={cardContainer}
                >
                    {searchMovieList.map((movie) => (
                        <Card key={movie.imdbID} details={movie} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;

const searchInputStyle = {
    width: "70%",
    height: "40px",
    margin: "30px 15%",
    padding: "0px 10px",
    backgroundColor: "#d3d3d3",
    border: "1px solid black",
    outline: "none",
    fontSize: "24px",
    borderRadius: "5px"

};


const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    margin: "0px auto",
    padding: "10px 0 20px 0",
    justifyContent: "center",
}