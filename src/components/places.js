import React, { Component } from 'react'

export default class Googleplaces extends Component {
    constructor() {
        super();
        this.state = {
            places : []
        }
    }

    componentDidMount() {
        let urlOne = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=1500&type=restaurant&keyword=drinks&key=AIzaSyCGjREc2FZhlFgX2iCtdTluvQo4Mu9Tln4/';
        let urlTwo = 'https://randomuser.me/api/';

    fetch(urlOne)
           .then(res => res.json())
           .then(data => this.setState({ places: data }))
                
           
    
    }

  render() {
    console.log(this.state.places)
    
    return (
      <div>
        {/* <p>{this.state.places}</p> */}
      </div>
    )
  }
}
