import React, { Component } from 'react';
import Stories from 'react-insta-stories';
import axios from 'axios';
//import Image from '../Image/Image';
import auth from '../../auth.json';
import moment from 'moment'


class InstaStories extends Component {
  constructor(props){
    super(props);
    this.state={ images:[] }
  };

  componentDidMount() {
      let token = auth.instagram.token;
      let num_photos = 12;

      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
          .then(res => {
            //  console.log(res.data.data[0]);
                  this.setState({ images: res.data.data });
          })
          .catch(err => {
              console.log(err)
          })

  }

  render () {


    let storiesNew =[]
    storiesNew = this.state.images.map(image=>{
      return { url:image.images.standard_resolution.url,  header: { heading:image.user.username , subheading: "Likes: "+ image.likes.count, profileImage:image.user.profile_picture }, type:image.type}})




    if (storiesNew.length===0){
      return <div/>
    }

    //console.log(storiesNew)

    return (

      <Stories
       stories={storiesNew}
       defaultInterval={12000}
       width={600}
       height={600}
       loop={true}
      />

    )
  }
}



export default InstaStories;
