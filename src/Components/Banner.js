import React from 'react'
import items from './Datas/bannerdata'
function Banner() {
  return (
    <div className="container" style={{ margin: 'auto', height:'100%' }}>
    <div className="row" style={{height:'100%'}}>
      {items.map((item, index) => (
       <div className="col-12 col-md-6 col-lg-4 mb-4" key={index} >
          <div className="card h-100" style={{backgroundColor: '#93C54B'}} >
            <img className="card-img-top" src={item.image} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Banner