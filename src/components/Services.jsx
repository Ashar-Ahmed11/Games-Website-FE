import React from 'react'

const Services = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className=" fw-bold" style={{color:'#151ed3'}}>Our Services</h1>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="text-center h-100">
            <h3 className="text-info mb-3">1. Making video games</h3>
            <p className="text-muted">
              We make unique games based on your ideas and goals, giving your viewers a unique experience that sticks with them. 
            </p>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="text-center h-100">
            <h3 className="text-info mb-3">2. Making games</h3>
            <p className="text-muted">
              Our creative design team brings your game to life with beautiful graphics and easy-to-understand controls. They do this by creating worlds that are truly immersive and keep players' interest. 
            </p>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <div className="text-center h-100">
            <h3 className="text-info mb-3">3. Making Money from Games</h3>
            <p className="text-muted">
              We can help you come up with smart ways to make money from your game, like ads and in-app sales, that don't hurt the player experience. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services