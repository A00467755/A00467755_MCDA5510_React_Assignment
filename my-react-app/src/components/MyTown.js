import React, { Component } from "react"

import city from '../assets/IMG_6531.jpg';

import Weather from './Weather'


class MyTown  extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="myTown-container">

                <img alt='' width='500' src={city} />
                    <h3>I live in Halifax, NS</h3>
             
                    <h5>
                    Halifax is the capital and largest municipality of the Canadian province of Nova Scotia.
                    </h5>

                 { <Weather />  } 
            </div>
        )
    }
}

export default MyTown;
