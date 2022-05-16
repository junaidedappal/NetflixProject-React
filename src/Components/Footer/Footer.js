import React from 'react'
import "./Footer.css"


function footer() {
  return (
    <div className='styling'>
        <footer>
<section class="footer">
  <div class="box-container row">
      <div class="box col-12 col-md-6">
          <h3>Red Apple ltd. </h3>
          <p>
          Red Apple is a full-stack [ MERN ] design and development company located in Edappal, Kozhikode.
           The 12-person team offers UX/UI design, web design, and web-development 
            to all kind of business & service.<br/><br/>We are fast and deliver high-quality designs as your needs.
        
          <br/> Keep Rising 🚀 and Connect with US!</p>
      </div>
      {/* Projects done by the company */}
      {/* <div class="box">
          <h3>projects</h3>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i> Coming up..</a>
      </div> */}

      <div class="box col-12 col-md-6">
          <h3>contact info</h3>
          <p> <i class="fas fa-phone"></i>+91 7034-911-822</p>
          <p> <i class="fas fa-envelope"></i>junaidkottilil@gmail.com</p>
          <p> <i class="fas fa-map-marked-alt"></i>Calicut,Kerela, India</p>
          <div class="share">

              <a href="https://www.linkedin.com/in/junaid-k-m-262512173/?originalSubdomain=in" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
              <a href="https://github.com/junaidedappal" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
              <a href="mailto:junaidkottilil@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
              <a href="http://junaidkm.tech" class="fas fa-user" aria-label="Telegram" target="_blank"></a>
          </div>
      </div>

  </div>
  <h1 class="credit">Designed with <i class="fa fa-heart pulse"></i> by <a href="https://www.junaidkm.tech"> junaidkm.tech</a></h1>
</section>
</footer>
</div>
          

    
  )
}

export default footer