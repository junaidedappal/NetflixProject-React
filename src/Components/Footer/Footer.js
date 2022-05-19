import React from 'react'
import "./Footer.css"


function footer() {
  return (
    <div className='styling'>
        <footer>
<section className="footer">
  <div className="box-container row">
      <div className="box col-12 col-md-6">
          <h3>Red Apple ltd. </h3>
          <p>
          Red Apple is a full-stack [ MERN ] design and development company located in Edappal, Kozhikode.
           The 12-person team offers UX/UI design, web design, and web-development 
            to all kind of business & service.<br/><br/>We are fast and deliver high-quality designs as your needs.
        
          <br/> Keep Rising 🚀 and Connect with US!</p>
      </div>
      {/* Projects done by the company */}
      {/* <div className="box">
          <h3>projects</h3>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
      </div> */}

      <div className="box col-12 col-md-6">
          <h3>contact info</h3>
          <p> <i className="fas fa-phone"></i>+91 7034-911-822</p>
          <p> <i className="fas fa-envelope"></i>junaidkottilil@gmail.com</p>
          <p> <i className="fas fa-map-marked-alt"></i>Calicut,Kerela, India</p>
          <div className="share">

              <a href="https://www.linkedin.com/in/junaid-k-m-262512173/?originalSubdomain=in" className="fab fa-linkedin" ></a>
              <a href="https://github.com/junaidedappal" className="fab fa-github"  ></a>
              <a href="mailto:junaidkottilil@gmail.com" className="fas fa-envelope" ></a>
              <a href="http://junaidkm.tech" className="fas fa-user" ></a>
          </div>
      </div>

  </div>
  <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.junaidkm.tech"> junaidkm.tech</a></h1>
</section>
</footer>
</div>
          

    
  )
}

export default footer