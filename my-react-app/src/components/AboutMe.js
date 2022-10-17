import React, { Component } from "react"

import self_photo from '../assets/self_photo.jpg';


class AboutMe  extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="aboutMe-container">
                <img alt='' height='500' src={self_photo} />
                <div>
                    <h3>Hi, I am Wa</h3>
                    
                    <h5>I am now pursing MCDA program in Saint Mary University.</h5>

                    <h5>I attend this course becasue I think data science is interesting and would like to change my career to this field.</h5>
                </div>
            </div>
        )
    }
}

export default AboutMe;
