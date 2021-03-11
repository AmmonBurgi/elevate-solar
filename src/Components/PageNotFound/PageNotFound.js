import React from 'react'

import './pageNotFound.css'

function PageNotFound(){
    return(
        <div id='not-found-component'>
            <h1>404</h1>
            <p id='not-found-title'>Page Not Found!</p>
            <hr></hr>
            <p>The Page you are looking for might have been removed, had it's<br></br> Name changed, or is temporarily unavailable!</p>
        </div>
    )
}

export default PageNotFound