import React, {useState, useEffect} from 'react'

import './careers.css'

function Careers(){
    const [fadeToggle, setFadeToggle] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          setFadeToggle(true)
        }, 100);
        return () => clearTimeout(timer)
      }, [])

    return (
        <div className={fadeToggle === false ? 'no-career' : 'career-component'}>
            Careers Component
        </div>
    )
}

export default Careers