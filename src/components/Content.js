//import { render } from "@testing-library/react";
import { Component } from "react";
import horse from '../horse.jpg'

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            numImages:1
        }
    }

    displayImages = () => {
        let {numImages} = this.state;
        let images = [];

        for (let i = 0; i < numImages; i++) {
            images.push(
                <img src={horse} alt = "horse"/>
            );
        }

        return (
            images
        );
    }
    
    handleChange = (event) => {
        this.setState({numImages:event.target.value});
    }

    render() {
        return (
            <div>
                <div>Please choose number of images:
            <select value ={this.state.numImages.Images} onChange = {this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            </div>
                {this.displayImages()}
            </div>

        );
        
    }
}

export default Content;
