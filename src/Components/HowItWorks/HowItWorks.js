import React, {useEffect, useState} from 'react'
import {Helmet} from 'react-helmet'

import './howitworks.css'
import map from '../../map.webp'

function HowItWorks(){
    const [fadeToggle, setFadeToggle] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setFadeToggle(true)
        }, 100);
        return () => clearTimeout(timer)
      }, [])

    return( 
        <div className={fadeToggle === false ? 'no-works' : 'works-component'}>
            <Helmet>
                <title>Elevate Solar | How It Works</title>
            </Helmet>
            <div className='works-top-section'>
                <p id='works-top-title'>Here's how it works!</p>
                <p>You know how AT&T® or Verizon® will give you a FREE Smartphone if you sign a 2 year contract with their company? They factor in the price of the phone into the contract. After the contract is complete, you own the phone. </p>
                <p>Well we are doing the same with Elevate Solar Energy!</p>
                <p>We are giving away FREE solar systems so you can generate your own clean, green electricity!</p>
                <nav>
                    <p id='works-list-title'>As a Customer you will receive: </p>
                    <ul className='works-top-list'>
                        <li>Energy savings of up to 25% - 40%</li>
                        <li>Free Solar panels with a 25 year warranty</li>
                        <li>Free installation of Elevate Solar equipment</li>
                        <li>Home values increase an average of $50,000</li>
                    </ul>
                </nav>
                <div id='hr-border'></div>
                <p id='works-afford-title'>HOW CAN WE AFFORD THIS?</p>
                <p>We essentially become your new power company. We calculate how much you have been paying to your current power company each month and we then drop your monthly power bill payments to us by 25% to 40% less.</p>
                <p>You as a Customer will pay Elevate Solar instead of your local utility. We factor the cost of the solar system into your monthly electricity payments over the next 20 years.</p>
                <p>So, lets say that you are currently paying $300/mo for electricity, we will drop your bill to $200/mo... Saving you $100/mo!</p>
                <p>In this example, over the course of 20 years, your contract with Elevate Solar will save you more than $20,000!</p>
                <p>Just think if you were to apply that $100 in savings every month towards the principle on your 30 year mortgage each month. You would be able to pay off your house around 10 years early!</p>
                <p>Imagine paying off a 30 year mortgage in just 20 years by taking advantage of this EPIC offer! It would save you tens if not hundreds of thousands of dollars in interest payments to the bank!</p>
                <p>At the end of the contract, you OWN the solar system outright and your electricity payments to us stop. You are now generating FREE ENERGY! If you use less power than what the panels are producing, you can start selling your excess electricity back to the the grid, creating a new revenue stream!</p>
                <p id='top-last-tag'>If you decide to sell your house before the solar contract is finished, thats fine. The new homeowner would just assume the Elevate contract until it is fulfilled.</p>
            </div>
            <div id='hr-border'></div>
            <div className='works-bottom-section'>
                <p id='works-bottom-title'>WHAT'S THE REAL CATCH?</p>
                <p>We're operating in residential neighborhoods only right now. If you own your home, have a utility bill over $100/mo and a 650 credit score or higher you are pre-approved for FREE solar.</p>
                <p>There are 55,000,000 homes in the USA that qualify and only 500,000 of them are aware of this deal and are currently using solar energy. That's less than 1% penetration thus far!</p>
                <p>Currently, this is the Elevate Solar coverage area. Keep in mind we are growing at SOLAR speed. 18 months ago there were only 4 states that were consuming solar energy, but now we are NATIONWIDE.</p>
                <nav>
                    <img src={map} alt='United-States-Map' />
                </nav>
                <p id='works-bottom-prof'>GOING GREEN HAS NEVER BEEN MORE ATTRACTIVE AND PROFITABLE!</p>
                <p>Green living isn't just the smart choice, it's the best choice for you and your family. Elevate Solar, Elevate Connect and Elevate Green are designed to help you beat rising energy costs, decrease EMF exposure and live a greener, healthier lifestyle.</p>
                <p>Elevate is a leader in green energy and will install a solar system on your home - free of charge! Our Elevate Green Lighting, using our quantum photon technology is unequaled in the market today. Offering the highest efficiency rating available and significant energy savings, its incredible Power Factor {'>'}90 requires just half the amps and less watts than comparable CFL. Rooftop solar is at the dawn of a boom, in large part due to cheaper panels and PPAs (power purchase agreements) - you don't pay for equipment, just the power!</p>
            </div>
        </div>
    )
}

export default HowItWorks