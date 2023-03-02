import React from 'react'
import img1 from '../../assets/building1.jpg'
import img2 from '../../assets/building2.jpg'
import './BelowHeader.css'
const BelowHeader = () => {
    return (
        <div>
            <div className="img-container">
                <img src={img1} alt="loading image" />
            </div>
            <div className="img-text">
                <h1 className='h1-text'>We crush minimal design.</h1>
                <div className='span-text'>MONOCHROME is a creative based in Chicago. We developed in Genesis framework and build mobile-optimized themes for WordPress</div>
            </div>
            <div className="below-img-container">
                <h1 className="h1-below-container">We build experience.</h1>
                <div className="span-below-container">A minimalist approach is the only way to design a website.</div>
                <hr />
                <div className="row">
                    <div className="col">
                        <h1 className="design">DESIGN</h1>
                        <div className="text-design">With an emphasis on typography, white space, and mobile-optimized desgin, your website will look absolutely breathtaking</div>
                        <div className="btn btn-dark">LEARN MORE</div>
                    </div>
                    <div className="col">
                        <h1 className="content">CONTENT</h1>
                        <div className="text-content">Our team will teach you the art of writing audience-focused content that will help you achieve the success you truly deserve</div>
                        <div className="btn btn-dark">LEARN MORE</div>
                    </div>
                    <div className="col">
                        <h1 className="strategy">STRATEGY</h1>
                        <div className="text-strategy">We help creative entrepreneurs build their digital business by focussing on three elements of a successful online platform</div>
                        <div className="btn btn-dark">LEARN MORE</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="img2-container"><img src={img2} alt="loading image" /></div>
                <div className="text-img2">
                    <h1 className="h1-img2">We design brands</h1>
                    <div className="div-img2">A simple look is all you need to crush your competition</div>
                    <hr />
                    <ul className='img2-ul'>
                        <li className='img2-li'>Amazon</li>
                        <li className='img2-li'>Google</li>
                        <li className='img2-li'>Microsoft</li>
                        <li className='img2-li'>Meta</li>
                        <li className='img2-li'>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BelowHeader
