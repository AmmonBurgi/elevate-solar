import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import './talk.css'
import solarIcon from '../../logo_transparent_background.webp';
import solarInstal from '../../Solar Panel Installation (1).webp';
import solarPanels from '../../Solar Panels on Roof.webp';
import axios from 'axios';

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
        [phone, setPhone] = useState(''),
        [firstError, setFirstError] = useState(false),
        [lastError, setLastError] = useState(false),
        [firstStreetError, setFirstStreetError] = useState(false),
        [cityError, setCityError] = useState(false),
        [regionError, setRegionError] = useState(false),
        [zipError, setZipError] = useState(false),
        [countryError, setCountryError] = useState(false),
        [emailError, setEmailError] = useState(false),
        [homeOwnerError, setHomeOwnerError] = useState(false),
        [phoneError, setPhoneError] = useState(false),
        [successToggle, setSuccessToggle] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
        const timer = setTimeout(() => {
          setFadeToggle(true)
        }, 100);
        return () => clearTimeout(timer)
      }, [])


    const countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom", "United States", "Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    const countryMap = countryList.map((element, index) => {
        return (
            <option key={index} value={element}>{element}</option>
        )
    })

    const handleQuoteForm = () => {

        setFirstError(false)
        setLastError(false)
        setFirstStreetError(false)
        setCityError(false)
        setRegionError(false)
        setZipError(false)
        setCountryError(false)
        setEmailError(false)
        setHomeOwnerError(false)
        setPhoneError(false)

        if(first.length === 0){
            return setFirstError(true)
        }
        if(last.length === 0) {
            return setLastError(true)
        }
        if(firstStreet.length === 0) {
            return setFirstStreetError(true)
        }
        if(city.length === 0){
            return setCityError(true)
        }
        if(region.length === 0){
            return setRegionError(true)
        }
        if(zip.length === 0){
            return setZipError(true)
        }
        if(country.length === 0){
            return setCountryError(true)
        }
        if(email.length === 0){
            return setEmailError(true)
        }
        if(homeOwner.length === 0){
            return setHomeOwnerError(true)
        }
        if(phone.length === 0){
            return setPhoneError(true)
        }

        axios.post('/api/mail/quote', {first, last, firstStreet, secondStreet, city, region, zip, country, email, homeOwner, howHear, phone})
        .then(res => {
            setFirst('')
            setLast('')
            setFirstStreet('')
            setSecondStreet('')
            setCity('')
            setRegion('')
            setZip('')
            setCountry('')
            setEmail('')
            setHomeOwner('')
            setPhone('')
            setHowHear('')
            setSuccessToggle(true)
            console.log(res.data.response)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={fadeToggle === false ? 'no-talk' : 'talk-component'}>
            <Helmet>
                <title>Elevate Solar | Talk To Someone</title>
                <meta name='description' content='Get a Quote today! Fill out some details and we at Elevate Solar Energy will contact you shortly.' />
            </Helmet>
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
                </div>
                <p className='detail-text'>Please enter your details below and we'll contact you shortly.</p>
                <div className='quote-name'>
                    <p className='quote-label'>Name</p>
                    <nav className='quote-input-wrapper'>
                        <input
                        value={first}
                        className={first.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setFirst(e.target.value)}
                        placeholder='First'
                        />
                        <input 
                        value={last}
                        className={last.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setLast(e.target.value)}
                        placeholder='Last' />
                    </nav>
                </div>
                <p className={firstError === true ? 'quote-input-err' : 'no-error'}>Invalid First Name!</p>
                <p className={lastError === true ? 'quote-input-err' : 'no-error'}>Invalid Last Name!</p>
                <div className='quote-address' >
                    <p className='quote-label'>Address</p>
                    <input 
                    value={firstStreet}
                    id='full-input'
                    className={firstStreet.length === 0 ? 'quote-input' : 'filled-quote-input'} 
                    onChange={(e) => setFirstStreet(e.target.value)}
                    placeholder='Street Address' />
                    <input 
                    value={secondStreet}
                    id='full-input'
                    className={secondStreet.length === 0 ? 'quote-input' : 'filled-quote-input'} 
                    onChange={(e) => setSecondStreet(e.target.value)}
                    placeholder='Second Street Address' />
                    <nav className='quote-input-wrapper'>
                        <input
                        value={city}
                        className={city.length === 0 ? 'quote-input' : 'filled-quote-input'} 
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City' />
                        <input 
                        value={region}
                        className={region.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder='State / Region' />
                    </nav>
                    <nav className='quote-input-wrapper'>
                        <input 
                        value={zip}
                        className={zip.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder='Postal / Zip Code' />
                        <select 
                        value={country}
                        className={country.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='United States'>
                            <option value={''}>Country</option>
                            {countryMap}
                        </select>
                    </nav>
                </div>
                <p className={firstStreetError === true ? 'quote-input-err' : 'no-error'}>Invalid Street Address!</p>
                <p className={cityError === true ? 'quote-input-err' : 'no-error'}>Invalid City!</p>
                <p className={regionError === true ? 'quote-input-err' : 'no-error'}>Invalid Region!</p>
                <p className={zipError === true ? 'quote-input-err' : 'no-error'}>Invalid Zip!</p>
                <p className={countryError === true ? 'quote-input-err' : 'no-error'}>Invalid Country!</p>
                <div className='quote-email' >
                    <p className='quote-label'>Email</p>
                    <input
                    value={email}
                    id='full-input'
                    className={email.length === 0 ? 'quote-input' : 'filled-quote-input'}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <p className={emailError === true ? 'quote-input-err' : 'no-error'}>Invalid Email!</p>
                <div className='quote-homeowner'>
                    <p id='no-margin' className='quote-label'>Homeowner?</p>
                    <nav>
                        <input
                        type='radio'
                        name='home'
                        value={'yes'} 
                        onChange={(e) => setHomeOwner(e.target.value)}
                        className='quote-radio-input'
                        />
                        <p className='quote-radio-choice'>Yes</p>
                    </nav>
                    <nav>
                        <input
                        name='home'
                        type='radio'
                        value={'no'}
                        onChange={(e) => setHomeOwner(e.target.value)}
                        className='quote-radio-input'
                        />
                        <p className='quote-radio-choice'>No</p>
                    </nav>
                    <nav>
                        <input
                        name='home'
                        type='radio'
                        value={'rent'}
                        onChange={(e) => setHomeOwner(e.target.value)}
                        className='quote-radio-input'
                        />
                        <p className='quote-radio-choice'>Rent</p>
                    </nav>
                </div>
                <p className={homeOwnerError === true ? 'quote-input-err' : 'no-error'}>Are you a homeowner?</p>
                <div className='quote-how'>
                    <p id='no-margin' className='quote-label'>How did you hear about us?</p>
                    <p className='quote-sub-label'>If it was in the online media, on what website was it?</p>
                    <textarea
                    value={howHear}
                    id='quote-textarea'
                    className={howHear.length === 0 ? 'quote-input' : 'filled-quote-input'}
                    onChange={(e) => setHowHear(e.target.value)}
                    />
                </div>
                <div className='quote-number'>
                    <p className='quote-label'>Phone Number</p>
                    <input
                    value={phone}
                    id='full-input'
                    className={phone.length === 0 ? 'quote-input' : 'filled-quote-input'}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <p className={phoneError === true ? 'quote-input-err' : 'no-error'}>Invalid Phone!</p>
                <div className='quote-button'>
                    <button onClick={handleQuoteForm} >Get Quote</button>
                </div>
            </div>
            <div className={successToggle === false ? 'no-success' : 'talk-success-pop'}>
                <nav></nav>
                <div className='talk-success-main'>
                    <nav onClick={() => setSuccessToggle(false)}>X</nav>
                    <p>Details sent successfully!</p>
                    <p id='success-shortly'>We will contact you shortly.</p>
                </div>
            </div>
        </div>
    )
}

export default Talk