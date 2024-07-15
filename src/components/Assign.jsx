import React from 'react';
import './Assign.css';
import Introduction from './Introduction';

function Assign({data}) {
  return (
    <div>
      <div className="shadow p-3">
        
        
        <nav>
          <div class="fs-4 d-flex align-items-center justify-content-around">
          <div class="d-flex gap-2">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-linkedin"></i>
          </div>
          <div>
            <img src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b0771916d7e54dbf05d255_logo-writeology-x-webflow-template.svg"g></img>
          </div>
          <div class="d-flex gap-2">
            <h5>Cart (0)</h5>
            <i class="bi bi-person"></i>
              <div>
                {/* <p class="loginTip">
                  
                </p> */}
                {/* <div class="loginChild">
                  <p class="lead">Login</p>
                  <p class="lead">Sign Up</p>
                </div> */}

            </div>
            <i class="bi bi-search"></i>
          </div>
          </div>
          <div>
            <ul class="d-flex gap-5 align-items-center justify-content-center mt-4">
              <li>HOME</li>
              <li class="parentPages">
                PAGES
                <p class="pagesTip"></p>
                <div class="pages">
                  <div>
                    <h4>PAGES</h4>
                    <p>Home</p>
                    <p>Home (Premium)</p>
                    <p>Blog Post</p>
                    <p>blog Post (Premium)</p>
                    <p>Subscribe</p>
                    <p>Contact</p>
                    <p>Sign In</p>
                    <p>Sign Up</p>
                    <p>Update Password</p>
                    <p>Reset Password</p>
                    <p>Access Denied</p>
                    <p>User Account</p>
                  </div>
                  <div>
                    <h4>UTILITY PAGES</h4>
                    <p>Start here</p>
                    <p>StyleGUide</p>
                    <p>404 Not Found </p>
                    <p>Passsword Protected</p>
                    <p>licenses</p>
                    <p>ChangeLog</p>
                    <p>Browse more templates</p>
                  </div>
                </div>
              </li>
            
              <li class="parentCate">
                CATEGORIES
                <p class="cateTip"></p>
                <div class="categories">
                  <div>
                  <p>Tips</p>
                  <p>Resources</p>
                  <p>Guides</p>
                  </div>
                 
                </div>
              </li>
           
              <li>CONTACT</li>
              <li>SUBSCRIBE</li>
             
            </ul>
          </div>
            
        </nav>

          </div>
          <Introduction data={data} />
    </div>
  );
}

export default Assign;
