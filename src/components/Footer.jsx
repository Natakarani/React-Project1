import React from 'react'

function Footer() {
  return (
      <div class="mt-5 text-center">
          <h2>Subscribe to our newsletter</h2>

          <p class="mt-4 text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus amet dui quam vitae quis leo velit aliquam.</p>
          <input type="email" placeholder='enter email address' class="p-2 px-4"></input><button class="mx-3 px-3 p-2 btn btn-dark text-light">subscribe</button>
          <div class="mt-4 fs-4 d-flex align-items-center gap-3 justify-content-center">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>

              <i class="bi bi-youtube"></i>

          </div>
          <hr></hr>
          <p class="mt-3 text-secondary">Copyright © Writeology X | Designed by BRIX Templates - Powered by Webflow</p>
    </div>
  )
}

export default Footer