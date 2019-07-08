import React from 'react';
import axios from 'axios';

class Instagram extends React.Component {
    state = {
        images: [],
    };

    componentDidMount() {
        let token = '5722699482.a510beb.691d08e9ee3b4d43a27e43ac2bb4fb4f';
        let num_photos = 12;


        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                console.log(res.data.data);
                    this.setState({ images: res.data.data });

            })
            .catch(err => {
                console.log(err)
            })

    }

    stateTest(){
      console.log(this.state.images);
    }

    render() {
      let instaFeed = this.state.images.map((image) => {
        //  console.log(this.state.images)
          return <img src={image.images.standard_resolution.url} />

      })
        return(
            <div className="instafeed">
                {instaFeed}

            </div>
        )
    }
}

export default Instagram;
