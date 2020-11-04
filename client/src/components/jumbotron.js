import React from 'react';
import {Jumbotron} from 'reactstrap';

const Jumbo = () => {
 return (
    <Jumbotron className="jumbotron">
    <div className="jumboBox">
    </div>
    <div className="container">
    <div className="row">
    <div className="jumboNames col-4">
        <div className="jumbos">
            Feel
        </div>
        <div className="jumbos">
            Love
        </div>
        <div className="jumbos">
            Shot
        </div>
    </div>
    <div className="jumboNames col-8">
           Make Screenshot of an URL
    </div>
    <div className="jumboBalls">
        <img src="./bubles.png"  alt="."></img>
        <img src="./bubles.png"  alt="."></img>
        <img src="./bubles.png"  alt="."></img>
        <img src="./bubles.png"  alt="."></img>
        <img src="./bubles.png"  alt="."></img>
    </div>
    </div>
    </div>
</Jumbotron>
 )
} 


export default Jumbo;