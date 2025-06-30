import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="container-fluid py-5 px-5">
      {/* Heading */}
      <div className='px-5'>
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#151ed3' }}>
            Why Choose Us
          </h2>
        </div>
      </div>

      {/* Content Section - Flex for Equal Height */}
      <div className="row d-flex">
        {/* Left side - Image */}
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex">
          <div className="w-100 d-flex align-items-stretch">
            <img
              src="https://i.pinimg.com/736x/53/cf/57/53cf57a6db4519512b58bc8c5e70f161.jpg"
              alt="Game Development Setup"
              className="img-fluid rounded shadow-lg w-100"
              style={{
                objectFit: 'cover',
                height: '100%',
                minHeight: '100%',
              }}
            />
          </div>
        </div>

        {/* Right side - Features */}
        <div className="col-lg-8 col-md-12 d-flex">
          <div className="ps-lg-5 d-flex flex-column justify-content-between w-100">
            {/* Feature List */}
            <div className="border-bottom border-light mb-4">
              <h5 className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>
                1. Skilled Staff with Proven Track Record:
              </h5>
              <p className="text-muted fs-6 lh-lg mb-0">
                Our game designers and writers are true experts who have spent years learning how to make games. We know how to play a lot of different kinds of games and can bring your vision to life using both tried-and-true methods and new ideas.
              </p>
            </div>

            <div className="border-bottom border-light mb-4">
              <h5 className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>
                2. Customised Answers for Games
              </h5>
              <p className="text-muted fs-6 lh-lg mb-0">
                We understand that every job is different. That's why we take the time to learn about your goals and come up with custom solutions that fit your vision and speak to your audience.
              </p>
            </div>

            <div className="border-bottom border-light mb-4">
              <h5 className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>
                3. Pay attention to the player:
              </h5>
              <p className="text-muted fs-6 lh-lg mb-0">
                The experience of the player is always the most important thing to us. We make games that are fun, easy to use, and meant to keep people interested and coming back for more.
              </p>
            </div>

            <div className="border-bottom border-light mb-4">
              <h5 className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>
                4. Services for the whole development process:
              </h5>
              <p className="text-muted fs-6 lh-lg mb-0">
                From the first thought to support after the launch, we take care of everything. Our end-to-end services make sure that the whole development process runs smoothly and efficiently, so you don't have to deal with managing different teams.
              </p>
            </div>

            <div>
              <h5 className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>
                5. Quality Without Giving Up:
              </h5>
              <p className="text-muted fs-6 lh-lg mb-0">
                We promise to make games that look great and work well on all Android phones and tablets. We make sure that every game is polished, safe, and ready for the market by testing it thoroughly. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;
