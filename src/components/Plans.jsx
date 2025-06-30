import React from 'react'

const Plans = () => {
  return (
    <div className='py-5'>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className=" fw-bold" style={{color:'#151ed3'}}>Price List</h1>
      </div>
      
      <div className="row g-4">
        {/* Basic Plan */}
        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0 fw-bold">Basic Plan</h4>
            </div>
            <div className="card-body text-center">
              <h2 className="text-dark mb-4 fw-bold">$300</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">2D graphics</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Basic UI/UX design</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Single Style</span>
                </li>
              </ul>
            </div>
            <div className=" bg-transparent text-center pb-4">
              <button className="btn btn-primary btn-lg px-4 rounded-pill">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0 fw-bold">Standard Plan</h4>
            </div>
            <div className="card-body text-center">
              <h2 className="text-dark mb-4 fw-bold">$500</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">3D graphics</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Basic UI/UX design</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Many Styles</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Multiple Revision</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Responsive Design</span>
                </li>
              </ul>
            </div>
            <div className=" bg-transparent text-center pb-4">
              <button className="btn btn-primary btn-lg px-4 rounded-pill">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Plan */}
        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0 fw-bold">Advanced Plan</h4>
            </div>
            <div className="card-body text-center">
              <h2 className="text-dark mb-4 fw-bold">$700</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">3D/2D graphics</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Advance UI/UX design</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Multiple Styles</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Unlimited Revision</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Guidance</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Premium Design</span>
                </li>
                <li className="mb-2">
                  <i className="text-primary me-2">✓</i>
                  <span className="text-muted">Monetization</span>
                </li>
              </ul>
            </div>
            <div className=" bg-transparent text-center pb-4">
              <button className="btn btn-primary btn-lg px-4 rounded-pill">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Plans