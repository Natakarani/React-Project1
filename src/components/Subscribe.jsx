import React from 'react'
import './Assign.css'
import Footer from './Footer'
function Subscribe() {
  return (
      <div>
          <div id="subscribe" className='text-light w-100 py-4 mt-5' style={{background:'black'}}>
              <h1 className='text-center'>Subscribe to unlock premium account</h1>
              <p class="text-center mb-3 mt-4 text-secondary">Sed at tellus, pharetra lacus, aenean risus non nisl ultricies commodo diam aliquet arcu enim eu leo porttitor habitasse adipiscing porttitor varius ultricies facilisis viverra lacus neque.</p>
              <div class="d-flex gap-4">
              <div className='subscribe1'>
                  <h4>A comprehensive guide on Agile development</h4>
              </div>
              <div className='subscribe2'>
                  <h4>10 prductivity tools that are worth checking out</h4>
              </div>
              <div className='subscribe3'>
                  <h4>Top 7 must have  management tools for  productivity</h4>
              </div>
              </div>
              <button class="px-5 lightBtn btn btn-light text0dark"><i class="bi bi-lock"></i> Unlock Content</button>

          </div>
          <Footer/>
    </div>
  )
}

export default Subscribe