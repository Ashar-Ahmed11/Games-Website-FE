import React, { useContext } from 'react';
import AppContext from '../components/context/appContext';

const GameDevServ = () => {
  const context = useContext(AppContext);
  const { siteData } = context;

  return (
    <div className="px-5 py-3">
      <h1 style={{ color: '#6ec1e4' }}>{siteData.pageTitle}</h1>
      <p>Check out some of the games we've made. Feel free to play them and get a feel for our work.</p>

      {/* Download Buttons */}
      <div className="d-flex flex-column align-items-center gap-3 my-4">
        {!Array.isArray(siteData.links) ? (
          <p>Loading links...</p>
        ) : siteData.links.length === 0 ? (
          <p>No downloads available yet.</p>
        ) : (
          siteData.links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success px-4 py-2"
            >
              <i className="fa-solid fa-download me-2"></i>
              Download Now ( {link.name} )
            </a>
          ))
        )}
      </div>

      {/* Description Paragraph */}
      <p className="text-muted mt-4">
        We love making fun, interesting Android games that get people thinking and make them want to be creative. Each of our skilled writers, artists, and storytellers works together to make new ideas come to life. In other words, every game is an event rather than just a game.
      </p>
    </div>
  );
};

export default GameDevServ;
