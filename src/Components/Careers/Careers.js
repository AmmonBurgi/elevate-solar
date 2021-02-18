import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'

import './careers.css'
import solarIcon from '../../logo_transparent_background.webp'

function Careers(){
    const [fadeToggle, setFadeToggle] = useState(false),
        [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [phone, setPhone] = useState(''),
        [address, setAddress] = useState(''),
        [about, setAbout] = useState(''),
        [nameErr, setNameErr] = useState(false),
        [emailErr, setEmailErr] = useState(false),
        [phoneErr, setPhoneErr] = useState(false),
        [addressErr, setAddressErr] = useState(false),
        [aboutErr, setAboutErr] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setFadeToggle(true)
        }, 100);
        return () => clearTimeout(timer)
      }, [])


    const handleApply = () => {
        setNameErr(false)
        setEmailErr(false)
        setPhoneErr(false)
        setAddressErr(false)
        setAboutErr(false)

        if(name.length === 0){
           return setNameErr(true)
        }
        if(email.length === 0){
            return setEmailErr(true)
        }
        if(phone.length === 0){
            return setPhoneErr(true)
        }
        if(address.length === 0){
            return setAddressErr(true)
        }
        if(about.length === 0){
            return setAboutErr(true)
        }
    }


    return (
        <div className={fadeToggle === false ? 'no-career' : 'career-component'}>
            <Helmet>
                <title>Elevate Solar | Careers</title>
            </Helmet>
            <div className='apply-form'>
                <div className='apply-header'>
                    <p>Apply Today!</p>
                    <img alt='elevate-solar-icon' src={solarIcon} />
                </div>
                <nav>
                    <div className='apply-input-wrapper'>
                        <input 
                        className={name.length === 0 ? 'apply-input' : 'fill-input'}
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Name' />
                        <p className={nameErr === true ? 'input-error' : 'no-error'}>Name is Invalid!</p>
                    </div>
                    <div className='apply-input-wrapper'>
                        <input 
                        className={email.length === 0 ? 'apply-input' : 'fill-input'}
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='Email' />
                        <p className={emailErr === true ? 'input-error' : 'no-error'}>Email is Invalid!</p>
                    </div>
                </nav>
                <nav>
                    <div className='apply-input-wrapper'>
                        <input 
                        className={phone.length === 0 ? 'apply-input' : 'fill-input'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder='Phone' />
                        <p className={phoneErr === true ? 'input-error' : 'no-error'}>Invalid Phone Number!</p>
                    </div>
                    <div className='apply-input-wrapper'>
                        <input
                        className={address.length === 0 ? 'apply-input' : 'fill-input'}
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder='Address' />
                        <p className={addressErr === true ? 'input-error' : 'no-error'}>Invalid Address!</p>
                    </div>
                </nav>
                <textarea
                className={about.length === 0 ? 'text-area' : 'fill-text-area'}
                placeholder='Cover Letter For Sales Rep Position...'
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                />
                <div className='apply-button-wrapper'>
                    <nav className='resume-wrapper'>
                        <p>Resume: </p>
                        <input className='attach-file-button' type='file' />
                    </nav>
                    <button 
                    className='apply-button'
                    onClick={handleApply}>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Careers