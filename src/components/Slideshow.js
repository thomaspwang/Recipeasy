import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Slideshow.css";

const slideImages = [
  {
    url: "https://www.daimanuel.com/wp-content/uploads/2019/01/dark-green-vegetables.jpg",
    caption: 'RECIPEASY'
  },
  {
    url: 'https://vitalitynow.org/uploads/428.jpeg',
    caption: 'RECIPEASY'
  },
  {
    url: 'https://vitalitynow.org/uploads/181.jpeg',
    caption: 'RECIPEASY'
  },
  {
    url: 'https://img2.healthdigest.com/img/gallery/unhealthy-food-you-should-always-avoid-at-mexican-restaurants/l-intro-1608567609.jpg',
    caption: 'RECIPEASY'
  },
  {
    url: 'https://www.all4women.co.za/wp-content/uploads/2020/12/24/89491121_m.jpg',
    caption: 'RECIPEASY'
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