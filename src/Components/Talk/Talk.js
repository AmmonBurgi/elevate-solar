import React, {useEffect, useState} from 'react'

import './talk.css'
import solarIcon from '../../logo_transparent_background.webp'
import solarInstal from '../../Solar Panel Installation (1).webp'
import solarPanels from '../../Solar Panels on Roof.webp'

function Talk(){
    const [fadeToggle, setFadeToggle] = useState(false),
        [first, setFirst] = useState(''),
        [last, setLast] = useState(''),
        [firstStreet, setFirstStreet] = useState(''),
        [secondStreet, setSecondStreet] = useState(''),
        [city, setCity] = useState(''),
        [region, setRegion] = useState(''),
        [zip, setZip] = useState(''),
        [country, setCountry] = useState(''),
        [email, setEmail] = useState(''),
        [homeOwner, setHomeOwner] = useState(''),
        [howHear, setHowHear] = useState(''),
        [phone, setPhone] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
          setFadeToggle(true)
        }, 100);
        return () => clearTimeout(timer)
      }, [])

    return (
        <div className={fadeToggle === false ? 'no-talk' : 'talk-component'}>
            <div className='talk-top-section'>
                <div className='talk-top-first'>
                    <nav className='talk-first-text'>
                        <p id='talk-first-last-title'>Designed For You!</p>
                        <p>When it comes to solar panel installation, it’s always good to have a plan. That’s because your energy needs are different than your neighbor’s. Your budget is also different. Even your roof is different. At Elevate Solar, we aren’t just a solar panel installation company. We work with each customer to design a solar energy system tailored to their energy needs.</p>
                    </nav>
                    <img src={solarInstal} alt='Solar-Panel-Installation' />
                </div>
                <div className='talk-top-last'>
                    <img src={solarPanels} alt='Solar-Panels' />
                    <nav className='talk-last-text'>
                        <p id='talk-first-last-title'>Your Unique Solar Panel Design!</p>
                        <p>The hallmark of a good solar energy system is one that produces just enough energy throughout the year to cover your energy needs. Not too much…not too little…just right. This doesn’t just magically happen. The key is a carefully researched and developed solar panel design.</p>
                    </nav>
                </div>
                <div id='hr-border'></div>
                <section className='talk-top-text-section'>
                    <p id='talk-text-section-title'>Here's how we do it!</p>
                    <p id='talk-text-subtitle'>Step One: The Paperwork</p>
                    <p>When you contact Elevate Solar and express interest in working with a solar panel installation company, the first thing we want to know is your average monthly energy usage. This number will help us determine how many solar panels you need to create that same amount of energy each month. Don’t worry if you have no clue how much energy you use each month – most homeowner don’t. In reality, your usage will fluctuate throughout the year, usually spiking in the summer months as the air conditioning is put to good use.</p>
                    <p>To determine your energy use, we will ask you to send us a copy of your most recent utility bill, which should include a summary of energy usage for the past 12 months. This will give us a good idea of your average monthly energy usage and whether your utility company bills at tiered rates.</p>
                    <p id='talk-text-subtitle'>Step Two: The Consultation</p>
                    <p>Your energy usage is only one piece of the puzzle that will help our solar technicians design your personalized solar panel array. We also want to know about you. During your consultation, we will help you determine your budget and ask you about any plans for the future. Using that information our energy technician will design your personalized solar panel system and get your approval right then and there. This process allows us to speed up the solar panel installation, letting you see your savings sooner.</p>
                    <p id='talk-text-subtitle'>Step Three: Site Assessment</p>
                    <p>Every home and roof is unique, and a big part of crafting your solar panel design has to do with  understanding your property. Elevate Solar will send an energy technician to your home to assess your roof. The technician will make sure your roof is in good enough condition for the panels, determine the best areas of the roof that receives the most sun, and determine if things like trees are creating shade,  which could lower the efficiency of your panels.</p>
                </section>
            </div>
            <div id='hr-border'></div>
            <div className='talk-quote-form'>
                <div className='quote-header'>
                    <p>Get a Quote</p>
                    <img src={solarIcon} alt='elevate solar icon' />
                </div>
                <p>Please enter your details below and we'll contact you shortly.</p>
                <div className='quote-name'>
                    <p>Name</p>
                    <nav>
                        <input
                        onChange={(e) => setFirst(e.target.value)}
                        placeholder='First'
                        />
                        <input 
                        onChange={(e) => setLast(e.target.value)}
                        placeholder='Last' />
                    </nav>
                </div>
                <div className='quote-address' >
                    <p>Address</p>
                    <input 
                    onChange={(e) => setFirstStreet(e.target.value)}
                    placeholder='Street Address' />
                    <input 
                    onChange={(e) => setSecondStreet(e.target.value)}
                    placeholder='Second Street Address' />
                    <nav>
                        <input 
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City' />
                        <input 
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder='Region' />
                    </nav>
                    <nav>
                        <input 
                        onChange={(e) => setZip(e.target.value)}
                        placeholder='Postal / Zip Code' />
                        <input 
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='United States' />
                    </nav>
                </div>
                <div className='quote-email' >
                    <p>Email</p>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='quote-homeowner'>
                    <p>Homeowner?</p>
                    <nav>
                        <input
                        value={'yes'} 
                        onChange={(e) => setHomeOwner(e.target.value)}
                        />
                        <p>Yes</p>
                    </nav>
                    <nav>
                        <input
                        value={'no'}
                        onChange={(e) => setHomeOwner(e.target.value)}
                        />
                        <p>No</p>
                    </nav>
                    <nav>
                        <input
                        value={'rent'}
                        onChange={(e) => setHomeOwner(e.target.value)}
                        />
                        <p>Rent</p>
                    </nav>
                </div>
                <div className='quote-how'>
                    <p>How did you hear about us?</p>
                    <p>If it was in the online media, on what website was it?</p>
                    <input
                    onChange={(e) => setHowHear(e.target.value)}
                    />
                </div>
                <div className='quote-number'>
                    <p>Phone Number</p>
                    <input
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button>Get a Quote</button>
            </div>
        </div>
    )
}

export default Talk