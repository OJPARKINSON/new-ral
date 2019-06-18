import React, { Component } from 'react';
import { connect } from 'react-redux'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

 class Home extends Component{
    render(){
        const images = [
            {
                original: 'https://www.simplyrecipes.com/wp-content/uploads/2013/04/green-eggs-ham-sandwich-horiz-a-1800.jpg',
            },
            {
              original: 'https://www.sickchirpse.com/wp-content/uploads/2017/08/Bacon-Sarnie.jpg',
            },
            {
              original: 'https://www.saltandlavender.com/wp-content/uploads/2016/09/salmonsandwich2.jpg',
            }
          ]
       
          return (
            <ImageGallery showThumbnails={false} showPlayButton={false} items={images} />
          );
        }
    }


export default connect()(Home)