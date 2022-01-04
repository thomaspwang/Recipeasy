import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Slideshow.css";

const slideImages = [
  {
    url: "https://www.daimanuel.com/wp-content/uploads/2019/01/dark-green-vegetables.jpg",
    caption: 'PLEXIPIE'
  },
  {
    url: 'https://www.daimanuel.com/wp-content/uploads/2019/01/dark-green-vegetables.jpg',
    caption: 'PLEXIPIE'
  },
  {
    url: 'https://www.daimanuel.com/wp-content/uploads/2019/01/dark-green-vegetables.jpg',
    caption: 'PLEXIPIE'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
export default Slideshow;