import React from "react";
import { Component } from "react";
import "./Paragraph.css";

export class Paragraph extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {count: 0};
    }

    handleChange = (event) => {
        const str = event.target.value;
        // Use a regular expression to split the input into words
        const words = str.match(/\S+/g) || []; // \S+ matches non-space characters

        this.setState({
            count: words.length,
        });
    }
    render()
    {
        return(
            <center>
                <div className="box">
                    <h1>Responsive Paragraph Word Counter</h1>
                    <textarea name="para" id="para" cols="70" rows="10" placeholder="Enter the content here" onChange={this.handleChange}></textarea>
                    <p>Word Count: {this.state.count}</p>
                </div>
            </center>
        )
    }
}