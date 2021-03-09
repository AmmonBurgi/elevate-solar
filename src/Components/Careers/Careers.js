import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import axios from 'axios'

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
        [aboutErr, setAboutErr] = useState(false),
        [resumeFile, setResumeFile] = useState(null),
        [baseFile64, setBaseFile64] = useState('')

    useEffect(() => {
        window.scrollTo(0,0)
        const timer = setTimeout(() => {
          setFadeToggle(true)
        }, 100);
        return () => clearTimeout(timer)
      }, [])

    const encodeFileBase = (file) => {
        console.log(resumeFile[0])
        const reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64 = reader.result;
                setBaseFile64(base64)
            };
            reader.onerror = (error) => {
                console.log(error)
            }
        }
    }

    const handleApply = async () => {
        const resumeType = resumeFile.type,
            resumeName = resumeFile.name

        encodeFileBase(resumeFile)
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
        console.log(baseFile64)
        axios.post('/api/mail/career', {name, email, phone, address, about, baseFile64, resumeName, resumeType})
        .then(res => console.log(res.data.response))
        .catch(err => console.log(err))

    }

    return (
        <div className={fadeToggle === false ? 'no-career' : 'career-component'}>
            <Helmet>
                <title>Elevate Solar | Careers</title>
                <meta name='description' content='Want a career in the solar industry? Apply at Elevate Solar Energy today!' />
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
                    <div className='full-resume-wrapper'>
                        <nav className='resume-wrapper'>
                            <button className='fake-file-button'>Resume:</button>
                            <input onChange={(e) => setResumeFile(e.target.files[0])} className='attach-file-button' type='file' />
                        </nav>
                        <p className='file-name'>{resumeFile !== null ? resumeFile.name : null}</p>
                    </div>
                    <button 
                    className='apply-button'
                    onClick={handleApply}>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Careers