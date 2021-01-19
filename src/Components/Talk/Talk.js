import React from 'react'

import './talk.css'
import solarInstal from '../../Solar Panel Installation (1).webp'
import solarPanels from '../../Solar Panels on Roof.webp'

function Talk(){
    return (
        <div className='talk-component'>
            <div className='talk-top-section'>
                <div>
                    <nav>
                        <p>Designed For You!</p>
                        <p>When it comes to solar panel installation, it’s always good to have a plan. That’s because your energy needs are different than your neighbor’s. Your budget is also different. Even your roof is different. At Elevate Solar, we aren’t just a solar panel installation company. We work with each customer to design a solar energy system tailored to their energy needs.</p>
                    </nav>
                    <img src={solarInstal} alt='Solar-Panel-Installation' />
                </div>
                <div>
                    <img src={solarPanels} alt='Solar-Panels' />
                    <nav>
                        <p>Your Unique Solar Panel Design!</p>
                        <p>The hallmark of a good solar energy system is one that produces just enough energy throughout the year to cover your energy needs. Not too much…not too little…just right. This doesn’t just magically happen. The key is a carefully researched and developed solar panel design.</p>
                    </nav>
                </div>
                <hr></hr>
                <div>

                </div>
            </div>
            <div className='talk-quote-form'>

            </div>
        </div>
    )
}

export default Talk