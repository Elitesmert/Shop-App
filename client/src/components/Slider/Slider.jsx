import React, {useState} from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import './Slider.scss'

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ]
  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1)
  }

  return (
    <div className='slider'>
      <div className='imageContainer' style={{transform: `translateX(-${current * 100}vw)`}}>
        {data.map((item, index) => (
          <img key={index} src={item} className='slide' alt={index} />
        ))}
      </div>
      <div className='icons' onClick={prevSlide}>
        <div className='icon'>
          <WestOutlinedIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
