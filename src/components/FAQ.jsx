import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestion1, setOpenQuestion1] = useState(false);
  const [openQuestion2, setOpenQuestion2] = useState(false);
  const [openQuestion3, setOpenQuestion3] = useState(false);
  const [openQuestion4, setOpenQuestion4] = useState(false);
  const [openQuestion5, setOpenQuestion5] = useState(false);
  const [openQuestion6, setOpenQuestion6] = useState(false);

  return (
    <div>
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h1 className="display-1 fw-bold" style={{letterSpacing: '2px', color: '#151ed3'}}>
                FAQ
              </h1>
            </div>
          </div>

          <div className="row py-5">
            {/* Question 1 */}
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div 
                  className="card-body p-4"
                  onClick={() => setOpenQuestion1(!openQuestion1)}
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="card-title text-muted mb-0 d-flex justify-content-between align-items-center">
                    What kinds of games do you make?
                    <span className="text-primary fs-4">
                      {openQuestion1 ? '−' : '+'}
                    </span>
                  </h5>
                  {openQuestion1 && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="text-dark mb-0">
                        We make a lot of different kinds of games, like fun, action, adventure, puzzle, and AR/VR games. Our group is ready to make a lot of different ideas and game styles come to life.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div 
                  className="card-body p-4"
                  onClick={() => setOpenQuestion2(!openQuestion2)}
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="card-title text-muted mb-0 d-flex justify-content-between align-items-center">
                    Do you offer help after the game is out?
                    <span className="text-primary fs-4">
                      {openQuestion2 ? '−' : '+'}
                    </span>
                  </h5>
                  {openQuestion2 && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="text-dark mb-0">
                        Of course! We promise to keep working on your game even after it's out there. This includes regular updates that fix any bugs and add new features or material based on what players say. 
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div 
                  className="card-body p-4"
                  onClick={() => setOpenQuestion3(!openQuestion3)}
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="card-title text-muted mb-0 d-flex justify-content-between align-items-center">
                    How much do I get to help with the development?
                    <span className="text-primary fs-4">
                      {openQuestion3 ? '−' : '+'}
                    </span>
                  </h5>
                  {openQuestion3 && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="text-dark mb-0">
                        We want you to be involved! You are always welcome to give your opinion, whether it's during early idea sessions or during playtesting. At every stage of the project, we put open conversation and working together first. 
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div 
                  className="card-body p-4"
                  onClick={() => setOpenQuestion4(!openQuestion4)}
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="card-title text-muted mb-0 d-flex justify-content-between align-items-center">
                    How long does it usually take to make a game?
                    <span className="text-primary fs-4">
                      {openQuestion4 ? '−' : '+'}
                    </span>
                  </h5>
                  {openQuestion4 && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="text-dark mb-0">
                        How long it takes to make a game relies on how big and complicated the project is. This depends on the game. Most games take between a few months and over a year to finish. During the first step of planning, we make a clear schedule.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div 
                  className="card-body p-4"
                  onClick={() => setOpenQuestion5(!openQuestion5)}
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="card-title text-muted mb-0 d-flex justify-content-between align-items-center">
                    What tools do you use to make games?
                    <span className="text-primary fs-4">
                      {openQuestion5 ? '−' : '+'}
                    </span>
                  </h5>
                  {openQuestion5 && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="text-dark mb-0">
                        Even though making games for Android is what we do best, we can also make games that work on other platforms. Depending on your needs, we're willing to look into different ways to share on multiple platforms.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="col-lg-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div 
                  className="card-body p-4"
                  onClick={() => setOpenQuestion6(!openQuestion6)}
                  style={{ cursor: 'pointer' }}
                >
                  <h5 className="card-title text-muted mb-0 d-flex justify-content-between align-items-center">
                    How can I get in touch with you about a job or a meeting?
                    <span className="text-primary fs-4">
                      {openQuestion6 ? '−' : '+'}
                    </span>
                  </h5>
                  {openQuestion6 && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="text-dark mb-0">
                        You can use the form on our website to get in touch with us. We can't wait to hear about your plans for making games! 
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;