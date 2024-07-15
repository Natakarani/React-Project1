import React from 'react';
import Articles from './Articles';
import './Assign.css';

function Introduction({ data }) {
    function overEffectFunction() {
        const image = document.getElementById('image');
        image.classList.add('overEffect');
        image.classList.remove('leaveEffect');
    }

    function leaveEffectFunction() {
        const image = document.getElementById('image');
        image.classList.remove('overEffect');
        image.classList.add('leaveEffect');
    }

    return (
        <div>
            <div className="introduction mt-5">
                <div className="intro1">
                    <img 
                        id="image" 
                        src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62abe9db6517db41e66bf261_digital-management-thumbnail-blog-writelogy-x-webflow-template-.jpg" 
                        alt="Digital Project Management"
                    />
                    <div className="intro2">
                        <div 
                            className='intro3' 
                            onMouseOver={overEffectFunction}
                            onMouseLeave={leaveEffectFunction}
                        ></div>
                        <button className="px-2 border rounded">Tips</button>
                        <h2 className="mt-3 mb-4">5 ways to improve your digital project management</h2>
                        <div className="d-flex gap-4 align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <img 
                                    style={{overflow:'hidden',width: "40px", height: "40px", borderRadius: '100px'}} 
                                    src="https://assets.website-files.com/62abc23e594f83d9d66b136f/62abc23e594f834a736b14c7_john-carter-team-member-brix-templates-avatar-picture-p-500.jpeg" 
                                    alt="John Carter"
                                />
                                <h6 style={{marginTop: '12px'}}>John Carter</h6>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fs-4 bi bi-clock"></i>
                                <h6 style={{marginTop: '12px'}}>June</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>TIPS</p>
                        <h3>How to choose the best <br />manager software</h3>
                    </div>
                    <hr />
                    <div>
                        <p>TIPS</p>
                        <h3>Three ways to not to distract<br /> from work</h3>
                    </div>
                    <hr />
                    <div>
                        <p>TIPS</p>
                        <h3>7 Great productivity apps <br /> for your new iPad</h3>
                    </div>
                </div>
            </div>
            <Articles data={data} />
        </div>
    );
}

export default Introduction;
