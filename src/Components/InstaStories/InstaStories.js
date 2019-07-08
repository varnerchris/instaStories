import React, { Component } from 'react';
import Stories from 'react-insta-stories';
import axios from 'axios';
//import Image from '../Image/Image';
import auth from '../../auth.json';


class InstaStories extends Component {
  constructor(props){
    super(props);
    this.state={ images:[] }
  };

  componentDidMount() {
      let token = 'auth.instagram.token';
      let num_photos = 12;

      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
          .then(res => {
              console.log(res.data.data[0].images);
                  this.setState({ images: res.data.data });
          })
          .catch(err => {
              console.log(err)
          })

  }

  render () {
    let storiesNew =[]
    storiesNew = this.state.images.map(image=>{
      return { url:image.images.standard_resolution.url }})

    //{ url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } },

    let stories = [{ url: "https://scontent.cdninstagram.com/vp/e08f504edefcd0bfcc233009e7be155d/5DC0F561/t51.2885-15/sh0.08/e35/s640x640/65387885_2307978479460536_4699648315757125985_n.jpg?_nc_ht=scontent.cdninstagram.com", header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' } }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video' }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }]



    console.log(stories)
    console.log(storiesNew)


    return (

      <Stories
       stories={stories}
       defaultInterval={6000}
       width={800}
       height={800}
       loop={true}
      />

    )
  }
}



export default InstaStories;
