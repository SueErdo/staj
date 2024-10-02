import React from 'react'
import items from './Datas/ınfdata'

function Inf() {
  return (
    <div className="container" style={{ margin: 'auto', height:'100%' }}>
    <div className="row" style={{height:'100%'}}>
      {items.map((item, index) => (
       <div className="col-12 col-md-6 col-lg-4 mb-4" key={index} >
          <div className="card h-100" style={{border:'none', }}>
            <img className="card-img-top" src={item.image} alt={item.name} style={{width:'60%', margin:'auto'}} />
            <div className="card-body" style={{margin:'auto'}}>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Inf