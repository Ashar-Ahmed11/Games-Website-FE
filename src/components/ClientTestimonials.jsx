import React from 'react';

export default function ClientTestimonials() {
  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-12 col-lg-3 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold text-dark mb-0 bg-light p-5 rounded" style={{lineHeight: '1.1'}}>
            What Our <br />
            Customers Say
          </h1>
        </div>
        
        <div className="col-12 col-lg-4 mb-4 mb-lg-0 px-4">
          <blockquote className="h6 text-muted mb-4" style={{lineHeight: '1.6'}}>
            "The experience of working with their team was great. They took my ideas and made them into a fully polished game with creative features, smooth gameplay, and graphics that really stand out. I felt like I was a part of the process from the beginning to the end. I would suggest them to anyone who is serious about making games. ."
          </blockquote>
          <footer className="text-muted fst-italic">
            Lucky
          </footer>
        </div>
        
        <div className="col-12 col-lg-4 px-4">
          <blockquote className="h6 text-muted mb-4" style={{lineHeight: '1.6'}}>
            "It was great working with this group!" They took my simple idea and made it into a full, fun game. There was no stress or trouble during the whole process because of their creativity, accuracy, and technical know-how."
          </blockquote>
          <footer className="text-muted fst-italic">
            Elaisee
          </footer>
        </div>
      </div>
    </div>
  );
}