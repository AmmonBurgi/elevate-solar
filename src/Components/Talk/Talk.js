import React, {useEffect, useState} from 'react'
import {Helmet} from 'react-helmet'

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

      const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];

    const countryMap = countryList.map((element, index) => {
        return (
            <option key={index} value={element}>{element}</option>
        )
    })

    return (
        <div className={fadeToggle === false ? 'no-talk' : 'talk-component'}>
            <Helmet>
                <title>Elevate Solar | Talk To Someone</title>
                <meta name='description' content='Elevate Solar contact page' />
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
                        className={first.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setFirst(e.target.value)}
                        placeholder='First'
                        />
                        <input 
                        className={last.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setLast(e.target.value)}
                        placeholder='Last' />
                    </nav>
                </div>
                <div className='quote-address' >
                    <p className='quote-label'>Address</p>
                    <input 
                    id='full-input'
                    className={firstStreet.length === 0 ? 'quote-input' : 'filled-quote-input'} 
                    onChange={(e) => setFirstStreet(e.target.value)}
                    placeholder='Street Address' />
                    <input 
                    id='full-input'
                    className={secondStreet.length === 0 ? 'quote-input' : 'filled-quote-input'} 
                    onChange={(e) => setSecondStreet(e.target.value)}
                    placeholder='Second Street Address' />
                    <nav className='quote-input-wrapper'>
                        <input
                        className={city.length === 0 ? 'quote-input' : 'filled-quote-input'} 
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City' />
                        <input 
                        className={region.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder='State / Region' />
                    </nav>
                    <nav className='quote-input-wrapper'>
                        <input 
                        className={zip.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder='Postal / Zip Code' />
                        <select 
                        className={country.length === 0 ? 'quote-input' : 'filled-quote-input'}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='United States'>
                            <option value={''}>Country</option>
                            {countryMap}
                        </select>
                    </nav>
                </div>
                <div className='quote-email' >
                    <p className='quote-label'>Email</p>
                    <input
                    id='full-input'
                    className={email.length === 0 ? 'quote-input' : 'filled-quote-input'}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
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
                <div className='quote-how'>
                    <p id='no-margin' className='quote-label'>How did you hear about us?</p>
                    <p className='quote-sub-label'>If it was in the online media, on what website was it?</p>
                    <textarea
                    id='quote-textarea'
                    className={howHear.length === 0 ? 'quote-input' : 'filled-quote-input'}
                    onChange={(e) => setHowHear(e.target.value)}
                    />
                </div>
                <div className='quote-number'>
                    <p className='quote-label'>Phone Number</p>
                    <input
                    id='full-input'
                    className={phone.length === 0 ? 'quote-input' : 'filled-quote-input'}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='quote-button'>
                    <button >Get Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Talk