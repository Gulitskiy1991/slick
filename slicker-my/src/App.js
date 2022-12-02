import './App.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { slickData } from './data'

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="App">
      <Slider {...settings} autoplay={true} centerPadding="50px">
        {slickData.map((item) => (
          <div className="card">
            <div className="card-top">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-bottom">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default App
