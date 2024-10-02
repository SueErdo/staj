import React from 'react'
import Books from '../Components/Books';
import Banner from '../Components/Banner'
import Inf from '../Components/Information';
import Slider from '../Components/Slider';

function Main() {
  return (
    <div className='image'>
      <Slider />
      <Books />
      <Banner />
      <Inf />
    </div>
  )
}

export default Main