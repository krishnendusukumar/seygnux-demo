import React from 'react'
import './Stories.css'
import img1 from '../../assets/building1.jpg'
import img2 from '../../assets/building2.jpg'

const Stories = () => {
    return (
        <div className="stories">
            <h1 className="h1-stories">We create stories.</h1>
            <div className="text-stories">A killer narrrative will turn your readers into raving fans</div>
            <hr />
            <div className="row stories-img">
                <div className="col">
                    <img src={img1} alt="" />
                    <div className="text-img">
                        <h4>OVERCOMING CREATIVE BLOCK</h4>
                        <span>Brian Garden: May 1, 2017</span>
                    </div>
                </div>
                <div className="col">
                    <img src={img2} alt="" />
                    <div className="text-img">
                        <h4>WHY COMMUNICATION IS KEY</h4>
                        <span>Brian Garden: May 1, 2017</span>
                    </div>
                </div>
            </div>
            <div className="row stories-img">
                <div className="col">
                    <img src={img1} alt="" />
                    <div className="text-img">
                        <h4>THE PATH OF LEAST RESISTANCE</h4>
                        <span>Brian Garden: May 1, 2017</span>
                    </div>
                </div>
                <div className="col">
                    <img src={img2} alt="" />
                    <div className="text-img">
                        <h4>HOW TO REACH NEW HEIGHTS</h4>
                        <span>Brian Garden: May 1, 2017</span>
                    </div>
                </div>
            </div>
            <div className="below-stories">
                <div className="text-below-stories">Hit the ground running with a minimum look.</div>
                <div className="btn btn-white">LEARN MORE</div>
            </div>
        </div>
    )
}

export default Stories
