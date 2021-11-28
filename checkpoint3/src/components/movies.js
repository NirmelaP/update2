import React from "react";
import axios from "axios";

class Movies extends React.Component
{
    state={
        movieList:[]
    }
    componentDidMount(){
        axios.get('./checkpoint3/movie.json')
        .then(res =>{
            console.log(res.data.Movie);
            this.setState({movieList:res.data.Movie})
        })
    }

    render()
    {
        return(
            <div className="mainContainer">
                <h1>Movies</h1>
                <ul className ="myList"> 
                {this.state.movieList.map(film => (<li key={film.Title}>{film.Title} |
                Year:{film.Year} |
                Director:{film.Director} |
                Land:{film.Land} |
                Main Actors:{film.Actors[0].MainActors} |
                Suport Actors:{film.Actors[0].SupportActors}
                </li>))}
                </ul>
                

            </div>
        )
    }
        
      
}
  
  export default Movies;
        