import React from "react";
import{Link} from 'react-router-dom';


function Navbar()
{
    return(
    <div>
        <div className="navbar">
            <div className="container">
                <ul className="list">
                    
                      <Link to="/home">Home</Link>
                      <Link to="/movies">Movies</Link>
                    
                </ul>
            </div>
        </div>

    </div>
    );
}
export default Navbar;