import React from 'react'

const MajorViewPoints = () => {
  return (
    <div className="container-fluid py-5">
      {/* First Section - Major View Points */}
      <div className="row align-items-center mb-5 pb-5">
        {/* Left side - Image */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <img 
            src="https://www.gdgtme.com/wp-content/uploads/2022/08/How-to-create-an-efficient-home-office-setup-for-remote-and-hybrid-work-6-1024x587.jpg" 
            alt="Game Development Setup" 
            className="img-fluid rounded shadow"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="col-lg-6 col-md-12">
          <div className="ps-lg-4">
            <h2 className="display-5 fw-bold mb-4" style={{color: '#151ed3'}}>
              Important Ideas
            </h2>
            
            <p className="text-muted fs-6 lh-base mb-4">
            On our website, we think that games are more fun when people work together well. We work with our clients from the first thought of an idea all the way through to the end, making sure their concept comes to life. We encourage creativity and keep our focus on the same goal by involving them in the whole process, resulting in games that really live up to their standards. We turn ideas into engaging experiences that keep players all over the world interested by communicating clearly and working as a team. Each project shows how much we love games and how dedicated we are to quality. 
            </p>
            
            <div className="text-center text-lg-start">
              <button className="btn btn-success btn-lg px-4 py-2">
                Order Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Let's Create Something Together */}
      <div className="row align-items-center">
        {/* Left side - Content */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="pe-lg-4">
            <h2 className="display-5 fw-bold mb-4" style={{color: '#151ed3'}}>
              Let's Make Something Great!
            </h2>
            
            <p className="text-muted fs-6 lh-base mb-4">
              We can't wait to help you make your game plans come to life. Our team is ready to help you at every step, whether you already have an idea or are starting from scratch. We'll make games that people want to play and that help your brand if we work together closely. Are you ready to begin? Get in touch with us right away, and we'll make your next big game come to life. .
            </p>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="col-lg-6 col-md-12">
          <img 
            src="https://logicsimplified.com/newgames/wp-content/uploads/2020/09/How-Android-App-and-Game-Development-are-Different-1-770x338.png" 
            alt="Android Game Development Tools" 
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  )
}

export default MajorViewPoints