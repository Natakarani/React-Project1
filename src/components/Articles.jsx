import React from 'react'
import './Assign.css'
import Subscribe from './Subscribe'
function Articles({data}) {
    return (
      <div>
            <div class="article mt-5" style={{padding:'20px 150px'}}>
          <div class="mt-5">
              {data.map((item, index) => (
                  <div class="d-flex mt-5 gap-5" id="article">
                      <img src={item.img} class="articleimg"></img>
                    
                      <div>
                          <p>{item.name}</p>
                          <h3>{item.subheading}</h3>
                          <p class="fs-6 text-secondary">{item.desc}</p>
                          <div class="d-flex align-items=center gap-4 flex-wrap">
                          <div class="d-flex gap-3 flex-wrap">
                              <img src={item.username.img} style={{width:'30px',height:'30px',borderRadius:'100px'}}></img>
                              <p>{ item.username.name}</p>
                          </div>
                          <div class="d-flex gap-3">
                             <i class="bi bi-clock"></i>
                              <p>{ item.time}</p>
                          </div>
                         </div>
                      </div>
                  </div>
              ))}
          </div>
          <div class="mt-5">
              <img src="https://assets.website-files.com/62abc23e594f83b60b6b133d/62b0771916d7e54dbf05d255_logo-writeology-x-webflow-template.svg"></img>
              <p class="lead mt-4">Tellus id nisl blandit vitae quam magna nisl aliquet aliquam arcu ultricies commodo felisoler  sit amet.</p>
              <div style={{border:"1px solid grey",width:'fit-content'}} class="p-1 py-2 shadow">
              <input type="search" placeholder='search here' class="border-0"></input>
              <i class="bi bi-search"></i>
              </div>
              <hr class="mt-4 mb-5"></hr>
              <div class="d-flex gap-2 mt-5">
                  <button class="btn btn-outline-secondary text-secondary">Tips</button>
                  <button class="btn btn-outline-secondary btn text-secondary">Resources</button>
                  <button class="btn btn-outline-secondary text-secondary">Guides</button>
              </div>
              <div id="resources" class="mt-5">
              <h3>RESOURCES</h3>
              <h3>How to choose the best management software</h3>
              </div>
              <h3 class="mt-5">Popular Articles</h3>
              <div class="d-flex gap-4 mt-4">
                  <img style={{width:"160px",height:"140px",borderRadius:"20px"}} src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe3a09177383d10eae70a_collaboration-software-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg"></img>
                  <h5>10 best collaborative software for team</h5>
              </div>
              <div class="d-flex gap-4 mt-4">
                  <img style={{width:"160px",height:"140px",borderRadius:"20px"}} src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe33779b3d5971674d153_project-management-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg"></img>
                  <h5>A complete guide to learn project management</h5>
              </div>
              <div class="d-flex gap-4 mt-4">
                  <img style={{width:"160px",height:"140px",borderRadius:"20px"}} src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe1c991773849cceae17c_time-tracking-thumbnail-blog-writelogy-x-webflow-template--p-500.jpeg"></img>
                  <h5>How time cracking can improve team management</h5>
              </div>
          </div>
         
            </div>
            <Subscribe/>
      </div>
      
  )
}

export default Articles