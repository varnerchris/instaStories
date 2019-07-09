import React, { Component } from 'react';
//import Stories from 'react-insta-stories';
import axios from 'axios';
//import Image from '../Image/Image';
import auth from '../../auth.json';
//import moment from 'moment'
import './InstaLikes.css';
import CountUp from 'react-countup';


class InstaLikes extends Component {
  constructor(props){
    super(props);
    this.state={
      likes:0
    }
  }

  callInstagram() {
    let token = auth.instagram.token;
    axios.get('https://api.instagram.com/v1/users/self/?access_token=' + token)
            .then(res => {
                //console.log(res.data.data.full_name);
                this.setState({ likes:res.data.data.counts.followed_by });
            })
            .catch(err => {
                console.log(err)
            })
  }

componentDidMount() {
  this.callInstagram();

  this.interval = setInterval(() => {
  this.callInstagram()},1000*120);
  }

//setInterval(this.callInstagram(), 60000); //Check this


  render () {

  console.log(this.state.likes)

    return (

      <CountUp
      start={this.state.likes-50}
      end={this.state.likes}
      duration={3}
      separator=""
      decimals={0}
      decimal=","
      prefix=""
      suffix=" Followers"
      delay={5}
    >
      {({ countUpRef, start }) => (
        <div className="countUp">
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>

    )
  }
}



export default InstaLikes;
