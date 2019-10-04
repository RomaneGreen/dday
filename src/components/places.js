import React, { Component } from 'react'

export default class Googleplaces extends Component {
    constructor() {
        super();
        this.state = {
            places : []
        }
    }

    componentDidMount() {
    fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.663918,-73.8820044&radius=1500&type=restaurant&keyword=drinks&key=AIzaSyCGjREc2FZhlFgX2iCtdTluvQo4Mu9Tln4",{
        
            method: 'GET',
            headers:{
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials':true,
              'Access-Control-Allow-Methods':'POST, GET'
            }
    })
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({ places: result })
            console.log("places", this.state.places)
        })
    
}

  render() {
    return (
      <div>
        {/* <p>{this.state.places}</p> */}
      </div>
    )
  }
}
