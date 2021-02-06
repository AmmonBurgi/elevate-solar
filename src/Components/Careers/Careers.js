import React, {useState, useEffect} from 'react'

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
            <div className='apply-form'>
                <div className='apply-header'>
                    <p>Apply Today!</p>
                    <img alt='elevate-solar-icon' src={solarIcon} />
                </div>
                <nav>
                    <input 
                    className={nameErr === true ? 'input-error' : (name.length === 0 ? 'apply-input' : 'fill-input')}
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Name' />
                    <input 
                    className={emailErr === true ? 'input-error' : (email.length === 0 ? 'apply-input' : 'fill-input')}
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Email' />
                </nav>
                <nav>
                    <input 
                    className={phoneErr === true ? 'input-error' : (phone.length === 0 ? 'apply-input' : 'fill-input')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder='Phone' />
                    <input
                    className={addressErr === true ? 'input-error' : (address.length === 0 ? 'apply-input' : 'fill-input')}
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    placeholder='Address' />
                </nav>
                <textarea
                
                className={aboutErr === true ? 'textAreaErr' : 'apply-textArea'}
                placeholder='Cover Letter For Sales Rep Position...'
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                />
                <button onClick={handleApply}>Apply Now</button>
            </div>
        </div>
    )
}

export default Careers